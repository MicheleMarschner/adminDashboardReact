import React, { useState, useEffect } from 'react'
import './news.css'

import CardFilter from './CardFilter'
import NewsPostItem from './NewsPostItem'

function News() {
  const [filter, setFilter] = useState('Today');
  const [news, setNews] = useState([])

    const fetchData = () => {
        fetch('https://admin-dashboard-124.netlify.app/.netlify/functions/news')
            .then(res => res.json())
            .then(data => setNews(data))
            .catch(e => console.log(e.message))
    }

    useEffect (() => {
        fetchData();
    }, [])
  

  const handleFilterChange = filter => setFilter(filter)



  return (
    <div className='card'>
        <CardFilter filterChange={handleFilterChange} />
        <div className="card-body pb-0">
            <h5 className="card-title">
                News &amp; Updates <span>| {filter}</span>
            </h5>

            <div className="news">
                { news && news.length > 0 && 
                    news.map(item => <NewsPostItem key={item._id} item={item} /> )
                }
            </div>
        </div>
      
    </div>
  )
}

export default News
