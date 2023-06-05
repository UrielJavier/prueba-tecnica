import { Tax, InputField } from "./taxes";

export interface UserState {
    logged: boolean;
    username: string;
    error: string;
    loading: boolean;
}

export interface TaxState {
    taxes: Tax[];
    inputFields: InputField[];
    loading: boolean;
}

export interface State {
    userState: UserState;
    taxState: TaxState;
}