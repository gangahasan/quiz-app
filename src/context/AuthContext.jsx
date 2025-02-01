import React from 'react'
import { createContext , useState} from 'react';
import { useNavigate } from 'react-router-dom'

export const UserContext = createContext();
const AuthContext = ({children}) => {
    const[isLogin,setIsLogin] = useState(()=>{
        localStorage.getItem("token")? true: false;
    })
    const [token,settoken] = useState(null);
    const navigate = useNavigate();

    const login = (token)=>{
        setIsLogin(true)
        localStorage.setItem("token", "token")
        settoken(token)
        navigate("/Quiz")
    }
    const logout = ()=>{
        setIsLogin(false)
        localStorage.removeItem("token")
        navigate("/")
    }


  return (
    <UserContext.Provider value={{isLogin ,login ,logout}}>
      {children}
    </UserContext.Provider>
    
  )
}

export default AuthContext