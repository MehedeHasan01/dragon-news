import { useLoaderData } from "react-router-dom";
import LeftSideNav from "../../Components/Container/LeftSideNav/LeftSideNav";
import RigthSideNav from "../../Components/Container/RigthSideNav/RigthSideNav";
import BreakingNews from "../../Components/Header/BreakingNews";
import NavHeader from "../../Components/Header/NavHeader";
import Navbar from "../../Components/Header/Navbar";
import NewsCard from "./NewsCard";
import { Helmet } from "react-helmet";


const Home = () => {

    const News = useLoaderData()


    return (
        <div className="  max-w-6xl mx-auto px-6 md:px-0 font-poppins bg-titleColor">
                    <Helmet>
            <title>The Dragon News | Home</title>
        </Helmet>
            <NavHeader/>
            <BreakingNews/>
            <Navbar/>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-16">
                <div>
                    <LeftSideNav/>
                </div>

                <div className="md:col-span-2">
                <h1 className="font-semibold text-xl text-titleGrey mb-5">Dragon News Home</h1>
                {
                    News?.map(aNews => <NewsCard key={aNews._id} news={aNews} />)
                }
                </div>

                <div>
                    <RigthSideNav/>
                </div>
            </div>
        </div>
    );
};

export default Home;