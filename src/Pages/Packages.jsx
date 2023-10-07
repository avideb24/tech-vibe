import { useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Package from "../components/Package";

const Packages = () => {

    const packages = useLoaderData();

    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <div className="space-y-4 py-10">
                <h3 className="text-xl font-bold">Pricing Packages</h3>
                <h2 className="text-4xl text-yellow-500 font-bold border-l-8 pl-4 py-2 border-l-yellow-500">Get Your Tickets Now!</h2>
                <div className="flex justify-around flex-wrap">
                    {
                        packages.map((item, idx) => <Package key={idx} pack={item}></Package>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Packages;