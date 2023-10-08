import { useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Speaker from "../components/Speaker";
import { Helmet } from "react-helmet";

const Speakers = () => {

    const speakers = useLoaderData()



    return (
        <div>

            <Helmet>
                <title>Speakers</title>
            </Helmet>

            <Navbar></Navbar>

            <div className="max-w-7xl mx-auto py-10">
                <h2 className="text-center text-3xl text-yellow-500 font-bold pt-2 pb-2">Meet Our Speakers</h2>
                <div className='w-32 h-1 mx-auto bg-yellow-500 block mt-4 mb-14'></div>
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

export default Speakers;