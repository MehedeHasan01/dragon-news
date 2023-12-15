import moment from 'moment';
import logo from '../../assets/image/logo.png'
import Date from '../TimeDate/Date';

const NavHeader = () => {

    return (
        <div className='text-center'>
            <img src={logo} alt="" className='mx-auto md:w-[42%] mt-12' />
            <p className='mt-5 font-normal text-lg text-paragraphGrey'>Journalism Without Fear or Favour</p>
            <div className='flex w-fit mx-auto gap-1 text-paragraphGrey font-medium text-xl mt-1'>
                <span className='text-titleGrey'>
                {
                    moment().format('dddd,')
                }
                </span>
                <Date/>
            </div>
        </div>
    );

};

export default NavHeader;