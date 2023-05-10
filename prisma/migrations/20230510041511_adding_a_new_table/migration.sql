/*
  Warnings:

  - You are about to drop the column `email` on the `collaborators` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "collaborators" DROP COLUMN "email";

-- CreateTable
CREATE TABLE "contacts" (
    "email" TEXT,
    "telephone" TEXT,
    "social_network" TEXT NOT NULL,
    "collaborator_id" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "contacts_collaborator_id_key" ON "contacts"("collaborator_id");

-- AddForeignKey
ALTER TABLE "contacts" ADD CONSTRAINT "contacts_collaborator_id_fkey" FOREIGN KEY ("collaborator_id") REFERENCES "collaborators"("id") ON DELETE CASCADE ON UPDATE CASCADE;
