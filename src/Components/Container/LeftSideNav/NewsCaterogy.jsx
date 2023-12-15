
import PropTypes from 'prop-types';
import { CiCalendar } from 'react-icons/ci';
import moment from 'moment';

const NewsCaterogy = ({image, title}) => {
    return (
        <div className='mb-3'>
                    <figure >
                         <img src={image} alt="Shoes"  />
                     </figure>

                     <p className="my-5 text-xl font-semibold text-titleGrey">{title}</p>

                     <div className=" flex items-center font-medium text-[#9F9F9F] ">
                         <p className="text-subTitleGrey">Sports</p>
                         <CiCalendar className="ml-5 mr-2"/>
                         {
                             moment().format('MMM MM, Y ')
                         }
                     </div>

          </div>
    );
};

NewsCaterogy.propTypes = {
    image: PropTypes.node,
    title: PropTypes.node
};

export default NewsCaterogy;