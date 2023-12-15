import { Helmet } from "react-helmet";
import Navbar from "../../Components/Header/Navbar";


const ErrorMesage = () => {
    return (

        <>
        <Helmet>
            <title>The Dragon News | Data Not Found</title>
        </Helmet>
        <div className="py-4 md:px-28 bg-blue-300">
            <Navbar/>
        </div>
        <div className="flex h-[80vh] bg-[#F3F3F3] justify-center items-center">

            <h1 className="text-3xl font-bold text-red-400">Data Not Found</h1>
        </div>
        </>
    );
};

export default ErrorMesage;