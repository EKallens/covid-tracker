import React, { useEffect, useState } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.scss';
import { fetchData } from './api';
import coronaImg from './images/covid-19.jpg';
import Footer from './components/Footer/Footer';

const App = () => {

    const initialState = {
        data: {},
        country: ''
    }

    const [ state, setState ] = useState(initialState);

    const handleCountryChange = async(country) => {
        const fetchedData = await fetchData(country);
        setState({
            data: fetchedData,
            country
        });
    }

    useEffect(() => {

        const obtenerData = async() => {
            const resp = await fetchData();
            setState({
                 data: resp,  
                 country: ''
            });
        }

        obtenerData();

    }, []);

    const { data, country } = state;


    return (
        <div className={styles.container}>
            <img src={coronaImg} className={styles.image} alt="covid19"/>
            <Cards data={data}/>
            <CountryPicker handleCountryChange={handleCountryChange}/>
            <Chart data={data} country={country}/>
            <Footer />
        </div>
    )
}

export default App;