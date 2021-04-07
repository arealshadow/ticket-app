import {BookingData} from "./BookingData";

export class CustomerData {
    id: number;
    ticketID: string;
    name: {
        title: string;
        first: string;
        last: string;
    };
    location: {
        street: {
            number: number;
            name: string;
        };
        city: string;
        state: string;
        country: string;
        postcode: string;
    };
    email: string;
    login: {
        username: string;
        password: string;
    };
    phone: string;
    bookingInfo: BookingData[];
    picture: string;
}