import { FC } from "react";

import styles from './Login.module.css'
import { useLogin } from "./useLogin";
import { Input, Button } from '@components';

interface user {
    username: string;
    password: string;
}

const Login: FC = () => {

    const {handleSubmit, loginData, setLoginData} = useLogin({ username: '', password: '' });
    
    return (
        <div className={styles.login}>
            <form onSubmit={handleSubmit}>
                <Input required type="text" label="Username" name="username" value={loginData.username}
                    onChange={e => setLoginData(prev => ({ ...prev, username: e.target.value }))}></Input>
                <Input required label="Password" type="password" name="password" value={loginData.password}
                    onChange={e => setLoginData(prev => ({ ...prev, password: e.target.value }))}></Input>
                <Button type="submit" className={styles.submit}><p>Login</p></Button>
            </form>
        </div>
    )
}

export default Login;