import { Key } from './key';

export interface Customer {
    customerId : string;
    username : string ; 
    password : string; 
    email : string;
    roles : string[];
    keys ?: Key[];
}
