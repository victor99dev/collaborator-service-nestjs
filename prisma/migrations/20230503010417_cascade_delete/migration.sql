-- DropForeignKey
ALTER TABLE "addresses" DROP CONSTRAINT "addresses_collaborator_id_fkey";

-- DropForeignKey
ALTER TABLE "documents" DROP CONSTRAINT "documents_collaborator_id_fkey";

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_collaborator_id_fkey" FOREIGN KEY ("collaborator_id") REFERENCES "collaborators"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_collaborator_id_fkey" FOREIGN KEY ("collaborator_id") REFERENCES "collaborators"("id") ON DELETE CASCADE ON UPDATE CASCADE;
