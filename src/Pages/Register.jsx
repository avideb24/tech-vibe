import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Navbar from "../components/Navbar";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";


const Register = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const { createUser, setUserName, setUserPhoto } = useContext(AuthContext);

    // set username
    const handleUserName = e => {
        const name = e.target.value;
        setUserName(name)
    }

    // set user photo
    const handleUserPhoto = e => {
        const photo = e.target.value;
        setUserPhoto(photo)
    }

    // registration
    const handleRegister = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
    
        if (!/[A-Z]/.test(password)) {
            Swal.fire({
                icon: 'error',
                text: 'Password Must Have One Uppercase!',
            })
            return
        }
        const specialCharacterRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
        if (!specialCharacterRegex.test(password)) {
            Swal.fire({
                icon: 'error',
                text: 'Password Must Have One Special Character!',
            })
            return
        }
        if (password.length <= 6) {
            Swal.fire({
                icon: 'error',
                text: 'Password Must Be 6 Character Longer',
            })
            return
        }

        createUser(email, password)
            .then(res => {
                console.log(res.user)
                Swal.fire({
                    icon: 'success',
                    text: 'User Created Successfully!',
                })
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Invalid Registration Credentials!',
                })
                console.error(error)
            })
    }

    return (
        <div>
            <Helmet>
                <title>Register</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="py-10 px-5">
                <div className=" max-w-xl mx-auto bg-[#132151]  p-10 rounded-md text-white">
                    <h2 className="text-center sm:text-3xl text-2xl font-bold py-9 border-b-2 text-yellow-500 border-b-yellow-500">Register your account</h2>
                    <form className="mt-10 text-blue-950" onSubmit={handleRegister}>
                        <input onChange={handleUserName} className="w-full border-2 bg-white border-white p-2 rounded-md" type="text" name="name" required placeholder="Enter your name" />
                        <input onChange={handleUserPhoto} className="w-full border-2 bg-white border-white p-2 rounded-md my-4" type="text" name="photo" required placeholder="Enter your photo URL" />
                        <input className="w-full border-2 border-white p-2 bg-white rounded-md" type="email" name="email" required placeholder="Enter your email address" />
                        <input className="w-full border-2 border-white bg-white p-2 my-4 rounded-md" type="password" name="password" required placeholder="Enter your password" />
                        <input type="submit" className="w-full bg-yellow-500 text-[#08133a] font-bold py-2 rounded-md cursor-pointer" value="Register" />
                    </form>
                    <p className="text-center mt-6 sm:text-md text-sm">Already Have An Account ? <Link className="font-bold text-blue-500" to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;