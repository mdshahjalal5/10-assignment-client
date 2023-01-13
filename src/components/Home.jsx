

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./UserContext";
export const Home = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="flex bg-gray-100 p-8 my-12 flex-col justify-between max-w-xl px-4 mx-auto lg:pt-16 lg:flex-row md:px-8 lg:max-w-screen-xl">
            <div className="pt-16 mb-16 lg:mb-0 lg:pt-32 lg:max-w-lg lg:pr-5">
                <div className="max-w-xl mb-6">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                            Brand new
                        </p>
                    </div>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                        Coding is simple and fun,
                        <br className="hidden md:block" />
                        Just feel it
                        <span className="inline-block text-deep-purple-accent-400">
                            &nbsp; ye!
                        </span>
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        Learning to code is easier than you may think (even if you’re brand new). Start Today! Choose from in-demand programming languages and courses based on your unique goals. Join 50 Million Learners. Beginner-Friendly. Collaborative Learning. Choose Your Skill Path.
                    </p>
                </div>
                <div className="flex items-center">
              {user?.uid ? <>
                        <Link

                            to="/courses"
                            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-gray-400 bg-gray-600 focus:shadow-outline focus:outline-none"
                        >
                            Courses
                        </Link>
                        <Link

                            to="/blog"
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 border border-red-500 p-3 rounded"
                        >
                            Blogs
                        </Link>
              </>:<>
                            <Link

                                to="/login"
                                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-gray-400 bg-gray-600 focus:shadow-outline focus:outline-none"
                            >
                                Login
                            </Link>
                            <Link

                                to="/register"
                                aria-label=""
                                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 border border-red-500 p-3 rounded"
                            >
                                Register
                            </Link>
              </>}
                </div>
            </div>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNtzoWSpJbAvNmncCK-dacJ9-ZvW8jg9ZLow&usqp=CAU"
                    className="object-cover object-top w-full h-64 mx-auto lg:h-auto xl:mr-24 md:max-w-sm"
                    alt=""
                />
            </div>
        </div>
    );
};