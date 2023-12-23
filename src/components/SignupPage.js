import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Base from '../Base/Base'


function SignupPage() {
    const navigate = useNavigate()
    const[name,setName]=useState("")
    const [password, setPassword] = useState("")
   
    const handleLogin = async()=>{
        const userInfo = {
            name,
            password,
        }
const res = await fetch(`https://scheduling-app-chi.vercel.app/users/register`, {
    method :"POST",
    body : JSON.stringify(userInfo),
    headers:{
        "Content-Type":"application/json"
    }
});

   const data = await res.json();
  localStorage.setItem(data.msg)
   navigate("/login")
    }
  return (
 <Base
 title={"Signup Page"}
 description={"Please signup to continue"}
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
        >Signup</Button>
   </Base>

  )
}

export default SignupPage