-- AlterTable
ALTER TABLE "addresses" ALTER COLUMN "street_address" DROP NOT NULL,
ALTER COLUMN "number" DROP NOT NULL,
ALTER COLUMN "city" DROP NOT NULL,
ALTER COLUMN "state" DROP NOT NULL,
ALTER COLUMN "country" DROP NOT NULL;

-- AlterTable
ALTER TABLE "departments" ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "documents" ALTER COLUMN "number" DROP NOT NULL,
ALTER COLUMN "date_of_issue" DROP NOT NULL;

-- AlterTable
ALTER TABLE "groups" ALTER COLUMN "description" DROP NOT NULL;
