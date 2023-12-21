import React from 'react';

const Login = () => {
    return (
        <>
            <form className='mt-5 pl-5 pr-5'>
                <div className='form-group'>
                    <label>Email address</label>
                    <input type='email' className='form-control' placeholder='Enter email'></input>
                </div>
                <div className='form-group pt-3'>
                    <label>Password</label>
                    <input type='password' className='form-control' placeholder='Password'></input>
                </div>
                <div className='pl-5'>
                <button type='submit' className='btn btn-primary'>Login</button>
                </div>
               
            </form>        
        </>
    );
};

export default Login;