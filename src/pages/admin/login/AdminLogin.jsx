import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import watchImage from '../../../assets/watch.png';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate=useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(email==="admin@admin" && password==="admin"){
            //to admin dashboard
            navigate('/admin/dashboard')
    };
    };

    return (
        <div className="relative flex justify-center items-center h-screen bg-cover bg-center" style={{ backgroundImage: `url(${watchImage})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"></div> {/* Background blur effect */}
      <div className="relative z-10 flex flex-col items-center p-8 bg-white bg-opacity-30 backdrop-blur-sm rounded-lg shadow-2xl">
        <form className="bg-white bg-opacity-30 backdrop-blur-sm shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
    );
};

export default AdminLogin;