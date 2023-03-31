import { BookingQuantity } from "./booking-quantity.model";

export interface Booking {
    fullName: string;
    fullAddress: string;
    contactNumber:string;
    startDate: Date;
    endDate: Date;
    carBookingQuantities:BookingQuantity[];
}