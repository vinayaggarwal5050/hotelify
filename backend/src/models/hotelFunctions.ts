import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

interface HotelInterface {
  hotelName?: string,
  address?: string,
  city?: string,
  state?: string,
  pincode?: number,
  country?: string,

  gpsLocation?: string,
  subDomain?: string,

  liveStatus?: boolean,

  roomCategories?: string[],
  hotelAmenities?: string[],
  noOfRooms?: number,

  propertyOwnerId: number,
}

export async function addNewHotel(hotelData: HotelInterface) {
  try {
    const dbResponse = await prisma.hotel.create({
      data: {
        hotelName: hotelData?.hotelName,
        address: hotelData?.address,
        city: hotelData?.city,
        state: hotelData?.state,
        pincode: hotelData?.pincode,
        country: hotelData?.country,

        gpsLocation: hotelData?.gpsLocation,
        subDomain: hotelData?.subDomain,

        liveStatus: hotelData?.liveStatus,
        roomCategories: hotelData?.roomCategories,
        hotelAmenities: hotelData?.hotelAmenities,
        noOfRooms: hotelData?.noOfRooms,

        propertyOwnerId: hotelData?.propertyOwnerId
      },

      select: {
        id: true,

        hotelName: true,
        address: true,
        city: true,
        state: true,
        pincode: true,
        country: true,

        gpsLocation: true,
        subDomain: true,

        liveStatus: true,
        createdAt: true,

        roomCategories: true,
        hotelAmenities: true,
        noOfRooms: true,

        categories: true,
        rooms: true,

        propertyOwnerId: true
      }
    })

    return dbResponse;
  } catch(err) {
    console.log(err);
  }
}

export async function findHotelDetails(hotelId: number) {
  try {
    const dbResponse = await prisma.hotel.findUnique({
      where : {
        id: hotelId
      },
      select: {
        id: true,

        hotelName: true,
        address: true,
        city: true,
        state: true,
        pincode: true,
        country: true,

        gpsLocation: true,
        subDomain: true,

        liveStatus: true,
        createdAt: true,

        roomCategories: true,
        hotelAmenities: true,
        noOfRooms: true,

        categories: true,
        rooms: true,

        propertyOwnerId: true
      }
    })

    return dbResponse;

  } catch(err) {
    console.error(err);
  }
}

export async function findAllHotels() {
  try {
    const dbResponse = await prisma.hotel.findMany({
      select: {
        id: true,

        hotelName: true,
        address: true,
        city: true,
        state: true,
        pincode: true,
        country: true,

        gpsLocation: true,
        subDomain: true,

        liveStatus: true,
        createdAt: true,

        roomCategories: true,
        hotelAmenities: true,
        noOfRooms: true,

        categories: true,
        rooms: true,

        propertyOwnerId: true
      }
    })

    return dbResponse;

  } catch(err) {
    console.error(err);
  }
}

export async function deleteHotel(hotelId: number) {
  try {
    const dbResponse = await prisma.hotel.delete({
      where : {
        id: hotelId
      },
      select: {
        id: true,
        hotelName: true,
        propertyOwnerId: true
      }
    })

    return dbResponse;

  } catch(err) {
    console.error(err);
  }
}
