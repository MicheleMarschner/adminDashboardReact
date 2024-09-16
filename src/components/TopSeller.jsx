import React, { useState, useEffect } from 'react'
import './topSeller.css'

import CardFilter from './CardFilter';
import TopSellerItem from './TopSellerItem';

function TopSeller() {
  const [filter, setFilter] = useState('Today');
  const [items, setItems] = useState([])

    const fetchData = () => {
        fetch('https://admin-dashboard-124.netlify.app/.netlify/functions/topselling')
            .then(res => res.json())
            .then(data => setItems(data))
            .catch(e => console.log(e.message))
    }

    useEffect (() => {
        fetchData();
    }, [])
  

  const handleFilterChange = filter => setFilter(filter)

  return (
    <div className='card top-seller overflow-auto'>
    <CardFilter filterChange={handleFilterChange} />
      <div className="card-body pb-0">
          <h5 className="card-title">
              Top Seller <span>| {filter}</span>
          </h5>

          <table className='table table-borderless'>
            <thead className='table-light'>
                <tr>
                    <th scope='col'>Preview</th>
                    <th scope='col'>Product</th>
                    <th scope='col'>Price</th>
                    <th scope='col'>Sold</th>
                    <th scope='col'>Revenue</th>
                </tr>
            </thead>
            <tbody>
                {items && items.length > 0 && items.map(item => <TopSellerItem key={item._id} item={item} />)}
            </tbody>
          </table>

      </div>
    </div>
  )
}

export default TopSeller
