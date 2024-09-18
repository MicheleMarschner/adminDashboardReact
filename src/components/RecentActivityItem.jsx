import React from 'react'

function RecentActivityItem({ item }) {
  return (
    <div className='activity-item d-flex'>
        <div className="activity-label">{item.time}</div>
        <i className={`bi bi-circle-fill activity-badge ${item.color} align-self-start`}></i>
        {item.highlight === '' ? (
            <div className='activity-content'>{item.content}</div> 
        ) : (
            <div className='activity-content'>
            <a href='/' className='fw-bold text-dark'>{item.highlight}</a>
            {item.content.length > 100? item.content.slice(0, 100) + '...' : item.content}
            </div>
        )}
    </div>
  )
}

export default RecentActivityItem
