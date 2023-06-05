import { FC, ReactElement } from "react";
import styles from './Layout.module.css';
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { State } from "@models";

interface Layout {
    children: ReactElement;
}

const Layout:FC<Layout> = ({children}:Layout) => {
    const navigate = useNavigate();
    const state:State = useSelector<State>(state => state) as State;
    const handleBack = () => {
        navigate(-1);
    }

    return(
        <>
            <header className={styles.header}>
                <img src="./arrow-back.svg" className={styles.back} onClick={handleBack}></img>
                <img src="./logo.png" className={styles['img-header']}></img>
            </header>
            <div className={styles.line}></div>
            <main className={styles.main}>
                {children}
            </main>
            {(state.userState.loading || state.taxState.loading) && <div className={styles.loading}><p>Loading</p></div>}
        </>
    )
}

export default Layout;