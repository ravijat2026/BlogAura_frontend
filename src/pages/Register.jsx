import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { URL } from '../url'
import Footer from '../components/Footer'

const Register = () => {

  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const [error,setError] = useState(false)

  const navigate = useNavigate()

  const handleRegister = async() =>{
    try {
      const res =await axios.post(URL + '/api/auth/register',{username,email,password})
      setUsername(res.data.username);
      setEmail(res.data.email);
      setPassword(res.data.password);
      setError(false)
     
      
      // navigate("/verify-email")

    } catch (error) {
      setError(true)
      console.log(error)
    }
  }

  return (

    <>
    <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
    <h1 className="text-xl md:text-3xl font-bold text-teal-600"><Link to="/">BlogAura</Link></h1>
    <h3 className="md:text-xl font-bold text-lg"><Link to="/login">Login</Link></h3>
    </div>
    
    <div className='w-full flex justify-center items-center h-[80vh]'>
        <div className='flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]'>
            <h1 className='text-xl font-bold text-left'>Create an account account</h1>

            <input onChange={(e) => setUsername(e.target.value)} className='w-full px-4 py-4 border-2 border-black ' type='text' placeholder='Enter your username'/>

            <input onChange={(e) => setEmail(e.target.value)} className='w-full px-4 py-4 border-2 border-black ' type='text' placeholder='Enter your email'/>
            <input onChange={(e) => setPassword(e.target.value)} className='w-full px-4 py-4 border-2 border-black ' type='password' placeholder='Enter your password'/>
            <button onClick={handleRegister} className='w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black'>Register</button>

            {error && <h3 className='text-red-500 text-sm'>Something went wrong</h3>}

            <div className='flex justify-center items-center space-x-4'>
                <p>Already have an accoun ?</p>
                <p className='text-gray-500'><Link to ='/login' >Login</Link></p>

            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Register