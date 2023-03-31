import { Car } from "./car.model";

export interface MyBooking {
    id: number,
    fullNameBooking: string;
    fullBooking: string;
    contactNumberBooking: string;
    status: string;
    amout: number;
    startDate: Date;
    endDate: Date;
    car: Car;
    user: any;
}