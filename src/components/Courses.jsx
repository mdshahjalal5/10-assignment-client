import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Course from './Course';
import './Courses.css'
const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
   
    return (
        <>
            <div>
                <h2>All courses {courses.length} </h2>
            </div>

          <div className="container mx-auto">
                <div className='courses-layout '>
                    {/* list item */}
                    
                    <div className='border-4 border-red-700'>div1
                        
                        {courses.map(function (course) {
                            return <Link key={course.id} to={`/courses/${course.id}`}>
                                <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
                                    <li className="pb-3 sm:pb-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="flex-shrink-0">
                                                <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                    Neil Sims
                                                </p>
                                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                    email@flowbite.com
                                                </p>
                                            </div>
                                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                $320
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                            </Link>
                        })}
                    </div>

                    <div className='border-4 border-red-700 grid grid-cols-2 gap-8 p-2'>
                        {courses.map(course=><Course key={course.id} course={course}></Course>)}
                    </div>
                </div>
          </div>

        </>
    );
};

export default Courses;