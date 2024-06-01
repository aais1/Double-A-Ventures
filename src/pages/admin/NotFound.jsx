import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">Oops! Page Not Found</h1>
            <p className="text-lg text-gray-600 mb-8">The page you are looking for does not exist. 😟</p>
            <Link to="/" className="text-blue-500 hover:underline">Go back to home</Link>
            <p className="mt-4 text-gray-600">But don't worry, we're working on finding it!</p>
        </div>
    );
};

export default NotFound;