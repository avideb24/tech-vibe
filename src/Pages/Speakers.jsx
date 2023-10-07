import { useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Speaker from "../components/Speaker";

const Speakers = () => {

    const speakers = useLoaderData()



    return (
        <div>
            <Navbar></Navbar>

            <div className="max-w-7xl mx-auto py-10">
                <h2 className="text-center text-3xl text-yellow-500 font-bold py-10">Meet Our Speakers</h2>
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