import React, { useState, useEffect } from 'react'
import './dashboard.css'

import Card from './Card.jsx'
import Report from './Report.jsx'
import RecentSales from './RecentSales.jsx'
import TopSeller from './TopSeller.jsx'
import RecentActivity from './RecentActivity.jsx'
import BudgetReport from './BudgetReport.jsx'
import WebTraffic from './WebTraffic.jsx'
import News from './News.jsx'

function Dashboard() {
    const [cards, setCards] = useState([])

    const fetchData = () => {
        fetch('https://admin-dashboard-124.netlify.app/.netlify/functions/cards')
            .then(res => res.json())
            .then(data => {setCards(data)
              console.log(data)
            })
            .catch(e => console.log(e.message))
    }

    useEffect (() => {
        fetchData();
    }, [])


  return (
    <section className='dashboard section'>
      <div className="row">
        <div className="col-lg-8">
          <div className='wrapper d-flex'>
            {
              cards && cards.length>0 &&
              cards.map(card => <Card key={card._id} card={card} />)
            }
          </div>

          <Report />
          <RecentSales />
          <TopSeller />

        </div>

        <div className='col-lg-4'>
          <RecentActivity />
          <BudgetReport />
          <WebTraffic />
          <News />
        </div>
      </div>
    </section>
  )
}

export default Dashboard
