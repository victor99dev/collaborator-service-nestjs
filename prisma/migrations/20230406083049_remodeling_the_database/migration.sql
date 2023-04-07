-- DropForeignKey
ALTER TABLE "collaborators" DROP CONSTRAINT "collaborators_department_id_fkey";

-- CreateTable
CREATE TABLE "_CollaboratorsToDepartments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CollaboratorsToDepartments_AB_unique" ON "_CollaboratorsToDepartments"("A", "B");

-- CreateIndex
CREATE INDEX "_CollaboratorsToDepartments_B_index" ON "_CollaboratorsToDepartments"("B");

-- AddForeignKey
ALTER TABLE "_CollaboratorsToDepartments" ADD CONSTRAINT "_CollaboratorsToDepartments_A_fkey" FOREIGN KEY ("A") REFERENCES "collaborators"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CollaboratorsToDepartments" ADD CONSTRAINT "_CollaboratorsToDepartments_B_fkey" FOREIGN KEY ("B") REFERENCES "departments"("id") ON DELETE CASCADE ON UPDATE CASCADE;
