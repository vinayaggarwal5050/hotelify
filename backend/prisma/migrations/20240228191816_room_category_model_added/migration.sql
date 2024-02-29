-- AlterTable
ALTER TABLE "Category" ALTER COLUMN "categoryName" SET DEFAULT 'Uncategorized';

-- AlterTable
ALTER TABLE "Hotel" ALTER COLUMN "hotelAmenities" SET DEFAULT ARRAY['']::TEXT[],
ALTER COLUMN "roomCategories" SET DEFAULT ARRAY['Uncategorized']::TEXT[];
