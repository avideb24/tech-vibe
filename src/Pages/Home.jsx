import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Service from "../components/Service";
import { BsFillFlagFill, BsTelephoneFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import Sponsors from "../components/Sponsors";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../Provider/AuthProvider";


const Home = () => {

    const { user } = useContext(AuthContext);

    useEffect(() => {
        AOS.init();
    }, [])

    const services = useLoaderData();

    return (
        <div>
            {
                user ?
                <Helmet>
                    <title>Home</title>
                </Helmet> :
                <Helmet>
                <title>TechVibe</title>
            </Helmet>
            }
            <div data-aos="fade-up" data-aos-duration="1500"><Navbar></Navbar></div>

            <div data-aos="fade-up" data-aos-duration="1500"><Banner></Banner></div>

            <div className="max-w-7xl mx-auto py-10">
                <h2 className="text-center text-3xl text-yellow-500 font-bold pt-10 pb-2">Our Services</h2>
                <div className='w-32 h-1 mx-auto bg-yellow-500 mb-8'></div>
                <div className="grid md:grid-cols-2 grid-cols-1 mx-5 gap-4">
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </div>
            </div>

            <div data-aos="fade-up" data-aos-duration="1500"><Sponsors></Sponsors></div>

            <div className="bg-[#132151] p-5 my-10">
                <div className="flex lg:flex-row flex-col justify-around items-center gap-14 max-w-7xl mx-auto py-10">
                    <div className="space-y-6 max-w-lg" data-aos="zoom-in" data-aos-duration="1500">
                        <h4 className="text-lg font-bold rounded-tr-full bg-yellow-500 inline-block pl-3 text-[#132151] pr-6 py-2">Event Detail</h4>
                        <h2 className="sm:text-5xl text-3xl text-yellow-500 font-bold border-l-8 pl-4 py-2 border-l-yellow-500">Conference in the <br /> weekend!</h2>
                        <p className="text-justify">Join us at TechVibe&#39;s exclusive tech events, where innovation meets inspiration. Dive into the latest trends, connect with industry experts, and explore cutting-edge technologies. Experience insightful talks, hands-on workshops, and networking opportunities, all tailored for tech enthusiasts like you. Don&#39;t miss the chance to be part of the future - secure your spot now!</p>
                    </div>
                    <div className="space-y-8" data-aos="zoom-in" data-aos-duration="1500">
                        <div className="flex gap-4">
                            <div className="text-4xl text-yellow-500 mt-2"><BsFillFlagFill></BsFillFlagFill></div>
                            <div>
                                <p className="text-2xl text-yellow-500 font-bold mb-4">Venue</p>
                                <p> 123 Tech Street, Techland, TX 12345, USA</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="text-4xl text-yellow-500 mt-2"><AiFillMail></AiFillMail></div>
                            <div>
                                <p className="text-2xl text-yellow-500 font-bold mb-4">Email</p>
                                <p> info@techvibe.com</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="text-4xl text-yellow-500 mt-2"><BsTelephoneFill></BsTelephoneFill></div>
                            <div>
                                <p className="text-2xl text-yellow-500 font-bold mb-4">Contact</p>
                                <p>  +1 (123) 456-7890</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div data-aos="zoom-in" data-aos-duration="1500"><Footer></Footer></div>

        </div>
    );
};

export default Home;