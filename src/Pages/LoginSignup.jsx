import React, { useState, useEffect } from 'react';

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username:"",
    password:"",
    email:""
  });

  useEffect(() => {
    // Reset formData when the state changes
    setFormData({
      username: "",
      password: "",
      email: ""
    });
  }, [state]);

  const changeHandler = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const login = async () => {
    console.log("Login function executed", formData);
    let responseData;
    await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => responseData = data);
    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  }

  const signup = async () => {
    console.log("Signup Function Executed", formData);
    let responseData;
    await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => responseData = data);
    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  }

  return (
    <div className='loginsignup flex justify-center items-center min-h-screen bg-gradient-to-br from-pink-400 to-purple-600'>
      <div className="loginsignup-container bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800">{state}</h1>
        <div className="loginsignup-fields space-y-4 mb-6">
          {state === "Sign Up" && (
            <input 
              name='username'
              value={formData.username}
              onChange={changeHandler}
              type="text" 
              placeholder='Full Name' 
              className='w-full p-3 border border-gray-300 rounded bg-gray-50 focus:outline-none focus:border-purple-400'
            />
          )}
          <input 
            name='email'
            value={formData.email}
            onChange={changeHandler}
            type="email" 
            placeholder='Email Address' 
            className='w-full p-3 border border-gray-300 rounded bg-gray-50 focus:outline-none focus:border-purple-400'
          />
          <input 
            name='password'
            value={formData.password}
            onChange={changeHandler}
            type="password" 
            placeholder='Password' 
            className='w-full p-3 border border-gray-300 rounded bg-gray-50 focus:outline-none focus:border-purple-400'
          />
        </div>
        <button 
          className='w-full bg-purple-500 text-white py-3 rounded hover:bg-purple-600 transition duration-200' 
          onClick={() => {state === "Login" ? login() : signup()}}
        >
          Continue
        </button>
        {state === "Sign Up" ? (
          <p className='loginsignup-login text-center mt-4 text-gray-700'>
            Already have an account? <span className='text-purple-500 cursor-pointer hover:underline' onClick={() => setState("Login")}>Login here</span>
          </p>
        ) : (
          <p className='loginsignup-login text-center mt-4 text-gray-700'>
            Create an account? <span className='text-purple-500 cursor-pointer hover:underline' onClick={() => setState("Sign Up")}>Click here</span>
          </p>
        )}
        <div className="loginsignup-agree flex items-center mt-4">
          <input 
            type="checkbox" 
            className='mr-2 text-purple-500'
          />
          <p className='text-gray-600'>I agree to the terms and conditions</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup;
