import { UserState } from "@models";
import { userTypes } from "@types";

const initialState:UserState = {
    logged: false,
    username: '',
    error: '',
    loading: false
};

export default (state = initialState, action: any) => {
    switch(action.type) {
        case userTypes.LOGIN_USER_OK: 
            return {
                logged: true,
                username: action.payload.username,
                error: '',
                loading: false
            }
        case userTypes.LOGIN_USER_ERROR: 
            return {
                logged: false,
                username: '',
                error: action.payload.error,
                loading: false
            }
        case userTypes.LOGIN_USER_REQUESTED:
            return {
                ...state,
                loading: true
            }
        default:
            return {
                ...state,
                loading: false
            }
    }
} 