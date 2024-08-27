/*
  Warnings:

  - Added the required column `fullName` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `company` VARCHAR(191) NULL,
    ADD COLUMN `fullName` VARCHAR(191) NOT NULL;
