-- CreateTable
CREATE TABLE "collaborators" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "age" TEXT NOT NULL,
    "group_id" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "description" TEXT,
    "active" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "collaborators_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "departments" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "active" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "departments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "groups" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "active" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "groups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "addresses" (
    "street_address" TEXT,
    "number" TEXT,
    "city" TEXT,
    "state" TEXT,
    "country" TEXT,
    "collaborator_id" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "documents" (
    "number" TEXT,
    "date_of_issue" TIMESTAMP(3),
    "document_type" TEXT NOT NULL,
    "collaborator_id" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CollaboratorsToDepartments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "collaborators_group_id_key" ON "collaborators"("group_id");

-- CreateIndex
CREATE UNIQUE INDEX "addresses_collaborator_id_key" ON "addresses"("collaborator_id");

-- CreateIndex
CREATE UNIQUE INDEX "documents_collaborator_id_key" ON "documents"("collaborator_id");

-- CreateIndex
CREATE UNIQUE INDEX "_CollaboratorsToDepartments_AB_unique" ON "_CollaboratorsToDepartments"("A", "B");

-- CreateIndex
CREATE INDEX "_CollaboratorsToDepartments_B_index" ON "_CollaboratorsToDepartments"("B");

-- AddForeignKey
ALTER TABLE "collaborators" ADD CONSTRAINT "collaborators_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_collaborator_id_fkey" FOREIGN KEY ("collaborator_id") REFERENCES "collaborators"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_collaborator_id_fkey" FOREIGN KEY ("collaborator_id") REFERENCES "collaborators"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CollaboratorsToDepartments" ADD CONSTRAINT "_CollaboratorsToDepartments_A_fkey" FOREIGN KEY ("A") REFERENCES "collaborators"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CollaboratorsToDepartments" ADD CONSTRAINT "_CollaboratorsToDepartments_B_fkey" FOREIGN KEY ("B") REFERENCES "departments"("id") ON DELETE CASCADE ON UPDATE CASCADE;
