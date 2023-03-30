/*
  Warnings:

  - You are about to drop the column `department` on the `collaborators` table. All the data in the column will be lost.
  - You are about to drop the column `group` on the `collaborators` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[group_id]` on the table `collaborators` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "collaborators" DROP COLUMN "department",
DROP COLUMN "group";

-- CreateIndex
CREATE UNIQUE INDEX "collaborators_group_id_key" ON "collaborators"("group_id");
