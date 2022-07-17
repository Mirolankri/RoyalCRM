import { Address } from "src/app/interface/address/address";

export interface Contact {
    id?: string;
    firstName: string;
    lastName: string;
    eMail: string;
    birthDay: Date;
    phone: string;
    age: number;
    address?: Address;
}
