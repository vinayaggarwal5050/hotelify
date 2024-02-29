-- CreateTable
CREATE TABLE "Hotel" (
    "id" INTEGER NOT NULL,
    "hotelName" TEXT,
    "address" TEXT,
    "city" TEXT,
    "state" TEXT,
    "pincode" INTEGER,
    "country" TEXT,
    "gpsLocation" TEXT,
    "subDomain" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "propertyOwnerId" INTEGER NOT NULL,

    CONSTRAINT "Hotel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Room" (
    "id" INTEGER NOT NULL,
    "hotelId" INTEGER NOT NULL,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Hotel_propertyOwnerId_key" ON "Hotel"("propertyOwnerId");

-- CreateIndex
CREATE UNIQUE INDEX "Room_hotelId_key" ON "Room"("hotelId");

-- AddForeignKey
ALTER TABLE "Hotel" ADD CONSTRAINT "Hotel_propertyOwnerId_fkey" FOREIGN KEY ("propertyOwnerId") REFERENCES "PropertyOwner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES "Hotel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
