import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
        <h1>404 not Found</h1>
        <Link to={'/'}>
        <button className='btn btn-primary'>Go Back Home</button></Link>
        </div>
    );
};

export default ErrorPage;