/*
  Warnings:

  - Added the required column `description` to the `departments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "departments" ADD COLUMN     "description" TEXT NOT NULL;
