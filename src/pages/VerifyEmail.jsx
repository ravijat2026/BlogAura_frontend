import React, { useState } from 'react';
import axios from 'axios';
import { URL } from '../url';
import { useNavigate } from 'react-router-dom';

const VerifyEmail = () => {
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate()

  const handleVerify = async () => {
    try {
      const res = await axios.post(`${URL}/api/auth/verify-email`, { email, verificationCode });
      setMessage(res.data.message);
      
      navigate('/login');
    } catch (error) {
      setMessage("Verification failed. Please try again.");
      console.log(error);
    }
  };

  return (
    <div className='w-full flex justify-center items-center h-[80vh]'>
      <div className='flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]'>
        <h1 className='text-xl font-bold text-left'>Verify your email</h1>
        <input onChange={(e) => setEmail(e.target.value)} className='w-full px-4 py-4 border-2 border-black' type='text' placeholder='Enter your email' />
        <input onChange={(e) => setVerificationCode(e.target.value)} className='w-full px-4 py-4 border-2 border-black' type='text' placeholder='Enter verification code' />
        <button onClick={handleVerify} className='w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black'>Verify</button>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default VerifyEmail;
