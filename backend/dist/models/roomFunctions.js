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
exports.findAllRoomsForHotelId = exports.deleteRoom = exports.findAllRooms = exports.findRoomDetails = exports.addNewRoom = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function addNewRoom(roomData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const dbResponse = yield prisma.room.create({
                data: {
                    category: roomData.category,
                    roomNumber: roomData.roomNumber,
                    roomPrefix: roomData === null || roomData === void 0 ? void 0 : roomData.roomPrefix,
                    description: roomData === null || roomData === void 0 ? void 0 : roomData.description,
                    inService: roomData === null || roomData === void 0 ? void 0 : roomData.inService,
                    occupied: roomData === null || roomData === void 0 ? void 0 : roomData.inService,
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
            });
            return dbResponse;
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.addNewRoom = addNewRoom;
function findRoomDetails(roomId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const dbResponse = yield prisma.room.findUnique({
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
            });
            return dbResponse;
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.findRoomDetails = findRoomDetails;
function findAllRooms() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const dbResponse = yield prisma.room.findMany({
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
            });
            return dbResponse;
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.findAllRooms = findAllRooms;
function deleteRoom(roomId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const dbResponse = yield prisma.room.delete({
                where: {
                    id: roomId,
                },
                select: {
                    id: true,
                    hotelId: true,
                    roomNumber: true,
                    roomPrefix: true
                }
            });
            return dbResponse;
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.deleteRoom = deleteRoom;
function findAllRoomsForHotelId(hotelId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const dbResponse = yield prisma.room.findMany({
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
            });
            return dbResponse;
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.findAllRoomsForHotelId = findAllRoomsForHotelId;
