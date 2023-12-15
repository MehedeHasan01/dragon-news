import PropTypes from 'prop-types';

import useAuth from "../Utils/UseAuth";
import { Navigate, useLocation } from 'react-router-dom';


const PrivetRouter = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation()
    if(loading){
        return <>
        <div className='h-screen flex justify-center items-center'>

            <div className=''>
            <span className="loading loading-spinner loading-lg text-error"></span>
            </div>

        </div>

        </>
    }
    if(user){
        return children;
    }
    return <Navigate state={location?.pathname}  to={'/login'}></Navigate>
};

PrivetRouter.propTypes = {
    children: PropTypes.node
};
export default PrivetRouter;
