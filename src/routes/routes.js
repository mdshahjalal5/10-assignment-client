import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import Checkout from "../components/Checkout";
import CourseDetails from "../components/CourseDetails";
import Courses from "../components/Courses";
import { Home } from "../components/Home";
import Login from "../components/Login";
import PrivateRoutes from "../components/PrivateRoutes";
import Register from "../components/Register";
import { data } from "../dataLoader";
import Main from "../layout/Main";

 export  const routes =  createBrowserRouter([
    {
        path:'/', 
        element:<Main></Main>, 
        children:[
            {
                path:'/', 
                element:<Home></Home>
            }, 
            {
                path:"home", 
                element:<Home></Home>
            },
            {
                path:'/courses', 
                element:<Courses/>, 
                loader:function(){
                    return  data();
                }
            }, 
            {
                path:'/courses/:id',
                element:<CourseDetails></CourseDetails>,
                loader:({params})=>{
                    return fetch(`https://10-server-assignment.vercel.app/courses/${params.id}`)
                }
            }, 
            {
                path:'checkout', 
                element:<PrivateRoutes><Checkout></Checkout></PrivateRoutes>
            }, 
            {
                path:'/login', 
                element:<Login></Login>
            }, 
            {
                path:'/register', 
                element:<Register></Register>, 

            }, 
            {
                path:'/blog', 
                element:<Blog></Blog>
            }
        ]
    }, 
])