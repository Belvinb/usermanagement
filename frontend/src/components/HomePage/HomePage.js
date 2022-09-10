import React, { useEffect } from 'react'
import "./HomePage.css"
import {useNavigate} from 'react-router-dom'

const HomePage = () => {
    const navigate = useNavigate()

    const user = JSON.parse(localStorage.getItem("userInfo"));
    useEffect(() => {
      if(!user){
        navigate("/")
      }
    }, [navigate])
    
    
  return (
    <div>
      <h1 className="home">Welcome {user?user.name:""}</h1>
    </div>
  );
}

export default HomePage