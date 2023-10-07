import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Contact = () => {
    return (
        <div className="#08133a max-w-7xl mx-auto px-6">
            <Navbar></Navbar>
            <div className="text-center space-y-3 py-10">
                <h2 className="text-center text-3xl text-yellow-500 font-bold pb-2">Contact</h2>
                <div className='w-32 h-1 mx-auto bg-yellow-500 mb-12'></div>
                <p className="pt-5">If you have any questions, suggestions, or partnership inquiries, feel free to contact us using the information below:</p>
                <div className="contact-details">
                    <p><strong>Email:</strong> info@techvibe.com</p>
                    <p><strong>Phone:</strong> +1 (123) 456-7890</p>
                    <p><strong>Address:</strong> 123 Tech Street, Techland, TX 12345, USA</p>
                </div>
                <p><strong>Social Media:</strong></p>
                <ul>
                    <li>Twitter: <span className="text-blue-500">@TechVibeEvents</span></li>
                    <li>Facebook: <span className="text-blue-500">/TechVibeEvents</span></li>
                    <li>Instagram: <span className="text-blue-500">@techvibe_events</span></li>
                    <li>LinkedIn: <span className="text-blue-500">/company/techvibe-events</span></li>
                </ul>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;