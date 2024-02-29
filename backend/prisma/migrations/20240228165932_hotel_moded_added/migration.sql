-- AlterTable
CREATE SEQUENCE hotel_id_seq;
ALTER TABLE "Hotel" ALTER COLUMN "id" SET DEFAULT nextval('hotel_id_seq');
ALTER SEQUENCE hotel_id_seq OWNED BY "Hotel"."id";
