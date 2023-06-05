import { userTypes } from "@types";

export const loginUser = (payload:any) => {
    return {
        type: userTypes.LOGIN_USER_REQUESTED,
        payload
    }
};

export const loginUserSuccess = (payload:any) => ({
    type: userTypes.LOGIN_USER_OK
});

export const loginUserError = (payload:any) => ({
    type: userTypes.LOGIN_USER_ERROR
});