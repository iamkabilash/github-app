import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../Context/Context";

const Navbar = () => {

    const context = useContext(Context);

    return(
        <nav className="w-screen h-[50px] bg-green-200 flex flex-row items-center justify-between">
            <div className="ml-[50px] flex flex-row">
                <NavLink to={"/"}><h2 className="text-2xl font-bold">Github App</h2></NavLink>
            </div>
            <div className="flex flex-row gap-[30px] mr-[50px] font-semibold">
                <h4>{context.user?.email ? context.user.email : "" }</h4>
                {context.user ? (
                    <NavLink to={"/"}><h4>Logout</h4></NavLink>
                ) : (
                    <>
                        <NavLink to={"/signin"}><h4>Sign In</h4></NavLink>
                        <NavLink to={"/signup"}><h4>Sign Up</h4></NavLink>
                    </>
                )}
            </div>
        </nav>
    );
}

export default Navbar;