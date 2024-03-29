import { useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Package from "../components/Package";
import { Helmet } from "react-helmet";

const Packages = () => {

    const packages = useLoaderData();

    return (
        <div className="max-w-7xl mx-auto">
            <Helmet>
                <title>Packages</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="mx-5">
                <div className="space-y-4 py-10">
                    <h4 className="text-lg font-bold rounded-tr-full bg-yellow-500 inline-block pl-3 text-[#132151] pr-6 py-2">Pricing Packages</h4>
                    <h2 className="text-4xl text-yellow-500 font-bold border-l-8 pl-4 py-2 border-l-yellow-500">Get Your Tickets Now!</h2>
                    <div className="flex justify-around flex-wrap">
                        {
                            packages.map((item, idx) => <Package key={idx} pack={item}></Package>)
                        }
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Packages;