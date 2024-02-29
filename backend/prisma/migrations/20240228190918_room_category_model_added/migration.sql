-- AlterTable
ALTER TABLE "Hotel" ADD COLUMN     "hotelAmenities" TEXT[] DEFAULT ARRAY['Parking', 'Power Backup', 'Hot Water', 'Inhouse Cafe/Restaurant', 'Gym', 'Pick and Drop Facility']::TEXT[],
ADD COLUMN     "noOfRooms" INTEGER,
ADD COLUMN     "roomCategories" TEXT[] DEFAULT ARRAY['uncategorized']::TEXT[];

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "categoryName" TEXT NOT NULL DEFAULT 'uncategorized',
    "amenities" TEXT[] DEFAULT ARRAY['wifi', 'Hot water', 'Air Conditioning', 'Hair Dryer', 'Hot Water Cattle']::TEXT[],
    "description" TEXT,
    "defaultPrice" INTEGER NOT NULL,
    "decidedPrice" INTEGER,
    "adultDefaultOccupancy" INTEGER NOT NULL DEFAULT 2,
    "childDefaultOccupancy" INTEGER NOT NULL DEFAULT 2,
    "totalDefaultOccupancy" INTEGER NOT NULL DEFAULT 3,
    "adultMaxOccupancy" INTEGER DEFAULT 3,
    "childMaxOccupanty" INTEGER DEFAULT 2,
    "additionalAdultPrice" INTEGER DEFAULT 1000,
    "additionalChildPrice" INTEGER DEFAULT 500,
    "hotelId" INTEGER NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Room" (
    "id" SERIAL NOT NULL,
    "category" TEXT NOT NULL,
    "roomNumber" INTEGER NOT NULL,
    "roomPrefix" TEXT,
    "description" TEXT,
    "hotelId" INTEGER NOT NULL,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Room_roomNumber_key" ON "Room"("roomNumber");

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES "Hotel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES "Hotel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
