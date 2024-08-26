import { Request, Response } from 'express';
import prisma from '@/prisma';
import fs from 'fs';
import path from 'path';

export class EventController {
  createEvent = async (req: Request, res: Response) => {
    try {
      const {
        title,
        description,
        startDateTime,
        endDateTime,
        location,
        category,
        price,
        isFree,
        ticket,
      } = req.body;

      console.log(req.body);
      const userId = req.user?.id;
      const parsedPrice = parseFloat(price);

      const startDate = new Date(`${startDateTime}T00:00:00Z`);
      const endDate = new Date(`${endDateTime}T00:00:00Z`);
      console.log(startDateTime, endDateTime);

      const isEventFree = isFree === 'true' || parsedPrice <= 0;

      let imageUrl: string | null = null;
      if (req.file) {
        const { originalname, path: tempPath } = req.file;
        const ext = path.extname(originalname);
        imageUrl = `${tempPath}${ext}`;
        fs.renameSync(tempPath, imageUrl);
      }

      let parsedCategoryId: number | null = null;
      const existingCategory = await prisma.category.findUnique({
        where: { name: category },
      });

      if (!existingCategory) {
        const createdCategory = await prisma.category.create({
          data: { name: category },
        });
        parsedCategoryId = createdCategory.id;
      } else {
        parsedCategoryId = existingCategory.id;
      }

      if (userId) {
        console.log('oke');
        const createdEvent = await prisma.event.create({
          data: {
            title,
            description,
            startDateTime: startDate,
            endDateTime: endDate,
            location,
            categoryId: parsedCategoryId,
            organizerId: userId,
            image: imageUrl,
            price: isEventFree ? 0 : parsedPrice,
            isFree: isEventFree,
          },
        });
        return res.status(201).json(createdEvent);
      }

      throw new Error('User not authenticated');
    } catch (err) {
      console.log(err);
      res.status(400).json({ status: 'error', message: err });
    }
  };

  async updateEvent(req: Request, res: Response) {
    try {
      const {
        title,
        description,
        startDate,
        endDate,
        location,
        categoryId,
        price,
        isFree,
        ticket,
      } = req.body;
      const eventId = parseInt(req.params.id, 10);
      const userId = req.user?.id;
      const parsedPrice = parseFloat(price);
      const parsedTicket = parseFloat(ticket);
      const startDateTime = new Date(startDate);
      const endDateTime = new Date(endDate);
      const parsedCategoryId = parseInt(categoryId, 10);
      const isEventFree = isFree === 'true' || parsedPrice <= 0;

      let imageUrl: string | null = null;
      if (req.file) {
        const { originalname, path: tempPath } = req.file;
        const ext = path.extname(originalname);
        imageUrl = `${tempPath}${ext}`;
        fs.renameSync(tempPath, imageUrl);
      }

      const existingEvent = await prisma.event.findUnique({
        where: { id: eventId },
      });
      if (!existingEvent) throw new Error('Event not found');

      if (userId && existingEvent.organizerId === userId) {
        const updatedEvent = await prisma.event.update({
          where: { id: eventId },
          data: {
            title,
            description,
            startDateTime,
            endDateTime,
            location,
            categoryId: parsedCategoryId,
            image: imageUrl || existingEvent.image,
            price: isEventFree ? 0 : parsedPrice,
            isFree: isEventFree,
          },
        });
        return res.status(200).json(updatedEvent);
      }

      throw new Error('Unauthorized to update this event');
    } catch (err) {
      res.status(400).json({ status: 'error', message: err });
    }
  }

  async deleteEvent(req: Request, res: Response) {
    try {
      const eventId = parseInt(req.params.id, 10);
      const userId = req.user?.id;

      const existingEvent = await prisma.event.findUnique({
        where: { id: eventId },
      });
      if (!existingEvent) throw new Error('Event not found');

      if (userId && existingEvent.organizerId === userId) {
        const deletedEvent = await prisma.event.delete({
          where: { id: eventId },
        });
        return res.status(200).json(deletedEvent);
      }

      throw new Error('Unauthorized to delete this event');
    } catch (err) {
      res.status(400).json({ status: 'error', message: err });
    }
  }

  async getAllEvents(req: Request, res: Response) {
    try {
      const {
        q: query = '',
        category = '',
        page = '1',
        limit = '3',
      } = req.query;

      const pageNumber = parseInt(page as string, 10) || 1;
      const limitNumber = parseInt(limit as string, 10) || 3;

      const events = await prisma.event.findMany({
        orderBy: { id: 'desc' },
        where: {
          AND: [
            { category: { name: { contains: category as string } } },
            {
              OR: [
                { title: { contains: query as string } },
                { organizer: { username: { contains: query as string } } },
              ],
            },
          ],
        },
        include: {
          organizer: { select: { username: true } },
          category: { select: { name: true } },
        },
        skip: (pageNumber - 1) * limitNumber,
        take: limitNumber,
      });

      const totalEvents = await prisma.event.count({
        where: {
          AND: [
            { category: { name: { contains: category as string } } },
            {
              OR: [
                { title: { contains: query as string } },
                { organizer: { username: { contains: query as string } } },
              ],
            },
          ],
        },
      });

      const totalPages = Math.ceil(totalEvents / limitNumber);

      res.status(200).json({ events, totalPages, currentPage: pageNumber });
    } catch (err) {
      res.status(400).json({ status: 'error', message: err });
    }
  }

  async getEventById(req: Request, res: Response) {
    try {
      const eventId = parseInt(req.params.id, 10);

      const event = await prisma.event.findUnique({
        where: { id: eventId },
        include: {
          organizer: { select: { username: true } },
          category: { select: { name: true } },
        },
      });

      if (!event) throw new Error('Event not found');

      res.status(200).json(event);
    } catch (err) {
      res.status(400).json({ status: 'error', message: err });
    }
  }

  async getEventsByOrganizer(req: Request, res: Response) {
    try {
      const userId = req.user?.id;
      const { page = '1', limit = '3' } = req.query;

      const pageNumber = parseInt(page as string, 10) || 1;
      const limitNumber = parseInt(limit as string, 10) || 3;

      const events = await prisma.event.findMany({
        where: { organizerId: userId },
        include: {
          organizer: { select: { username: true } },
          category: { select: { name: true } },
        },
        skip: (pageNumber - 1) * limitNumber,
        take: limitNumber,
      });

      const totalEvents = await prisma.event.count({
        where: { organizerId: userId },
      });
      const totalPages = Math.ceil(totalEvents / limitNumber);

      res.status(200).json({ events, totalPages, currentPage: pageNumber });
    } catch (err) {
      res.status(400).json({ status: 'error', message: err });
    }
  }
}
