import { useContext, useState } from "react";
import { Context } from "../Context/Context";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../App";
import { NavLink, useNavigate } from "react-router-dom";

const SignIn = () => {

    const context = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const auth = getAuth(app);

    const handleSignUp = async () => {
        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            // console.log(userCredential);
            context.setUser({email: userCredential.user.email, uid: userCredential.user.uid});
            // ...
            navigate("/");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(`${errorCode}: ${errorMessage}`);
            // ..
        });
    
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleSignUp()
    }

    return(
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign In</h1>
                    <input 
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />
                    <input 
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
                    <button
                        type="submit"
                        onClick={(e) => handleFormSubmit(e)}
                        className="w-full text-center py-3 rounded bg-green-300 hover:bg-green-500 text-black hover:bg-green-dark focus:outline-none my-1"
                    >SignIn</button>
                </div>
                <div className="text-grey-dark mt-6 flex flex-row items-center">
                    <p>Don't have an account?</p>
                    <span>&nbsp;</span>
                    <NavLink to={"/signup"}><p className="no-underline border-b border-blue text-sky-800 font-semibold">Sign Up</p></NavLink>
                </div>
            </div>
        </div>
    );
}

export default SignIn;