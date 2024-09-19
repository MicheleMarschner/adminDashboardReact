import React, {useState, useEffect} from 'react'
import './logo.css'

function Logo() {
  const [isChecked, setIsChecked] = useState(false);

  useEffect (() => {
    if (isChecked === true) document.body.classList.add('show-sidebar')
    else document.body.classList.remove('show-sidebar')
  }, [isChecked])

  const handleToggleSideBar = () => {
    setIsChecked(!isChecked);
  } 

  return (
    <div className='d-flex align-items-center justify-content-between'>
        <a href='/' className='logo d-flex align-items-center'>
            
            <span className='d-none d-lg-block'>AdminDashboard</span>
        </a>
        <label className="hamburger-menu">
          <input 
            type="checkbox" 
            checked={isChecked}
            onChange={handleToggleSideBar}/>
        </label>
    </div>
  )
}

export default Logo
