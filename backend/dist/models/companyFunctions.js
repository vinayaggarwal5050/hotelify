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
exports.deleteCompany = exports.findCompanyDetails = exports.findAllCompanies = exports.addNewCompany = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function addNewCompany(companyData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const dbResponse = yield prisma.company.create({
                data: {
                    companyName: companyData === null || companyData === void 0 ? void 0 : companyData.companyName,
                    address: companyData === null || companyData === void 0 ? void 0 : companyData.address,
                    city: companyData === null || companyData === void 0 ? void 0 : companyData.city,
                    state: companyData === null || companyData === void 0 ? void 0 : companyData.state,
                    country: companyData === null || companyData === void 0 ? void 0 : companyData.country,
                    pincode: companyData === null || companyData === void 0 ? void 0 : companyData.pincode,
                    gstin: companyData === null || companyData === void 0 ? void 0 : companyData.gstin,
                    propertyOwnerId: companyData.propertyOwnerId
                },
                select: {
                    id: true,
                    companyName: true,
                    propertyOwnerId: true,
                    createdAt: true
                }
            });
            return dbResponse;
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.addNewCompany = addNewCompany;
function findAllCompanies() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const dbResponse = yield prisma.company.findMany({
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
            });
            return dbResponse;
        }
        catch (err) {
            console.error(err);
        }
    });
}
exports.findAllCompanies = findAllCompanies;
function findCompanyDetails(companyId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const dbResponse = yield prisma.company.findUnique({
                where: {
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
            });
            return dbResponse;
        }
        catch (err) {
            console.error(err);
        }
    });
}
exports.findCompanyDetails = findCompanyDetails;
function deleteCompany(companyId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const dbResponse = yield prisma.company.delete({
                where: {
                    id: companyId
                }
            });
            return dbResponse;
        }
        catch (err) {
            console.error(err);
        }
    });
}
exports.deleteCompany = deleteCompany;
