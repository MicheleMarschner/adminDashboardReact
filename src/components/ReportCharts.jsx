import React, { useState, useEffect } from 'react'
import Chart from 'react-apexcharts'


function ReportCharts() {
    const [data, setData] = useState([])

    const fetchData = () => {
        fetch('http://localhost:4000/chartdata')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(e => console.log(e.message))
    }

    useEffect (() => {
        fetchData();
    }, [])
  
    return (
        data && data.options && (
            <Chart 
                options={data.options}
                series={data.series}
                type={data.options.chart.type}
                height={data.options.chart.height}
            />
        )
    )
}

export default ReportCharts
