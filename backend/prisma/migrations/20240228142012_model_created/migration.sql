-- CreateTable
CREATE TABLE "PropertyOwner" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "firstName" TEXT,
    "lastName" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PropertyOwner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "companyName" TEXT,
    "address" TEXT,
    "city" TEXT,
    "state" TEXT,
    "pincode" INTEGER,
    "country" TEXT,
    "gstin" TEXT,
    "propertyOwnerId" INTEGER NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PropertyOwner_email_key" ON "PropertyOwner"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Company_propertyOwnerId_key" ON "Company"("propertyOwnerId");

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_propertyOwnerId_fkey" FOREIGN KEY ("propertyOwnerId") REFERENCES "PropertyOwner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
