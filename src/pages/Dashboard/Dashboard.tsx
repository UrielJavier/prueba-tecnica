import { FC } from "react";
import styles from './Dashboard.module.css'
import { Button } from "@components";
import { useDashboard } from "./useDashboard";
import { Tax } from "@models";

const Dashboard: FC = () => {

    const {handleNewSubmission, handleViewSubmissions, state} = useDashboard();

    return (
        <ul className={styles.taxes}>
            {state?.taxes.map((tax: Tax) => {
                return (<li key={tax.id} className={styles.card}>
                    <p className={styles.title}>{tax.name}</p>
                    <Button onClick={() => handleNewSubmission(tax.id)} mode="seconday"><p>new submission</p></Button>
                </li>)
            })}
            <Button onClick={() => handleViewSubmissions()}><p>submissions</p></Button>
        </ul>
    )
}

export default Dashboard;