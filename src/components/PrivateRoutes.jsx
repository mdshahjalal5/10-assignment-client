import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './UserContext';

const PrivateRoutes = ({children}) => {
    const { user, loading,  } = useContext(AuthContext)
    const location = useLocation();
    if (user && user.uid) {
        return children;
    }
    if (loading) {
        return <>
            <div className='flex justify-center items-center min-h-screen'>
                <div className='w-16 h-1 border-4 border-dashed nimate-spin border-red-800'></div>
            </div>
        </>
    }

    return <Navigate state={{from:location}} to='/login'></Navigate>
};

export default PrivateRoutes;