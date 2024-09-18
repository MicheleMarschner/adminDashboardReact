import React from 'react'

function NavNotice() {
  return (
    <li className='nav-item dropdown'>
        <a href='/' className='nav-link nav-icon' data-bs-toggle='dropdown'>
            <i className='bi bi-bell'></i>
            <span className='badge bg-primary badge-number'>4</span>
        </a>

        <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications'>
            <li className='dropdown-header'>
                You have 4 new Notifications
                <a href='/'>
                    <span className='badge rounded-pill bg-primary p-2 ms-2'>
                        View all
                    </span>
                </a>
            </li>

            <li>
                <hr className='dropdown-divider'/>
            </li>

            <li className='notification-item'>
                <i className='bi bi-exclamation-circle text-warning'></i>
                <div>
                    <h4>Lorem Ipsum</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima qui, natus consequatur eligendi ducimus sequi.</p>
                    <p>30 min. ago</p>
                </div>
            </li>

            <li>
                <hr className='dropdown-divider'/>
            </li>

            <li className='notification-item'>
                <i className='bi bi-x-circle text-danger'></i>
                <div>
                    <h4>Lorem Ipsum</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit!</p>
                    <p>1 h ago</p>
                </div>
            </li>

            <li>
                <hr className='dropdown-divider'/>
            </li>

            <li className='notification-item'>
                <i className='bi bi-check-circle text-success'></i>
                <div>
                    <h4>Lorem Ipsum</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur</p>
                    <p>2 h ago</p>
                </div>
            </li>

            <li>
                <hr className='dropdown-divider'/>
            </li>

            <li className='notification-item'>
                <i className='bi bi-info-circle text-primary'></i>
                <div>
                    <h4>Lorem Ipsum</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur</p>
                    <p>4 h ago</p>
                </div>
            </li>

            <li>
                <hr className='dropdown-divider'/>
            </li>

            <li className='dropdown-footer'>
                <a href='/'>Show all notifications</a>
            </li>
        </ul>
      
    </li>
  )
}

export default NavNotice
