import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Service from "../components/Service";

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
            <Footer></Footer>
        </div>
    );
};

export default Home;