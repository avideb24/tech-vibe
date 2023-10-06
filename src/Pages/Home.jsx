import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Service from "../components/Service";
import Speaker from "../components/Speaker";


const Home = () => {

    const services = useLoaderData();

    const [speakers, setSpeakers] = useState([]);

    useEffect(() => {
        fetch('/speaker.json')
            .then(res => res.json())
            .then(data => setSpeakers(data))
    }, [])

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
            <div className="max-w-7xl mx-auto py-10">
                <h2 className="text-center text-3xl font-bold py-10">Meet Our Speakers</h2>
                <div className="flex justify-around flex-wrap gap-4 bg-[#132151] p-4 rounded-md">
                    {
                        speakers.map(speaker => <Speaker key={speaker.id} speaker={speaker}></Speaker>)                      
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;