-- CreateEnum
CREATE TYPE "DocumentType" AS ENUM ('CPF', 'RG', 'CNH', 'OTHERS');

-- AlterTable
ALTER TABLE "collaborators" ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "departments" ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "groups" ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "addresses" (
    "street_address" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "collaborator_id" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "documents" (
    "number" TEXT NOT NULL,
    "date_of_issue" TIMESTAMP(3) NOT NULL,
    "documents_type" "DocumentType" NOT NULL DEFAULT 'CPF',
    "collaborator_id" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "addresses_collaborator_id_key" ON "addresses"("collaborator_id");

-- CreateIndex
CREATE UNIQUE INDEX "documents_number_key" ON "documents"("number");

-- CreateIndex
CREATE UNIQUE INDEX "documents_collaborator_id_key" ON "documents"("collaborator_id");

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_collaborator_id_fkey" FOREIGN KEY ("collaborator_id") REFERENCES "collaborators"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_collaborator_id_fkey" FOREIGN KEY ("collaborator_id") REFERENCES "collaborators"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
