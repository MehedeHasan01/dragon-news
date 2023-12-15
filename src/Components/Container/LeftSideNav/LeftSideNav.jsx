
import NewsCaterogys from "./NewsCaterogys";
import { useEffect, useState } from "react";

const LeftSideNav = () => {

    const [newsCaterogys, setNewsCaterogys] = useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setNewsCaterogys(data))
    },[])

    return (
        <div>
            <h2 className="font-semibold text-xl text-titleGrey">All Caterogy</h2>
            <h1 className="font-semibold text-xl text-titleGrey bg-[#E7E7E7] border border-[#E7E7E7] rounded-md py-4 text-center mt-5">National News {newsCaterogys.length} </h1>

            <div className="text-[#9F9F9F] font-medium space-y-7 my-7 text-center">
                {
                    newsCaterogys.map(newsCaterogy => <p key={newsCaterogy.id}>{newsCaterogy?.name} </p>)
                }
            </div>

            <div className="">

            <NewsCaterogys/>
            </div>

        </div>
    );



};

export default LeftSideNav;