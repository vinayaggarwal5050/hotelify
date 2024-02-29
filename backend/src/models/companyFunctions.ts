import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

interface CompanyInterface {
  companyName: string,
  address?: string,
  city?: string,
  state?: string,
  pincode?: number,
  country?: string,
  gstin?: string,

  propertyOwnerId: number,
}

export async function addNewCompany(companyData: CompanyInterface) {
  try {
    const dbResponse = await prisma.company.create({
      data: {
        companyName: companyData?.companyName,
        address: companyData?.address,
        city: companyData?.city,
        state: companyData?.state,
        country: companyData?.country,
        pincode: companyData?.pincode,
        gstin: companyData?.gstin,
        
        propertyOwnerId: companyData.propertyOwnerId
      },
      select: {
        id: true,
        companyName: true,
        propertyOwnerId: true,
        createdAt: true
      }
    })

    return dbResponse;

  } catch(err) {
    console.log(err);
  }
}

export async function findAllCompanies() {
  try {
    const dbResponse = await prisma.company.findMany({
      select: {
        id: true,
        companyName: true,
        address: true,
        city: true,
        state: true,
        country: true,
        gstin: true,
        propertyOwnerId: true,
        createdAt: true
      }
    })

    return dbResponse;

  } catch(err) {
    console.error(err);
  }
}

export async function findCompanyDetails(companyId: number) {
  try {
    const dbResponse = await prisma.company.findUnique({
      where : {
        id: companyId
      },
      select: {
        id: true,
        companyName: true,
        address: true,
        city: true,
        state: true,
        country: true,
        gstin: true,
        propertyOwnerId: true,
        createdAt: true
      }
    })

    return dbResponse;

  } catch(err) {
    console.error(err);
  }
}

export async function deleteCompany(companyId: number) {
  try {
    const dbResponse = await prisma.company.delete({
      where : {
        id: companyId
      }
    })

    return dbResponse;

  } catch(err) {
    console.error(err);
  }
}

