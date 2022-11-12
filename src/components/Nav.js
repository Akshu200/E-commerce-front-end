import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Nav = () => {
  const auth = localStorage.getItem('user')
  const navigate = useNavigate();

  const handlelogout = () => {
    localStorage.clear();
    console.log('logout')
    navigate('/signup')
  }
  return (
    <div className='  top-0 text-white bg-red-500 '>

      {auth
        ?
        <div className='grid grid-flow-col text-2xl'>
          <ul className='flex justify-start gap-5 py-3 px-5'>
            <li><Link to='/'>Products</Link></li>
            <li><Link to='/add'>Add Product</Link></li>
            
          </ul>
          <ul className='flex justify-end  gap-5 py-3 px-5'>
            <li><Link onClick={handlelogout} to='/signup'>Logout ( {JSON.parse(auth).name} )</Link></li>
          </ul>
        </div>

        :
        <ul className='grid-cols-2 gap-5 flex justify-end py-5 px-5 text-2xl '>
          <li><Link to='/signup'>SignUp</Link></li>
          <li><Link to='/login'>Login</Link></li>
        </ul>
      }

    </div>
  )
}

export default Nav
