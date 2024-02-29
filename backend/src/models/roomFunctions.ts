import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


interface roomInterface {
  category: string,
  roomNumber: number,
  roomPrefix?: string,
  description?: string,
  inService?: boolean,
  occupied?: boolean

  hotelId: number
}

export async function addNewRoom(roomData: roomInterface) {

  try {
    const dbResponse = await prisma.room.create({
      data: {
        category: roomData.category,
        roomNumber: roomData.roomNumber,
        roomPrefix: roomData?.roomPrefix,
        description: roomData?.description,
        inService: roomData?.inService,
        occupied: roomData?.inService,

        hotelId: roomData.hotelId
      },
      
      select: {
        id: true,
        category: true,
        roomNumber: true,
        roomPrefix: true,
        description: true,
        inService: true,
        occupied: true,
        
        hotelId: true
      }
    })

    return dbResponse;
  } catch (err) {
    console.log(err);
  }
}


export async function findRoomDetails(roomId: number) {
  try {
    const dbResponse = await prisma.room.findUnique({
      where: {
        id: roomId
      },

      select: {
        id: true,
        category: true,
        roomNumber: true,
        roomPrefix: true,
        description: true,
        inService: true,
        occupied: true,
        
        hotelId: true
      }
    })

    return dbResponse;

  } catch(err) {
    console.log(err);
  }
}

export async function findAllRooms() {
  try {
    const dbResponse = await prisma.room.findMany({
      select: {
        id: true,
        category: true,
        roomNumber: true,
        roomPrefix: true,
        description: true,
        inService: true,
        occupied: true,
        
        hotelId: true
      }
    })

    return dbResponse;

  } catch(err) {
    console.log(err);
  }
}

export async function deleteRoom(roomId: number) {
  try {
    const dbResponse = await prisma.room.delete({
      where: {
        id: roomId,
      },
      select: {
        id: true,
        hotelId: true,
        roomNumber: true,
        roomPrefix: true
      }
    })

    return dbResponse;

  } catch(err) {
    console.log(err);
  }

}

export async function findAllRoomsForHotelId(hotelId: number) {
  try {
    const dbResponse = await prisma.room.findMany({
      where: {
        hotelId: hotelId
      },

      select: {
        id: true,
        category: true,
        roomNumber: true,
        roomPrefix: true,
        description: true,
        inService: true,
        occupied: true,
        
        hotelId: true
      }
    })

    return dbResponse;

  } catch(err) {
    console.log(err);
  }
}
