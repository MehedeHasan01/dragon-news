import { IoLogoGithub, IoLogoGoogle,  IoLogoTwitter, IoLogoInstagram } from "react-icons/io5";
import QzoneImg1 from '../../../assets/image/qZone1.png'
import QzoneImg2 from '../../../assets/image/qZone2.png'
import QzoneImg3 from '../../../assets/image/qZone3.png'

import { FaFacebookF } from "react-icons/fa";
import SideNavItem from "./SideNavItem";
import useAuth from "../../../Utils/UseAuth";

import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const RigthSideNav = () => {
    const {googleLogin,githubLogin} = useAuth();
    const Navigate = useNavigate()
    const handleSocialLogin = (media) => {
        media()
            .then((res) => {
                console.log(res.user);
                toast.success('User logged in successfully');
                Navigate('/')
            })
            .catch(() => toast.error('Login closed! Try Again Login.'))

    }

    return (
        <>
        <h2 className="font-bold text-xl text-titleGrey">Login With</h2>

        <div className="mt-5 cursor-pointer space-y-3">
            <div onClick={()=> handleSocialLogin(googleLogin)  } className="text-blue-500 font-semibold   flex justify-center items-center gap-2 border-2 py-3 border-blue-500 rounded-lg">
                <IoLogoGoogle className="text-xl"/>
                <p>Login With Google</p>
            </div>
            <div onClick={() => handleSocialLogin(githubLogin)} className="text-titleGrey font-semibold  flex justify-center items-center gap-2 border-2 py-3 border-titleGrey rounded-lg">
                <IoLogoGithub className="text-xl"/>
                <p>Login With Google</p>
            </div>

        </div>
        <h2 className="font-bold text-xl text-titleGrey mt-10 mb-8">Find Us On</h2>
        <div className="my-5">

            <div className="cursor-pointer flex items-center gap-3  border-x border-t rounded-t-lg p-4 border-[#E7E7E7]">
                <div className=" p-2 text-blue-800 hover:text-blue-900 rounded-full bg-[#F3F3F3] w-fit"><FaFacebookF className="w-6 h-6"/> </div>
                <p className="text-paragraphGrey font-medium text-base">Facebook</p>
            </div>
            <div className="cursor-pointer flex items-center gap-3 border p-4 border-[#E7E7E7]">
                <div className=" p-2
                hover:text-blue-600
                text-blue-500 rounded-full bg-[#F3F3F3] w-fit"><IoLogoTwitter className="w-6 h-6"/> </div>
                <p className="text-paragraphGrey font-medium text-base">Twitter</p>
            </div>
            <div className="cursor-pointer flex items-center gap-3 border-x border-b p-4 border-[#E7E7E7] rounded-b-lg">
                <div className=" p-2 hover:text-[#f8993f] text-[#FBA756] rounded-full bg-[#F3F3F3] w-fit "><IoLogoInstagram className="w-6 h-6"/> </div>
                <p className="text-paragraphGrey font-medium text-base">Instagram</p>
            </div>

        </div>
        <div className="my-5 p-4 bg-[#F3F3F3]">

        <h2 className="font-bold text-xl text-titleGrey mb-4">Q-Zone</h2>

        <div className="space-y-5 w-fit mx-auto">
            <div><img src={QzoneImg1} alt="" /></div>
            <div><img src={QzoneImg2} alt="" /></div>
            <div><img src={QzoneImg3} alt="" /></div>
        </div>

        </div>
        <SideNavItem/>
        <Toaster/>
        </>
    );


};

export default RigthSideNav;