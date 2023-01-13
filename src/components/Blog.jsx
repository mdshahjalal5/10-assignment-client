import React from 'react';

const Blog = () => {
    return (
        <div className='w-1/2 pt-12 mx-auto'>
            <div className="mb-3 bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {'What is `cors`?'} </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> {'CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.'} </p>
                </div>
            </div>
            <div className="mb-3 bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {`Why are you using firebase? What other options do you have to implement authentication?
`} </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> {`Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.`} </p>
                </div>
            </div><div className="mb-3 bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {'What is Node? How does Node work'} </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> {'Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the clients browser. Ryan Dahl developed it in 2009, and its latest iteration, version 15.14, was released in April 2021. Developers use Node.'} </p>
                </div>
            </div>
            <div className="mb-3 bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {`How does the private route work?`} </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> {'The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property'} </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;