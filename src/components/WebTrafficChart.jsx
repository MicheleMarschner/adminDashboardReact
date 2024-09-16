import React, { useState, useEffect } from 'react'
import * as echarts from 'echarts'


function WebTrafficChart() {
  const [data, setData] = useState({})

    const fetchData = () => {
        fetch('https://admin-dashboard-124.netlify.app/.netlify/functions/trafficdata')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(e => console.log(e.message))
    }
  
    useEffect (() => {
      fetchData();  
    }, [])

    useEffect (() => {
        // check if object is available in state
        if (JSON.stringify(data) !== '{}') {
          echarts.init(document.querySelector('#trafficChart')).setOption(data)
        }
    }, [data])

  return (
    <div id='trafficChart' className='echart' style={{ minHeight: '400px', display: "flex", justifyContent: "center",  /* Center horizontally */
      alignItems: "center", width: "100%", height: "100%" }}></div>

  )
}

export default WebTrafficChart
