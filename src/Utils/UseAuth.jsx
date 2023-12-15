// import React, { useContext } from 'react';
// import { AuthContext } from '../Provider/AuthProvider';
//
// const useAuth = () => {
//
//     const all = useContext(AuthContext)
//     return all;
// };
//
// export default useAuth;

import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider/AuthProvider"

const useAuth = ()=>{
    const allAuthContext = useContext(AuthContext);
    return allAuthContext
}

export default useAuth;