import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineGoogle } from "react-icons/ai";
import { AuthContext } from "../Provider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import Navbar from "../components/Navbar";
import Swal from "sweetalert2";

const Login = () => {

    const location = useLocation();

    const navigate = useNavigate();

    const { signInUser, googleSignIn } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
            .then(res => {
                console.log(res.user)
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successfully!',
                })
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                console.error(err)
            })
    }

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(res => {
                console.log(res)
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successfully!',
                })
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error( 'firebase main error',error)
                console.error("Firebase Error Code:", error.code);
                console.error("Firebase Error Message:", error.message);
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="py-10 px-5">
                <div className="max-w-xl mx-auto bg-[#132151] p-10 rounded-md text-white">
                    <h2 className="text-center sm:text-3xl text-2xl font-bold py-9 border-b-2 text-yellow-500 border-b-yellow-500">Login your account</h2>
                    <form className="mt-10 text-blue-950" onSubmit={handleRegister}>
                        <input className="w-full border-2 border-white p-2 rounded-md" type="email" name="email" required placeholder="Enter your email address" />
                        <input className="w-full border-2 border-white p-2 my-4 rounded-md" type="password" name="password" required placeholder="Enter your password" />
                        <input type="submit" className="w-full bg-yellow-500 text-[#08133a] font-bold py-2 rounded-md cursor-pointer" value="Login" />
                    </form>
                    <p className="text-center mt-6 sm:text-md text-sm">Dont’t Have An Account ? <Link className="font-bold text-blue-500" to='/register'>Register</Link></p>
                    <div className="mt-8">
                        <button
                            onClick={handleGoogleSignIn}
                            className="w-full bg-transparent rounded-md py-2 flex justify-center items-center gap-1 bg-blue-900 text-white"
                        >
                            <span className="text-lg">
                                <AiOutlineGoogle></AiOutlineGoogle>
                            </span>{" "}
                            Login With Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;