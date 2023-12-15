import { useState } from "react";
import Navbar from "../../Components/Header/Navbar";
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";

const About = () => {
    const [email , setEmail] = useState('')
    const handleToastMessge =()=>{
         toast.error(email)
    }
    return (
        <div >
            <Helmet>
                <title>The Dragon News | About</title>
            </Helmet>
        <div className="w-fit mx-auto">
            <div>
                <Navbar/>
            </div>
            <button onClick={handleToastMessge} className="text-center btn btn-primary">click </button>
            <input type="text" onChange={(e)=> setEmail(e.target.value)}  className="input input-primary" />

            <p>{email}</p>
            <Toaster/>
        </div>

        </div>
    );
};

export default About;
