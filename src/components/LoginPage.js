import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Base from '../Base/Base'


function LoginPage() {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
   
    const handleLogin = async()=>{
        const userInfo = {
            name,
            password,
        }
const res = await fetch(`https://scheduling-app-chi.vercel.app/users/login`, {
    method :"POST",
    body : JSON.stringify(userInfo),
    headers:{
        "Content-Type":"application/json"
    }
});

   const data = await res.json();
  localStorage.setItem("token", data.token)
   navigate("/")
    }
  return (
 <Base
 title={"Login Page"}
 description={"Please login to continue"}
 >
        <TextField  label="Name" variant="outlined" fullWidth sx={{ m: 1 }} 
         placeholder='Enter Name'
         type="name"
         value= {name}
         onChange={(e)=>setName(e.target.value)}
         />
        <TextField  label="Password" variant="outlined" fullWidth sx={{ m: 1 }} 
         placeholder='Enter Password'
         type="Password"
         value ={password}
         onChange={(e)=>setPassword(e.target.value)}
         />
        <Button
        type="submit"
        variant="contained"
        onClick={handleLogin}
        >Login</Button>
   </Base>

  )
}

export default LoginPage