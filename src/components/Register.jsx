import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './UserContext';

const Register = () => {
    const { signUp } = useContext(AuthContext)
    console.log(signUp);
    const handleRegister = (event) => {
        event.preventDefault();
        let form, mail, pass; 
        form = event.target;
        mail = form.email.value;
        pass = form.password.value;
        console.log(mail, pass);
        signUp(mail, pass)
    }
    return (
        <div>
            <div className='w-1/2   border-red mx-auto pt-32'>

                <form onSubmit={handleRegister}>
                    <div className="mb-1">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Your name</label>
                        <input type="text" id="name" name='name' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
                    </div>
                    <div className="mb-1">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                        <input type="email" id="email" name='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
                    </div>
                    <div className="mb-1">
                        <label htmlFor="password" name='password' className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
                        <input type="password" placeholder=' Password' id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <p className='mb-2'>Already have an account? <Link style={{ textDecoration: "underline" }} to={'/login'}>Sign in</Link> </p>
                    <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                            <input id="terms and condition" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                        </div>
                        <Link to={'/terms'} style={{ textDecoration: 'underline' }}>    <label htmlFor="terms and condition" className="ml-2 text-sm font-medium text-gray-900">terms and condition</label></Link>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>

            </div>

        </div>
    );
};

export default Register;