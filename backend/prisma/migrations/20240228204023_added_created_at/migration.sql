-- AlterTable
ALTER TABLE "Room" ADD COLUMN     "inService" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "occupied" BOOLEAN NOT NULL DEFAULT false;
