import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useContext} from "react"
import {UserContext} from '../context/AuthContext'
import "../styles/login.css"
const intialdata = {username:"",password:""}
const Login = () => {
    const [userdata,setUserdata] = useState(intialdata);
    console.log(userdata,"data")
    const[loading ,setLoading] = useState(false);
    const [error, setError] = useState(null);
    const {login,logout} = useContext(UserContext)

     const handleLogin = async(e)=>{
        setLoading(true);
        e.preventDefault();
                try{
                const response = await axios.post( "https://universal-plaid-prune.glitch.me/login",userdata);
                    console.log(response,"response")
                    if(response.data.success){
                        const {token } = response.data;
                        console.log(token,"token")
                        localStorage.setItem("token",token);
                        login(token);
                    } 
                 }catch(err){
                     setError(err.message)
                    setLoading(false)
                 }
            }
        
    
    const handleInput = (e) => {
        e.preventDefault();
        const{name,value} = e.target
        setUserdata({...userdata,[name]:value})
    }

  return (
    <div>
      {loading && <h3>Processing...</h3>}
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={userdata.username}
          onChange={handleInput}
          required
        />
        <input
          type="password"
          placeholder="password"
          value={userdata.password}
          name="password"
          onChange={handleInput}
          required
        />
        <input type="submit" value="Login" />
      </form>

      {error && <p>{error}</p>}
    
    </div>
  );
}

export default Login