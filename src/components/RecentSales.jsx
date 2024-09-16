import React, { useState, useEffect } from 'react'
import './recentSales.css'

import CardFilter from './CardFilter'
import RecentSalesTable from './RecentSalesTable'

function RecentSales() {
  const [filter, setFilter] = useState('Today');
  const [items, setItems] = useState([])

    const fetchData = () => {
        fetch('https://admin-dashboard-124.netlify.app/.netlify/functions/recentsales')
            .then(res => res.json())
            .then(data => setItems(data))
            .catch(e => console.log(e.message))
    }

    useEffect (() => {
        fetchData();
    }, [])
  

  const handleFilterChange = filter => setFilter(filter)

  return (
    <div className='card recent-sales overflow-auto'>
      <CardFilter filterChange={handleFilterChange} />
        <div className="card-body">
            <h5 className="card-title">
                Recent Sales <span>| {filter}</span>
            </h5>
            <RecentSalesTable items={items} />
        </div>
    </div>
  )
}

export default RecentSales
