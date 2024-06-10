import React, { useState } from 'react';
import { auth, googleProvider,signInWithPopup } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice/userSlice';
import watchImage from '../assets/watch.png';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const navigate=useNavigate();
    const dispatch = useDispatch();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(email==='ali@ali' || password==='ali'){
            navigate('../home')
            dispatch(setUser({email:'ali'}))
            console.log(isLogin ? 'Login form submitted' : 'Sign up form submitted', { email, password });
        }
    };

    const handleGoogleLogin=()=>{
        signInWithPopup(auth,googleProvider)
        .then((result)=>{
            navigate('../home')
            dispatch(setUser(result.user))
        }).catch((err)=>{
            console.log(err)
        })
    };

    const toggleForm = () => {
        setIsLogin(!isLogin);
        setEmail('');
        setPassword('');
      };

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${watchImage})` }}>
      <div className="absolute inset-0 bg-black opacity-50absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md blur"></div> {/* Background blur effect */}
      <div className="relative z-10 flex flex-col items-center p-8 bg-white bg-opacity-30 backdrop-blur-sm rounded-lg shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            <label className="block mb-2 text-gray-800">Username</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full border border-gray-300 rounded px-3 py-2 bg-white bg-opacity-50"
              placeholder="Type your username"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-gray-800">Password</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full border border-gray-300 rounded px-3 py-2 bg-white bg-opacity-50"
              placeholder="Type your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-2 px-4 rounded"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        {isLogin && (
          <div className="mt-6 flex flex-col items-center">
            <span className="text-gray-800 mb-4">---OR---</span>
            <button onClick={handleGoogleLogin} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center">
              <i className="fab fa-google mr-2"></i> Google
            </button>
          </div>
        )}
        <p className="mt-6 text-gray-700">
          {isLogin ? 'Have not account yet?' : 'Already have an account?'}{' '}
          <a onClick={toggleForm} className="text-blue-500 hover:underline cursor-pointer">
            {isLogin ? 'Sign up' : 'Login'}
          </a>
        </p>
      </div>
    </div>
    );
};


export default Login;