import { CustomerData } from './CustomerData';

export class TicketInfo {
    name: string;
    version: string;
    pageInfo: {
        totalResults: number;
        resultsPerPage: number;
    };
    ticketInfo: CustomerData[];
}