import { IoLogoFacebook, IoLogoGithub, IoLogoGoogle } from "react-icons/io5";
import useAuth from "../../Utils/UseAuth";
import toast, { Toaster } from "react-hot-toast";


const SocailMediaLogin = () => {
    const {googleLogin, githubLogin, facebookLogin} = useAuth()

    const handleSocailMediaLogin =(media)=>{
        media().then(()=> {
            toast.success('User logged in successfully');
        })
        .catch(() => toast.error('Login closed! Try Again Login.'))
    }

    return (
        <>
        <div className="flex items-center gap-1 mb-2">
            <div className="border border-paragraphGrey w-full"></div>
            <div className="text-xl font-bold text-titleGrey">OR</div>
            <div className="border border-paragraphGrey w-full"></div>
        </div>
        <div className="flex justify-center items-center gap-2">
            <div  onClick={()=> handleSocailMediaLogin(googleLogin) } className="p-2 text-blue-600
            hover:text-blue-700
            hover:bg-blue-100 bg-red-100 w-fit rounded-full cursor-pointer">

            <IoLogoGoogle className="text-2xl"/>
            </div>
            <div onClick={()=> handleSocailMediaLogin(githubLogin)} className="p-2 text-black-400
            cursor-pointer
            hover:bg-blue-100 bg-red-100 w-fit rounded-full ">

            <IoLogoGithub className="text-2xl"/>
            </div>
            <div onClick={()=> handleSocailMediaLogin(facebookLogin)} className="p-2 text-blue-500
            cursor-pointer
            hover:bg-blue-100 bg-red-100 w-fit rounded-full ">

            <IoLogoFacebook className="text-2xl"/>
            </div>

        </div>
        <Toaster/>
        </>
    );
};

export default SocailMediaLogin;