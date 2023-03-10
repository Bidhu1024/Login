import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const SignUp = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const  submit = async (e)=>{
      e.preventDefault()
      try{
          await axios.post("http://localhost:8000/signup",{
            email,
            password
          })
      }catch(e){
        console.log(e);
      }
  }
  return (
    <div className='Signup'>
      <h2>
        SignUp
      </h2>
      <form action="POST">
        <input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="email"/>
        <input type="text" onChange={(e)=>setPassword(e.target.value)} placeholder="password"/>
        <input type="submit"  onClick={submit}/>
      </form>

      <br />
      <p>or</p>
      <br />
      <br />
      <Link to="/">Login</Link>
    </div>
  )
}

export default SignUp