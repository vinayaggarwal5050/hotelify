import { addNewPropertyOwner, findPropertyOwnerDetails, findAllProperyOwners, deletePropertyOwner } from "./propertyOwnerFunctions";
import { addNewCompany, findCompanyDetails, findAllCompanies, deleteCompany } from "./companyFunctions"
import { addNewHotel, findHotelDetails, findAllHotels, deleteHotel } from "./hotelFunctions"
import { addNewCategory, findCategoryDetails, findAllCategories, deleteCategory, findAllCategoriesForHotelId } from "./categoryFunctions"
import { addNewRoom, findRoomDetails, findAllRooms, deleteRoom, findAllRoomsForHotelId } from "./roomFunctions"

//................Property Owner test functions.............

const propertyOwnerData: any = {
  email: "test@gmail.com",
  password: "test@123",
  phoneNumber: "98765443210",
  firstName: "test",
  lastName: "user",
}

const properyOwnerId: number = 4;

// addNewPropertyOwner(propertyOwnerData).then(res => console.log(res));
// findPropertyOwnerDetails(properyOwnerId).then(res => console.log(res));
// findAllProperyOwners().then(res => console.log(res));
// deletePropertyOwner(properyOwnerId).then(res => console.log(res));

//................Company test functions.............

const companyData =  {
  companyName: "test company pvt ltd",
  address: "test address",
  city: "test city",
  state: "test state",
  pincode: 212324,
  country: "test country",
  gstin: "02ASFA23423F1T",

  propertyOwnerId: 4,
}

const companyId = 2;

// addNewCompany(companyData).then(res => console.log(res));
// findCompanyDetails(companyId).then(res => console.log(res));
// findAllCompanies().then(res => console.log(res));
// deleteCompany(companyId).then(res => console.log(res));

//..........Hotel Test Functions.......................

const hotelData =  {
  hotelName: "test hotel two",
  address: "test address two",
  city: "test address two",
  state: "test state two",
  pincode: 123456,
  country: "test country two",

  gpsLocation: "test gps two",
  subDomain: "two.test.subdomain",
  liveStatus: true,

  roomCategories: ["Standard", "Delux", "King", "Uncategorized"],
  hotelAmenities: ["Parking", "Power Backup", "Hot Water", "Inhouse Cafe/Restaurant", "Gym", "Pick and Drop Facility"],
  noOfRooms: 10,

  propertyOwnerId: 4,
}

const hotelId = 8;

// addNewHotel(hotelData).then(res => console.log(res));
findHotelDetails(hotelId).then(res => console.log(res));
// findAllHotels().then(res => console.log(res));
// deleteHotel(hotelId).then(res => console.log(res));

//................Category Test Function ..................
const categoryData =  {
  categoryName: "King",
  amenities: ["wifi", "Hot water", "Air Conditioning", "Hair Dryer", "Hot Water Cattle", "bathroom Sleeper", "breakfast"],
  description: "Neat and clean Delux rooms",

  defaultPrice: 12000,
  decidedPrice: 9500,

  adultDefaultOccupancy:  2,
  childDefaultOccupancy:  2,
  totalDefaultOccupancy:  3,
  adultMaxOccupancy: 3,
  childMaxOccupanty: 2,

  additionalAdultPrice: 2500,
  additionalChildPrice: 1500,

  hotelId: 8,
}

const categoryId = 1;

// addNewCategory(categoryData).then(res => console.log(res));
// findCategoryDetails(categoryId).then(res => console.log(res));
// findAllCategories().then(res => console.log(res));
// deleteCategory(categoryId).then(res => console.log(res));
// findAllCategoriesForHotelId(hotelId).then(res => console.log(res));

//................. Room Test Function ...................

const roomData =  {
  category: "King",
  roomNumber: 202,
  roomPrefix: "Mountain and River Side on back side",
  description: "this is King room both river and mountain facing",
  inService: false,
  occupied: false,

  hotelId: 8
}

const roomId = 1;

// addNewRoom(roomData).then(res => console.log(res));
// findRoomDetails(roomId).then(res => console.log(res));
// findAllRooms().then(res => console.log(res));
// deleteRoom(roomId).then(res => console.log(res));
// findAllRoomsForHotelId(hotelId).then(res => console.log(res));

