"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllCategoriesForHotelId = exports.deleteCategory = exports.findAllCategories = exports.findCategoryDetails = exports.addNewCategory = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function addNewCategory(categoryData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const dbResponse = yield prisma.category.create({
                data: {
                    categoryName: categoryData === null || categoryData === void 0 ? void 0 : categoryData.categoryName,
                    amenities: categoryData === null || categoryData === void 0 ? void 0 : categoryData.amenities,
                    description: categoryData === null || categoryData === void 0 ? void 0 : categoryData.description,
                    defaultPrice: categoryData === null || categoryData === void 0 ? void 0 : categoryData.decidedPrice,
                    decidedPrice: categoryData === null || categoryData === void 0 ? void 0 : categoryData.decidedPrice,
                    adultDefaultOccupancy: categoryData === null || categoryData === void 0 ? void 0 : categoryData.adultDefaultOccupancy,
                    childDefaultOccupancy: categoryData === null || categoryData === void 0 ? void 0 : categoryData.childDefaultOccupancy,
                    totalDefaultOccupancy: categoryData === null || categoryData === void 0 ? void 0 : categoryData.totalDefaultOccupancy,
                    adultMaxOccupancy: categoryData === null || categoryData === void 0 ? void 0 : categoryData.adultMaxOccupancy,
                    childMaxOccupanty: categoryData === null || categoryData === void 0 ? void 0 : categoryData.childMaxOccupanty,
                    additionalAdultPrice: categoryData === null || categoryData === void 0 ? void 0 : categoryData.additionalAdultPrice,
                    additionalChildPrice: categoryData === null || categoryData === void 0 ? void 0 : categoryData.additionalChildPrice,
                    hotelId: categoryData.hotelId
                },
                select: {
                    id: true,
                    categoryName: true,
                    amenities: true,
                    description: true,
                    defaultPrice: true,
                    decidedPrice: true,
                    adultDefaultOccupancy: true,
                    childDefaultOccupancy: true,
                    totalDefaultOccupancy: true,
                    adultMaxOccupancy: true,
                    childMaxOccupanty: true,
                    additionalAdultPrice: true,
                    additionalChildPrice: true,
                    hotelId: true,
                }
            });
            return dbResponse;
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.addNewCategory = addNewCategory;
function findCategoryDetails(categoryId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const dbResponse = yield prisma.category.findUnique({
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
                    adultDefaultOccupancy: true,
                    childDefaultOccupancy: true,
                    totalDefaultOccupancy: true,
                    adultMaxOccupancy: true,
                    childMaxOccupanty: true,
                    additionalAdultPrice: true,
                    additionalChildPrice: true,
                    hotelId: true,
                }
            });
            return dbResponse;
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.findCategoryDetails = findCategoryDetails;
function findAllCategories() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const dbResponse = yield prisma.category.findMany({
                select: {
                    id: true,
                    categoryName: true,
                    amenities: true,
                    description: true,
                    defaultPrice: true,
                    decidedPrice: true,
                    adultDefaultOccupancy: true,
                    childDefaultOccupancy: true,
                    totalDefaultOccupancy: true,
                    adultMaxOccupancy: true,
                    childMaxOccupanty: true,
                    additionalAdultPrice: true,
                    additionalChildPrice: true,
                    hotelId: true,
                }
            });
            return dbResponse;
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.findAllCategories = findAllCategories;
function deleteCategory(categoryId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const dbResponse = yield prisma.category.delete({
                where: {
                    id: categoryId,
                },
                select: {
                    id: true,
                    hotelId: true,
                    categoryName: true
                }
            });
            return dbResponse;
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.deleteCategory = deleteCategory;
function findAllCategoriesForHotelId(hotelId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const dbResponse = yield prisma.category.findMany({
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
                    adultDefaultOccupancy: true,
                    childDefaultOccupancy: true,
                    totalDefaultOccupancy: true,
                    adultMaxOccupancy: true,
                    childMaxOccupanty: true,
                    additionalAdultPrice: true,
                    additionalChildPrice: true,
                    hotelId: true,
                }
            });
            return dbResponse;
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.findAllCategoriesForHotelId = findAllCategoriesForHotelId;
