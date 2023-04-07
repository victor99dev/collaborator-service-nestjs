/*
  Warnings:

  - The `department_id` column on the `collaborators` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "collaborators" DROP COLUMN "department_id",
ADD COLUMN     "department_id" TEXT[];
