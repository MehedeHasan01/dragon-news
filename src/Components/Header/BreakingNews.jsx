import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom"

const BreakingNews = () => {

    return (
        <div className="mt-7 mb-8">
            <div className="flex  bg-[#F3F3F3] items-center p-4 gap-4">
                <button className="text-white px-7 py-2 bg-[#D72050] text-xl font-medium">Latest</button>
                <Marquee speed={100}>

                <p className="text-lg font-semibold text-titleGrey">
                    <Link className="" to={'/'}>Match Highlights: Germany vs Spain — as it happened</Link> !
                    <Link to={'/'} className="ml-3"> Match Highlights: Germany vs Spain as...</Link>
                </p>
                </Marquee>

            </div>
        </div>
    );


};

export default BreakingNews;