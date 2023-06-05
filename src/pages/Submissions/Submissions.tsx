import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from './Submissions.module.css';
import { Filter } from "@components";
import { State, TaxState } from "@models";

const Submissions: FC = () => {
    const state: TaxState = useSelector<State>(state => state.taxState) as TaxState;
    const [submissions, setSubmissions] = useState([]);
    const [filteredSub, setFilteredSub] = useState([]);

    useEffect(() => {
        const accSubmisions = state?.taxes?.reduce((acc: any, tax: any) => {
            if (tax?.submissions?.length > 0) acc.push(...tax?.submissions?.map((sub: any) => ({ ...sub, year: tax.year })))
            return acc;
        }, [])
        setSubmissions(accSubmisions);
        setFilteredSub(accSubmisions);
    }, [state]);



    return (<>
        <Filter data={submissions} setFiltered={setFilteredSub} />
        {filteredSub.length > 0 ?
            <table className={styles.submissions}>
                <thead className={styles.thead}>
                    <tr className={styles.tr}>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredSub?.map((submission: any, index: number) => {
                        return (
                            <tr key={index} className={styles.tr}>
                                <td>
                                    <p className={styles.subfield}>{submission.name}</p>
                                    <p className={styles.subfield}>{submission.surname}</p>
                                </td>
                                <td className={styles.subfield}>{submission.age}</td>
                                <td className={styles.subfield}>{submission.year}</td>
                            </tr>)
                    })}
                </tbody>
            </table> :
            <p>You need to create submissions</p>}
    </>)
}

export default Submissions;