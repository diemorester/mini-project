'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { FaRegEdit } from 'react-icons/fa';
import Modal from '@/components/modal';
import { CreateEventModal } from './components/modals/create-event.modal';
import Cookies from 'js-cookie';

export default function OrganizerDashboardPage() {
  const [showEventModal, setShowEventModal] = useState(false);
  const [eventPage, setEventPage] = useState<{
    limit: number;
    page: number;
  }>({
    limit: 5,
    page: 1,
  });
  const [data, setData] = useState<
    {
      id: number;
      name: string;
      date: string;
      price: string;
      image: string;
    }[]
  >([]);

  const handleShowEventModal = () => {
    setShowEventModal(true);
  };

  const getAllEvents = async (limit = 5, page = 1) => {
    const response = await fetch(
      `http://localhost:8000/api/events/organizer?page=${page}&limit=${limit}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${Cookies.get('token')}`,
        },
      },
    );
    const data = await response.json();
    if (data && data.events) {
      const formatDate = new Intl.DateTimeFormat('en-US', {
        day: 'numeric',
        month: 'short',
      }).format;
      data.events.map((event: any) => {
        setData((prevData) => [
          ...prevData,
          {
            id: event.id,
            name: event.title,
            date: `${formatDate(new Date(event.startDateTime))} - ${formatDate(new Date(event.endDateTime))}`,
            price: event.isFree ? 'Free' : `Rp ${event.price}`,
            image: event.image,
          },
        ]);
      });
      // filter duplicate data
      setData((prevData) =>
        prevData.filter(
          (data, index, self) =>
            self.findIndex((t) => t.id === data.id) === index,
        ),
      );
    }
  };

  useEffect(() => {
    getAllEvents(eventPage.limit, eventPage.page);
  }, [eventPage]);

  return (
    <>
      <div className="p-6 w-screen mx-auto bg-sept-black ">
        <h1 className="text-3xl font-bold mb-8 text-center text-white">
          Organizer Dashboard
        </h1>

        <section className="mb-12 bg-gray-700 p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold mb-4 text-white">
            Statistics Overview
          </h1>
        </section>
        <section className="mb-12 bg-gray-700 p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold mb-4 text-white">
              List Events
            </h1>
            <button
              type="button"
              onClick={handleShowEventModal}
              className="bg-sept-purple text-white px-4 py-2 rounded-lg"
            >
              Add Event
            </button>
          </div>
          <div className="mt-3">
            <div className="grid grid-cols-12 gap-3">
              {data.map((data) => (
                <div key={data.id} className="col-span-2">
                  <Image
                    src={
                      'http://localhost:8000/' +
                      data.image.replace('public', '')
                    }
                    alt="dummy event"
                    height={200}
                    width={200}
                    objectFit="cover"
                    className="rounded-t-lg h-40 object-cover w-full object-center"
                  />
                  <div className="p-3 py-5 bg-white rounded-b-lg flex flex-col">
                    <h1 className="text-sm text-gray-800 truncate">
                      {data.name}
                    </h1>
                    <p className="text-sm text-gray-500 mt-1">{data.date}</p>
                    <span className="text-sm text-gray-900 font-semibold mt-4">
                      {data.price}
                    </span>
                    <hr className="my-4" />
                    <div className="grid grid-cols-5 gap-2 w-full items-center">
                      <div className="col-span-3">
                        <Link
                          href={`/organizer/dashboard/events/${data.id}`}
                          className="text-sm text-white  bg-sept-purple py-2 flex justify-center rounded-lg w-full text-center"
                        >
                          Detail
                        </Link>
                      </div>
                      <div className="col-span-1">
                        <button
                          className="text-sm text-white bg-red-800 py-2 flex justify-center rounded-lg w-full text-center"
                          type="button"
                        >
                          <FaRegTrashAlt />
                        </button>
                      </div>
                      <div className="col-span-1">
                        <button
                          className="text-sm text-white bg-sept-green py-2 flex justify-center rounded-lg w-full text-center"
                          type="button"
                        >
                          <FaRegEdit />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      {showEventModal && (
        <CreateEventModal setShowEventModal={setShowEventModal} />
      )}
    </>
  );
}
