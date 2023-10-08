import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
    return (
        <div className="#08133a max-w-7xl mx-auto px-6">
            <Helmet>
                <title>About</title>
            </Helmet>
           <Navbar></Navbar>
            <div>
                <div className="text-center space-y-3 py-10">
                    <h2 className="text-center text-3xl text-yellow-500 font-bold pt-4">About</h2>
                    <div className='w-32 h-1 mx-auto bg-yellow-500 mb-8'></div>
                    <p className="pt-5"><span className="text-2xl font-bold">TechVibe</span> is the heartbeat of the tech community, connecting passionate individuals with the latest trends, innovations, and thought leaders in the technology realm. Our mission is to bridge the gap between tech enthusiasts and the most impactful events happening worldwide.</p>
                    <p>At TechVibe, we curate a diverse array of tech events, ranging from hackathons and startup meetups to industry conferences and product launches. We believe in the power of knowledge sharing and networking, empowering professionals and enthusiasts alike to stay ahead in this ever-evolving digital landscape.</p>
                    <p>Join us on this exhilarating journey of discovery and inspiration. Whether you&#39;re a seasoned developer, an aspiring entrepreneur, or simply curious about the future of technology, TechVibe is your compass in the dynamic world of tech events.</p>
                    <p>Stay tuned, stay inspired, and let&#39;s ride the wave of innovation together!</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;