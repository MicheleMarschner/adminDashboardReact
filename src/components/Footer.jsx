import React from 'react'
import './footer.css'

function Footer() {
  return (
    <footer id='footer' className='footer'>
        <div className="copyright">
            &copy; Copyright{' '} <strong><span>Michele Marschner</span></strong> All Rights Reserved
        </div>
        <div className='credits'>
            Designed by <a href='https://www.youtube.com/@DStudioTechnology' rel='noreferrer' target='_blank'>DStudio Technology</a>
        </div>
    </footer>
  )
}

export default Footer
