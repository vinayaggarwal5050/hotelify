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
exports.deleteHotel = exports.findAllHotels = exports.findHotelDetails = exports.addNewHotel = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function addNewHotel(hotelData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const dbResponse = yield prisma.hotel.create({
                data: {
                    hotelName: hotelData === null || hotelData === void 0 ? void 0 : hotelData.hotelName,
                    address: hotelData === null || hotelData === void 0 ? void 0 : hotelData.address,
                    city: hotelData === null || hotelData === void 0 ? void 0 : hotelData.city,
                    state: hotelData === null || hotelData === void 0 ? void 0 : hotelData.state,
                    pincode: hotelData === null || hotelData === void 0 ? void 0 : hotelData.pincode,
                    country: hotelData === null || hotelData === void 0 ? void 0 : hotelData.country,
                    gpsLocation: hotelData === null || hotelData === void 0 ? void 0 : hotelData.gpsLocation,
                    subDomain: hotelData === null || hotelData === void 0 ? void 0 : hotelData.subDomain,
                    liveStatus: hotelData === null || hotelData === void 0 ? void 0 : hotelData.liveStatus,
                    roomCategories: hotelData === null || hotelData === void 0 ? void 0 : hotelData.roomCategories,
                    hotelAmenities: hotelData === null || hotelData === void 0 ? void 0 : hotelData.hotelAmenities,
                    noOfRooms: hotelData === null || hotelData === void 0 ? void 0 : hotelData.noOfRooms,
                    propertyOwnerId: hotelData === null || hotelData === void 0 ? void 0 : hotelData.propertyOwnerId
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
            });
            return dbResponse;
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.addNewHotel = addNewHotel;
function findHotelDetails(hotelId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const dbResponse = yield prisma.hotel.findUnique({
                where: {
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
            });
            return dbResponse;
        }
        catch (err) {
            console.error(err);
        }
    });
}
exports.findHotelDetails = findHotelDetails;
function findAllHotels() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const dbResponse = yield prisma.hotel.findMany({
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
            });
            return dbResponse;
        }
        catch (err) {
            console.error(err);
        }
    });
}
exports.findAllHotels = findAllHotels;
function deleteHotel(hotelId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const dbResponse = yield prisma.hotel.delete({
                where: {
                    id: hotelId
                },
                select: {
                    id: true,
                    hotelName: true,
                    propertyOwnerId: true
                }
            });
            return dbResponse;
        }
        catch (err) {
            console.error(err);
        }
    });
}
exports.deleteHotel = deleteHotel;
