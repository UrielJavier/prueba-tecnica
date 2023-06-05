import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "./../../redux/actions/actions";
import { useNavigate } from "react-router";
import { State, UserState } from "@models";

interface User {
    username: string;
    password: string;
}

export const useLogin = (initState:User) => {
    const [loginData, setLoginData] = useState<User>(initState);
    const dispatch = useDispatch();
    const user: UserState = useSelector<State>(state => state.userState) as UserState;
    const navigate = useNavigate()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(userActions.loginUser(loginData))
    }

    useEffect(() => {
        if (user?.logged) {
            navigate('/dashboard')
        }
    }, [user])

    return {handleSubmit, loginData, setLoginData};
}