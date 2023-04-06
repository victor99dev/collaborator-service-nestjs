/*
  Warnings:

  - You are about to drop the column `documents_type` on the `documents` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "documents_number_key";

-- AlterTable
ALTER TABLE "documents" DROP COLUMN "documents_type",
ADD COLUMN     "document_type" "DocumentType" NOT NULL DEFAULT 'CPF';
