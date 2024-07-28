import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="grid grid-cols-3 gap-4 items-center justify-center bg-white border-b-[1px] border-sky-600 shadow-xl">
                <h2 className="text-sm uppercase col-span-1 text-center">Fazlul Haque Bidhya Niketon</h2>
                <div className="flex flex-row text-xs uppercase col-span-1 items-center justify-center">
                    <NavLink to="/" className="py-4 text-center px-4  hover:bg-slate-200">Dashboard</NavLink>
                    <NavLink to="teacher" className="py-4  text-center px-4  hover:bg-slate-200">Teacher</NavLink>
                    <NavLink to="students" className="py-4  text-center px-4  hover:bg-slate-200">Students</NavLink>
                    <NavLink to="managements" className="py-4  text-center px-4  hover:bg-slate-200">Management</NavLink>
                </div>
                <div className="col-span-1 text-xs uppercase flex flex-row">
                    <h2 className=" text-center px-4">Username</h2>
                    <span className="e text-center px-4">Email</span>
                    <span className=" text-center px-4">Profile</span>
                </div>
            </div>
        </>
    );
}

export default Navbar;