-- AlterTable
ALTER TABLE "Category" ALTER COLUMN "defaultPrice" DROP NOT NULL,
ALTER COLUMN "defaultPrice" SET DEFAULT 1000;
