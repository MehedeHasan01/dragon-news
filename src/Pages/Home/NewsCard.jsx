import PropTypes from 'prop-types';
import { IoEyeSharp  } from "react-icons/io5";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';



const NewsCard = ({news}) => {
      const { _id,author, image_url, title, rating,details, total_view} = news


    return (
        <div className='mb-8'>


            <div className='flex justify-between  pl-5 pr-7 items-center py-4 bg-[#F3F3F3] mb-[14px] rounded-t-lg'>

                    <div className='flex gap-2'>
                        <img src={author.img} alt="" className='w-[40px] h-[40px] rounded-full' />
                        <div>
                            <h3 className='text-titleGrey font-semibold'>{author.name}</h3>
                            <p className='text-paragraphGrey font-normal text-sm'>{author.published_date}</p>
                        </div>
                    </div>


                <div>
                <div className='flex space-x-2 text-paragraphGrey text-xl'>
                        <CiBookmark/>
                        <CiShare2/>
                    </div>
                </div>
            </div>
            <div className='px-5 pb-5'>


            <h1 className='mt-[14px] mb-5 text-titleGrey font-bold text-xl'>{title}</h1>
            <div>
                <img src={image_url} alt="" className='h-[262px] w-full' />
            </div>
            <div className='my-8'>

                {
                    details.length > 200 ?
                    <p className='text-paragraphGrey font-normal'>{details.slice(0, 200)}
                    <br />
                    <Link to={`/newsDetails/${_id}`} className=' text   font-semibold link-hover text-[#F75B5F]  '>Read More...</Link>
                     </p>
                    :
                    <p className='text-paragraphGrey font-normal'>
                        {
                            details
                        }
                    </p>


                }





            </div>



            <hr  className='mt-5 mb-6 bg-[#E7E7E7] ' />

            <div className='flex justify-between items-center '>
                <div className='text-3xl text-[#FF8C47]  '>
                    <Rating
                    placeholderRating={rating.number}
                    emptySymbol={<IoIosStarOutline/>}
                    fullSymbol={<IoIosStarHalf/> }
                    placeholderSymbol={ <IoIosStar />}

                    />
                </div>


                <div className='text-paragraphGrey font-medium text-base flex items-center gap-2'>
                    <IoEyeSharp className='text-2xl cursor-pointer'/>
                    {total_view}
                </div>
            </div>
            </div>

        </div>
    );
};

NewsCard.propTypes = {
    news: PropTypes.object.isRequired
};

export default NewsCard;