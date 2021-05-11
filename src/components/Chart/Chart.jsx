import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.scss';

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {

    const [dailyData, setDailyData] = useState({});

    useEffect(() => {
        const fetchApi = async() => {
            setDailyData(await fetchDailyData());
        }

        fetchApi();
    }, []);

    const lineChart = (
        dailyData[0] ? 
        (<Line
            data={{
                labels: dailyData.map(({ date }) => date),
                datasets: [{
                    data: dailyData.map(({ confirmed }) => confirmed),
                    label: 'Infected',
                    borderColor: '#42a5f5',
                    fill: true
                }, {
                    data: dailyData.map(({ confirmed }) => confirmed),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: '#f06292',
                    fill: true
                }],
            }}
        />) : null
    );

    const barChart = (
        confirmed
        ? (
            <Bar
                data={{
                    labels: ['Infected','Recovered','Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: [
                            '#42a5f5', 
                            '#4ac2b6', 
                            '#f06292'
                        ],
                    data: [confirmed.value, recovered.value, deaths.value]
                    }]
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Current state in ${country}` }
                }}
            />
        ) : null
    );

    return (
        <div className={styles.container}>
            { country ? barChart : lineChart }
        </div>
    )
}

export default Chart;