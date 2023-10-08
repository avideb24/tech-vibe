import { useLoaderData, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

const ServiceDetails = () => {

    const { id } = useParams();
    const data = useLoaderData();

    const serviceData = data.find(item => item.id == id);

    return (
        <div className="max-w-7xl mx-auto ">
            <Helmet>
                <title>{serviceData.title}</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="p-4 rounded-md my-10 bg-[#172557d2] space-y-3">
                <img className="w-full rounded-md" src={serviceData.image} alt="" />
                <h2 className='text-2xl text-yellow-500 font-bold'>{serviceData.title}</h2>
                <p>{serviceData.description}</p>
                <p className="text-xl">${serviceData.price}</p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ServiceDetails;