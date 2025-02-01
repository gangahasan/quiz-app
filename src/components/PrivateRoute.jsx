import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../context/AuthContext'

const PrivateRoute = ({children}) => {
    const {isLogin}= useContext(UserContext)
  return (
    isLogin? children  : <Navigate to="/login" />
  )
}

export default PrivateRoute