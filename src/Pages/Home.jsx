import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Service from "../components/Service";
import { BsFillFlagFill, BsTelephoneFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import Sponsors from "../components/Sponsors";


const Home = () => {

    const services = useLoaderData();

    return (
        <div>
            <Navbar></Navbar>

            <Banner></Banner>

            <div className="max-w-7xl mx-auto py-10">
                <h2 className="text-center text-3xl font-bold py-10">Our Services</h2>
                <div className=" grid grid-cols-2 gap-4">
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </div>
            </div>

           <Sponsors></Sponsors>

            <div className="bg-[#132151] p-5 rounded-md my-10">
                <div className="flex justify-around items-center gap-14 max-w-7xl mx-auto py-10">
                    <div className="space-y-6 max-w-lg">
                        <h4 className="text-lg font-bold">Event Detail</h4>
                        <h2 className="text-5xl font-bold">Conference in the <br /> weekend!</h2>
                        <p className="text-justify">Join us at TechVibe&#39;s exclusive tech events, where innovation meets inspiration. Dive into the latest trends, connect with industry experts, and explore cutting-edge technologies. Experience insightful talks, hands-on workshops, and networking opportunities, all tailored for tech enthusiasts like you. Don&#39;t miss the chance to be part of the future - secure your spot now!</p>
                    </div>
                    <div className="space-y-8">
                        <div className="flex gap-4">
                            <div className="text-4xl mt-2"><BsFillFlagFill></BsFillFlagFill></div>
                            <div>
                                <p className="text-2xl font-bold mb-4">Venue</p>
                                <p> 123 Tech Street, Techland, TX 12345, USA</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="text-4xl mt-2"><AiFillMail></AiFillMail></div>
                            <div>
                                <p className="text-2xl font-bold mb-4">Email</p>
                                <p> info@techvibe.com</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="text-4xl mt-2"><BsTelephoneFill></BsTelephoneFill></div>
                            <div>
                                <p className="text-2xl font-bold mb-4">Contact</p>
                                <p>  +1 (123) 456-7890</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default Home;