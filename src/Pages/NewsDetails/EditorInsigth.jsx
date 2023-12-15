
import NewsCaterogy from '../../Components/Container/LeftSideNav/NewsCaterogy';
import newsCaterogysImg1 from '../../assets/image/1.png'
import newsCaterogysImg2 from '../../assets/image/2.png'
import newsCaterogysImg3 from '../../assets/image/3.png'

const EditorInsigth = () => {
    return (
        <>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <NewsCaterogy image={newsCaterogysImg1} title={'Bayern Slams Authorities Over Flight Delay to Club World Cup'}/>
        <NewsCaterogy image={newsCaterogysImg2} title={'Bayern Slams Authorities Over Flight Delay to Club World Cup'}/>
        <NewsCaterogy image={newsCaterogysImg3} title={'Bayern Slams Authorities Over Flight Delay to Club World Cup'}/>
        <NewsCaterogy image={newsCaterogysImg1} title={'Bayern Slams Authorities Over Flight Delay to Club World Cup'}/>
        </div>
        </>
    );
};

export default EditorInsigth;