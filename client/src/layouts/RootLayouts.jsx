import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayouts = () => {
    return (
        <>
            <div className="w-full m-auto">
                <div className="w-full m-auto">
                    <Navbar />
                    <main className="w-full">
                        <Outlet />
                    </main>
                </div>
            </div>

        </>
    );
}

export default RootLayouts;