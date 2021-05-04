import React, { useEffect, useState } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.scss';
import { fetchData } from './api';

const App = () => {

    const [ data, setData ] = useState({});

    useEffect(() => {

        const obtenerData = async() => {
            const resp = await fetchData();
            setData(resp);
        }

        obtenerData();

    }, []);


    return (
        <div className={styles.container}>
            <h1>Covid Tracker</h1>
            <Cards data={data}/>
            <CountryPicker />
            <Chart />
        </div>
    )
}

export default App;