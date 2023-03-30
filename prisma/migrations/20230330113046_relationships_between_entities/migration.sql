/*
  Warnings:

  - Added the required column `department_id` to the `collaborators` table without a default value. This is not possible if the table is not empty.
  - Added the required column `group_id` to the `collaborators` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "collaborators" ADD COLUMN     "department_id" TEXT NOT NULL,
ADD COLUMN     "group_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "collaborators" ADD CONSTRAINT "collaborators_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "departments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "collaborators" ADD CONSTRAINT "collaborators_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
