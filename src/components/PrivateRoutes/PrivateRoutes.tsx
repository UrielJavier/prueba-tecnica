import { State, UserState } from '@models';
import { FC } from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom'

interface PrivateRoutes {
    redirectRoute: string;   
}

const PrivateRoutes: FC<PrivateRoutes> = ({
    redirectRoute = ''
}:PrivateRoutes) => {
    const user:UserState = useSelector<State>(state => state.userState) as UserState;
    return(
        user?.logged ? <Outlet/> : <Navigate to={redirectRoute}/>
    )
}

export default PrivateRoutes;