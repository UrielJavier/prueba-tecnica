import { FC, useState } from "react";
import { Button, Input } from "@components";
import styles from './Filter.module.css';

const initFilters = {
    year: '',
    name: '',
    surname: '',
    age: ''
}

interface Filter {
    data: object[];
    setFiltered: Function;
}

const Filter: FC<Filter> = ({
    data,
    setFiltered
}:Filter) => {
    const [filters, setFilters] = useState<any>(initFilters);

    const handleApplyFilters = () => {
        const filtered = data?.filter((sub: any) => {
            return (sub.year === filters.year || !filters.year) &&
                (sub.name === filters.name || !filters.name) &&
                (sub.surname === filters.surname || !filters.surname) &&
                (sub.age === filters.age || !filters.age)
        })
        setFiltered(filtered);
    }

    const handleClearFilters = () => {
        setFilters(initFilters);
        setFiltered(data);
    } 

    return (
        <div className={styles.filter}>
            <Input label="Name" name="name" value={filters.name}
                onChange={(e => setFilters((prev: any) => ({ ...prev, name: e.target.value })))} />
            <Input label="Surname" type="text" name="surname" value={filters.surname}
                onChange={(e => setFilters((prev: any) => ({ ...prev, surname: e.target.value })))} />
            <div className={styles.inputnumbers}>
                <Input label="Age" type="number" min="16" max="100" step="1" value={filters.age}
                    onChange={(e => setFilters((prev: any) => ({ ...prev, age: e.target.value })))} />
                <Input label="Year" type="number" min="2015" max="2023" step="1" value={filters.year}
                    onChange={(e => setFilters((prev: any) => ({ ...prev, year: e.target.value })))} />
            </div>
            <div className={styles.buttonsFilter}>
                <Button onClick={handleApplyFilters} mode="primary" className={styles.buttonFilter}><p>Apply filters</p></Button>
                <Button onClick={handleClearFilters} mode="seconday"><p>Clear filters</p></Button>
            </div>

        </div>
    )
};

export default Filter;