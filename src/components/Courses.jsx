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
                    <div className='border-4 border-red-700'>div1
                        {courses.map(function (course) {
                            return <p key={course.id}><Link to='/'>{course.name} </Link></p>
                        })}
                    </div>

                    <div className='border-4 border-red-700 grid grid-cols-2 gap-8 p-2'>
                        {courses.map(course=><Course key={course.id}></Course>)}
                    </div>
                </div>
          </div>

        </>
    );
};

export default Courses;