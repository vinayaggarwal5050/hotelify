import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

interface PropertyOwerInterface {
  email: string,
  password: string,
  phoneNumber?: string,

  firstName?: string,
  lastName?: string,

}

//----------------Parent Functions --------------------------------------

export async function addNewPropertyOwner(properOwnerData: PropertyOwerInterface) {

  try {

    const dbResponse = await prisma.propertyOwner.create({
      data: {
        email: properOwnerData?.email,
        password: properOwnerData?.password,
        phoneNumber: properOwnerData?.password,

        firstName: properOwnerData?.firstName,
        lastName: properOwnerData?.lastName

      },
      select: {
        id: true,
        email: true,
        createdAt: true
      }
    })

    return dbResponse;

  } catch (err) {
    console.error(err);
  }
}


export async function findPropertyOwnerDetails(properyOwnerId: number) {
  try {
    const dbResponse = await prisma.propertyOwner.findUnique({
      where : {
        id: properyOwnerId
      },
      select: {
        id: true,
        email: true,
        password : true,
        firstName: true,
        lastName: true,
        company: true,
        hotels: true,
        createdAt: true
      }
    })

    return dbResponse;

  } catch(err) {
    console.error(err);
  }
}

export async function findAllProperyOwners() {
  try {
    const dbResponse = await prisma.propertyOwner.findMany({
      select: {
        id: true,
        email: true,
        password : true,
        firstName: true,
        lastName: true,
        company: true,
        hotels: true,
        createdAt: true
      }
    })

    return dbResponse;

  } catch(err) {
    console.error(err);
  }
}

export async function deletePropertyOwner(properyOwnerId: number) {
  try {
    const dbResponse = await prisma.propertyOwner.delete({
      where : {
        id: properyOwnerId
      }
    })

    return dbResponse;

  } catch(err) {
    console.error(err);
  }
}

//----------------------Child Functions----------------------------------------//

