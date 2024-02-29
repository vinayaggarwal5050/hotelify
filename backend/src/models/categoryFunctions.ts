import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

interface CategoryInterface {
  categoryName?: string,
  amenities?: string[],
  description?: string,

  defaultPrice: number,
  decidedPrice?: number,

  adultDefaultOccupancy?: number,
  childDefaultOccupancy?: number,
  totalDefaultOccupancy?: number,
  adultMaxOccupancy?: number,
  childMaxOccupanty?: number,

  additionalAdultPrice?: number,
  additionalChildPrice?: number,

  hotelId: number
}

export async function addNewCategory(categoryData: CategoryInterface) {
  try{
    const dbResponse = await prisma.category.create({
      data: {
        categoryName: categoryData?.categoryName,
        amenities: categoryData?.amenities,
        description: categoryData?.description,
      
        defaultPrice: categoryData?.decidedPrice,
        decidedPrice: categoryData?.decidedPrice,
      
        adultDefaultOccupancy: categoryData?.adultDefaultOccupancy,
        childDefaultOccupancy: categoryData?.childDefaultOccupancy,
        totalDefaultOccupancy: categoryData?.totalDefaultOccupancy,
        adultMaxOccupancy: categoryData?.adultMaxOccupancy,
        childMaxOccupanty: categoryData?.childMaxOccupanty,
      
        additionalAdultPrice: categoryData?.additionalAdultPrice,
        additionalChildPrice: categoryData?.additionalChildPrice,
      
        hotelId: categoryData.hotelId
      },
      
      select: {
        id: true,
        categoryName: true,
        amenities: true,
        description: true,
      
        defaultPrice: true,
        decidedPrice: true,
      
        adultDefaultOccupancy:  true,
        childDefaultOccupancy:  true,
        totalDefaultOccupancy:  true,
        adultMaxOccupancy: true,
        childMaxOccupanty: true,
      
        additionalAdultPrice: true,
        additionalChildPrice: true,
      
        hotelId: true,
      }
    })

    return dbResponse;

  } catch(err) {
    console.log(err)
  }
}

export async function findCategoryDetails(categoryId: number) {
  try {
    const dbResponse = await prisma.category.findUnique({
      where: {
        id: categoryId
      },

      select: {
        id: true,
        categoryName: true,
        amenities: true,
        description: true,
      
        defaultPrice: true,
        decidedPrice: true,
      
        adultDefaultOccupancy:  true,
        childDefaultOccupancy:  true,
        totalDefaultOccupancy:  true,
        adultMaxOccupancy: true,
        childMaxOccupanty: true,
      
        additionalAdultPrice: true,
        additionalChildPrice: true,
      
        hotelId: true,
      }
    })

    return dbResponse;

  } catch(err) {
    console.log(err);
  }
}


export async function findAllCategories() {
  try {
    const dbResponse = await prisma.category.findMany({
      select: {
        id: true,
        categoryName: true,
        amenities: true,
        description: true,
      
        defaultPrice: true,
        decidedPrice: true,
      
        adultDefaultOccupancy:  true,
        childDefaultOccupancy:  true,
        totalDefaultOccupancy:  true,
        adultMaxOccupancy: true,
        childMaxOccupanty: true,
      
        additionalAdultPrice: true,
        additionalChildPrice: true,
      
        hotelId: true,
      }
    })

    return dbResponse;

  } catch(err) {
    console.log(err);
  }
}

export async function deleteCategory(categoryId: number) {
  try {
    const dbResponse = await prisma.category.delete({
      where: {
        id: categoryId,
      },
      select: {
        id: true,
        hotelId: true,
        categoryName: true
      }
    })

    return dbResponse;

  } catch(err) {
    console.log(err);
  }

}

export async function findAllCategoriesForHotelId(hotelId: number) {
  try {
    const dbResponse = await prisma.category.findMany({
      where: {
        hotelId: hotelId
      },

      select: {
        id: true,
        categoryName: true,
        amenities: true,
        description: true,
      
        defaultPrice: true,
        decidedPrice: true,
      
        adultDefaultOccupancy:  true,
        childDefaultOccupancy:  true,
        totalDefaultOccupancy:  true,
        adultMaxOccupancy: true,
        childMaxOccupanty: true,
      
        additionalAdultPrice: true,
        additionalChildPrice: true,
      
        hotelId: true,
      }
    })

    return dbResponse;

  } catch(err) {
    console.log(err);
  }
}