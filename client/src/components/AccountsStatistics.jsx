import { Link } from "react-router-dom";

const AccountsStatistics = ({ management, day, morning }) => {
    return (
        <>
            <div className="w-full flex flex-col items-center justify-center">
                <h2 className="bg-gradient-to-tr from-sky-500 to-sky-300 text-white w-full p-1 text-sm uppercase">Accounts</h2>
                <div className="w-full grid grid-cols-10 p-1 items-center justify-between gap-2">
                    <div className="col-span-1 flex flex-col w-full items-center justify-center p-1">
                        <div className="transition duration-700 group hover:rotate-180 w-24 h-24 rounded-xl bg-gradient-to-b from-cyan-300 to-cyan-900 flex flex-col items-center justify-center shadow-xl">
                            <h2 className="text-white w-full text-center  text-xs transition duration-700 group-hover:-rotate-180 ">Total Collection Today</h2>
                            <span className="text-white text-xs transition duration-700 group-hover:-rotate-180">{day}</span>
                        </div>
                    </div>
                    <div className="col-span-1 flex flex-col w-full items-center justify-center p-1">
                        <div className="transition duration-700 group hover:rotate-180 w-24 h-24 rounded-xl bg-gradient-to-b from-cyan-300 to-cyan-900 flex flex-col items-center justify-center shadow-xl">
                            <h2 className="w-full text-center text-white text-xs transition duration-700 group-hover:-rotate-180">Total Expance Today</h2>
                            <span className="text-white text-xs transition duration-700 group-hover:-rotate-180">{day}</span>
                        </div>
                    </div>
                    <div className="col-span-1 flex flex-col w-full items-center justify-center p-1">
                        <div className="transition duration-700 group hover:rotate-180 w-24 h-24 rounded-xl bg-gradient-to-l from-cyan-300 to-sky-600 flex flex-col items-center justify-center shadow-xl">
                            <h2 className="text-white text-xs transition duration-700 group-hover:-rotate-180">IOU Today</h2>
                            <span className="text-white text-xs transition duration-700 group-hover:-rotate-180">{morning}</span>
                        </div>
                    </div>
                    <div className="col-span-1 flex flex-col w-full items-center justify-center p-1">
                        <div className="transition duration-700 group hover:rotate-180 w-24 h-24 rounded-xl bg-gradient-to-t from-cyan-300 to-cyan-900  flex flex-col items-center justify-center shadow-xl">
                            <h2 className="text-white text-xs transition duration-700 group-hover:-rotate-180">Others</h2>
                            <span className="text-white text-xs transition duration-700 group-hover:-rotate-180">02</span>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center justify-center">
                    <div className="bg-gradient-to-tr from-violet-500 to-violet-400 text-white w-full  px-4 pr-0 text-sm uppercase flex flex-row items-center justify-between">
                        <h2 className="">Sells calculation</h2>
                        <Link to="newsheet" className="transition-all duration-700 px-4 py-1 bg-violet-400 text-sm shadow-xl  hover:bg-violet-700">Create Balance Sheets</Link>
                    </div>
                    <div className="w-full grid grid-cols-10 p-1 items-center justify-between gap-2">
                        <div className="col-span-1 flex flex-col w-full items-center justify-center p-1">
                            <div className="transition duration-700 group hover:rotate-180 w-24 h-24 rounded-xl bg-gradient-to-b from-cyan-300 to-cyan-900 flex flex-col items-center justify-center shadow-xl">
                                <h2 className="text-white text-xs transition duration-700 group-hover:-rotate-180 ">Dairy</h2>
                                <span className="text-white text-xs transition duration-700 group-hover:-rotate-180">Stock</span>
                                <span className="text-white text-xs transition duration-700 group-hover:-rotate-180">{day}</span>
                            </div>
                        </div>
                        <div className="col-span-1 flex flex-col w-full items-center justify-center p-1">
                            <div className="transition duration-700 group hover:rotate-180 w-24 h-24 rounded-xl bg-gradient-to-b from-cyan-300 to-cyan-900 flex flex-col items-center justify-center shadow-xl">
                                <h2 className="text-white text-xs transition duration-700 group-hover:-rotate-180">Pocket Batch</h2>
                                <span className="text-white text-xs transition duration-700 group-hover:-rotate-180">Stock</span>
                                <span className="text-white text-xs transition duration-700 group-hover:-rotate-180">{day}</span>
                            </div>
                        </div>
                        <div className="col-span-1 flex flex-col w-full items-center justify-center p-1">
                            <div className="transition duration-700 group hover:rotate-180 w-24 h-24 rounded-xl bg-gradient-to-l from-cyan-300 to-sky-600 flex flex-col items-center justify-center shadow-xl">
                                <h2 className="text-white text-xs transition duration-700 group-hover:-rotate-180">Sholder Batch</h2>
                                <span className="text-white text-xs transition duration-700 group-hover:-rotate-180">Stock</span>
                                <span className="text-white text-xs transition duration-700 group-hover:-rotate-180">{morning}</span>
                            </div>
                        </div>
                        <div className="col-span-1 flex flex-col w-full items-center justify-center p-1">
                            <div className="transition duration-700 group hover:rotate-180 w-24 h-24 rounded-xl bg-gradient-to-t from-cyan-300 to-cyan-900  flex flex-col items-center justify-center shadow-xl">
                                <h2 className="text-white text-xs transition duration-700 group-hover:-rotate-180">Others</h2>
                                <span className="text-white text-xs transition duration-700 group-hover:-rotate-180">02</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AccountsStatistics;