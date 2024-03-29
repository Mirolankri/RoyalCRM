import { Address } from "src/app/interface/address/address";

export interface Customer {
    id?: string;
    firstName: string;
    lastName: string
    email: string;
    phone: string;
    createdAt?: any;
    address: Address;
    note?: string;
}
