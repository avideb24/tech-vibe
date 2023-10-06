import TechBg from '../assets/tech-bg.jpg';

const Banner = () => {
    return (
        <div className='relative'>
            <img src={TechBg} className='md:h-96 lg:h-[450px] w-full object-cover' alt="banner image" />
            <div className='absolute w-full h-full left-0 top-0 flex justify-end items-center px-5'>
                <div className='max-w-2xl text-right space-y-6'>
                    <h3 className='text-xl font-bold'>Biggest Tech Event</h3>
                    <h1 className='text-6xl font-bold pr-6 border-r-8 border-r-[#108aee]'>Growing The Global Technology Industry</h1>
                    <p className='pl-24'>Dive And Experience Hands-on Workshops, Inspiring Talks, and the Future of Tech, All Under One Roof! Connect with Industry Leaders, Engage in Cutting-Edge Demos, and Shape the Future Together. Embrace the Tech Revolution – Your Gateway to Tomorrow Awaits!</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;