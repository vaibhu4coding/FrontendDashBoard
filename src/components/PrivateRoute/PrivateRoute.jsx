import React from 'react'
import { Navigate,Outlet} from 'react-router-dom'
const PrivateRoute = () => {
    const auth = localStorage.getItem('loginSuccess')
  return auth?<Outlet></Outlet>:<Navigate to='/'></Navigate>
}

export default PrivateRoute