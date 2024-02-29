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
exports.deletePropertyOwner = exports.findAllProperyOwners = exports.findPropertyOwnerDetails = exports.addNewPropertyOwner = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
//----------------Parent Functions --------------------------------------
function addNewPropertyOwner(properOwnerData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const dbResponse = yield prisma.propertyOwner.create({
                data: {
                    email: properOwnerData === null || properOwnerData === void 0 ? void 0 : properOwnerData.email,
                    password: properOwnerData === null || properOwnerData === void 0 ? void 0 : properOwnerData.password,
                    phoneNumber: properOwnerData === null || properOwnerData === void 0 ? void 0 : properOwnerData.password,
                    firstName: properOwnerData === null || properOwnerData === void 0 ? void 0 : properOwnerData.firstName,
                    lastName: properOwnerData === null || properOwnerData === void 0 ? void 0 : properOwnerData.lastName
                },
                select: {
                    id: true,
                    email: true,
                    createdAt: true
                }
            });
            return dbResponse;
        }
        catch (err) {
            console.error(err);
        }
    });
}
exports.addNewPropertyOwner = addNewPropertyOwner;
function findPropertyOwnerDetails(properyOwnerId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const dbResponse = yield prisma.propertyOwner.findUnique({
                where: {
                    id: properyOwnerId
                },
                select: {
                    id: true,
                    email: true,
                    password: true,
                    firstName: true,
                    lastName: true,
                    company: true,
                    hotels: true,
                    createdAt: true
                }
            });
            return dbResponse;
        }
        catch (err) {
            console.error(err);
        }
    });
}
exports.findPropertyOwnerDetails = findPropertyOwnerDetails;
function findAllProperyOwners() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const dbResponse = yield prisma.propertyOwner.findMany({
                select: {
                    id: true,
                    email: true,
                    password: true,
                    firstName: true,
                    lastName: true,
                    company: true,
                    hotels: true,
                    createdAt: true
                }
            });
            return dbResponse;
        }
        catch (err) {
            console.error(err);
        }
    });
}
exports.findAllProperyOwners = findAllProperyOwners;
function deletePropertyOwner(properyOwnerId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const dbResponse = yield prisma.propertyOwner.delete({
                where: {
                    id: properyOwnerId
                }
            });
            return dbResponse;
        }
        catch (err) {
            console.error(err);
        }
    });
}
exports.deletePropertyOwner = deletePropertyOwner;
//----------------------Child Functions----------------------------------------//
