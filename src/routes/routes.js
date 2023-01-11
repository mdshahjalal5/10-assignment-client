import { createBrowserRouter } from "react-router-dom";
import Courses from "../components/Courses";
import { Home } from "../components/Home";
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
                path:'/courses', 
                element:<Courses/>, 
                loader:function(){
                    return  data();
                }
            }
        ]
    }, 
])