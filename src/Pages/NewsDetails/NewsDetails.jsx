import { useLoaderData, useParams } from "react-router-dom";
import RigthSideNav from "../../Components/Container/RigthSideNav/RigthSideNav";
import NavHeader from "../../Components/Header/NavHeader";
import Navbar from "../../Components/Header/Navbar";
import NewsDetail from "./NewesDetail";
import EditorInsigth from "./EditorInsigth";
import { Helmet } from "react-helmet";


const NewsDetails = () => {
    const {id} = useParams();
    const news = useLoaderData()
    const  newsDetails = news.filter(aNews => aNews._id == id)

    return (
        <div className=" max-w-6xl mx-auto px-6 md:px-0 font-poppins bg-titleColor">
        <div>
        <Helmet>
            <title>The Dragon News Details</title>
        </Helmet>
            <NavHeader/>
            <Navbar/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-16">
            <div className="md:col-span-3">

                <h1 className="font-semibold text-xl text-titleGrey mb-5">Dragon News</h1>

                <div className="p-3 md:p-7 border rounded">
                {
                    newsDetails?.map(newsDetail => <NewsDetail key={newsDetail._id}  Details={newsDetail} />)
                }
                </div>

                <h1 className="font-semibold text-xl text-titleGrey my-7">Editors Insight</h1>

                <EditorInsigth/>

            </div>
            <div>
                <RigthSideNav/>
            </div>
        </div>
        </div>
    );
};

export default NewsDetails;