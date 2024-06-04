import React, { useState } from 'react';
import { auth, googleProvider,signInWithPopup } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice/userSlice';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form onSubmit={handleSubmit} className="shadow-2xl p-12">
                <div className="mb-4">
                    <label className="block mb-2">Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                </div>
                <div className='flex justify-between items-center'>
                <button
                    type="submit"
                    className="bg-blue-500 text-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Login
                </button>
                <button onClick={handleGoogleLogin} className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Google Login
            </button>
            </div>
            </form>
        </div>
    );
};


export default Login;