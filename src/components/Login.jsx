import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='w-1/2   border-red mx-auto pt-32'>

            <form className=''>
                <div class="mb-1">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                    <input type="email" id="email" name='email' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required/>
                </div>
                <div class="mb-6">
                    <label for="password" name='password' class="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
                    <input type="password" placeholder=' Password' id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div class="flex items-start mb-1">
                    <div class="flex items-center h-5">
                        <input id="terms and condition" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
                    </div>
                    
                    <div>

                        <Link style={{textDecoration:'underline'}} to={'/terms'}><label for="terms and condition" class="ml-2 text-sm font-medium text-gray-900">terms and condition</label></Link>
                    </div>
                </div>
                <p className='mb-2'>Don't  have an account? <Link style={{textDecoration:"underline"}}  to={'/register'}>Register</Link> </p>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

        </div>
    );
};

export default Login;