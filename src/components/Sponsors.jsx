import Sponsor1 from '../images/sponsor (1).png';
import Sponsor2 from '../images/sponsor (2).png';
import Sponsor3 from '../images/sponsor (3).png';
import Sponsor4 from '../images/sponsor (4).png';
import Sponsor5 from '../images/sponsor (5).png';
import Sponsor6 from '../images/sponsor (6).png';
import Sponsor7 from '../images/sponsor (7).png';
import Sponsor8 from '../images/sponsor (8).png';

const Sponsors = () => {
    return (
        <div className='max-w-7xl mx-auto py-10'>
            <h2 className="text-center text-3xl text-yellow-500 font-bold pt-10 pb-2">Our Sponsors</h2>
            <div className='w-32 h-1 mx-auto bg-yellow-500 mb-8'></div>
            <div className='flex justify-center flex-wrap gap-x-20 gap-y-10'>
                <img className='w-40 object-contain' src={Sponsor1} alt="" />
                <img className='w-40 object-contain' src={Sponsor2} alt="" />
                <img className='w-40 object-contain' src={Sponsor3} alt="" />
                <img className='w-40 object-contain' src={Sponsor4} alt="" />
                <img className='w-40 object-contain' src={Sponsor5} alt="" />
                <img className='w-40 object-contain' src={Sponsor6} alt="" />
                <img className='w-40 object-contain' src={Sponsor7} alt="" />
                <img className='w-40 object-contain' src={Sponsor8} alt="" />
            </div>
        </div>
    );
};

export default Sponsors;