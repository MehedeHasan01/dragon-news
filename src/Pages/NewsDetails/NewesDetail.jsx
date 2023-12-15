import PropTypes from 'prop-types';
import { FaArrowLeft } from "react-icons/fa6";


import { Link } from 'react-router-dom';



const NewsDetail = ({Details}) => {
      const {  image_url, title, details} =Details
    return (
        <div >

            <div >
            <div>
                <img src={image_url} alt="" className=' h-[300px] md:h-[411px] w-full' />
            </div>
            <h1 className='mt-5 mb-2 leading-10  text-titleGrey font-bold text-2xl'>{title}.</h1>
            <div className='mb-8'>
                    <p className='text-paragraphGrey font-normal'>
                        {
                         details
                        }
                    </p>
            </div>



            <hr  className='my-6  bg-[#E7E7E7] ' />


            <Link to={'/'}>
            <button className="py-[10px] pl-9 pr-5  bg-[#D72050] text-white font-medium text-xl flex items-center gap-2"> <span><FaArrowLeft/></span> All news in this category </button>
            </Link>
            </div>

        </div>
    );
};

NewsDetail.propTypes = {
    Details: PropTypes.object.isRequired
};

export default NewsDetail;