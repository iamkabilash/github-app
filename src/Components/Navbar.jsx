import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="w-screen h-[50px] bg-green-200 flex flex-row items-center justify-between">
            <div className="ml-[50px] flex flex-row">
                <h2 className="text-2xl font-bold">Github App</h2>
            </div>
            <div className="flex flex-row gap-[30px] mr-[50px] font-semibold">
                <NavLink to={"/"}><h4>Home</h4></NavLink>
                <NavLink to={"/signin"}><h4>Sign In</h4></NavLink>
                <NavLink to={"/signup"}><h4>Sign Up</h4></NavLink>
            </div>
        </nav>
    );
}

export default Navbar;