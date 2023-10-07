import TechBg from '../assets/tech-bg.jpg';

const Banner = () => {
    return (
        <div className='relative'>
            <img src={TechBg} className='md:h-[400px] lg:h-[600px] h-96 w-full object-cover' alt="banner image" />
            <div className='absolute w-full h-full left-0 top-0  '>
                
                <div className='flex justify-end h-full items-center px-5 max-w-7xl mx-auto'>
                    <div className='xl:max-w-2xl md:px-0 sm:px-10 px-5 text-right space-y-6'>
                        <h3 className='md:text-xl text-lg text-[#232a4b] font-bold py-2 pl-6 pr-3 rounded-tl-full bg-yellow-500 inline-block'>Biggest Tech Event</h3>
                        <h1 className='lg:text-6xl md:text-4xl text-2xl text-yellow-500 font-bold pr-6 border-r-8 border-r-yellow-500'>Growing The Global Technology Industry</h1>
                        <p className='sm:pl-24 pl-0 md:text-md text-sm'>Dive And Experience Hands-on Workshops, Inspiring Talks, and the Future of Tech, All Under One Roof! Connect with Industry Leaders, Engage in Cutting-Edge Demos, and Shape the Future Together. Embrace the Tech Revolution – Your Gateway to Tomorrow Awaits!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;