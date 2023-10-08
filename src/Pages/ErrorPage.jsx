import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="w-full h-[100vh] flex justify-center items-center">
            <Helmet>
                <title>Error</title>
            </Helmet>
            <div className="space-y-6 text-center">
                <h2 className="text-5xl text-yellow-500 font-bold">Oops!!!</h2>
                <p className="text-lg text-red-600 font-bold">Somwthing Went Wrong</p>
                <Link className="px-4 py-1 bg-yellow-500 rounded-md font-bold text-[#08133a] inline-block mt-8" to='/'>Go Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;