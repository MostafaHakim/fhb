const HomePersonnelCount = ({ management, day, morning }) => {
    return (
        <>
            <div className="w-full flex flex-col items-center justify-center mt-2">
                <h2 className="bg-gradient-to-tr from-sky-500 to-sky-300 text-white w-full p-1 text-sm uppercase">All Personnel</h2>
                <div className="w-full grid grid-cols-10 p-1 items-center justify-between gap-2">
                    <div className="col-span-1 flex flex-col w-full items-center justify-center p-1">
                        <div className="transition duration-700 group hover:rotate-180 w-24 h-24 rounded-full bg-gradient-to-r hover:bg-gradient-to-l from-cyan-300 to-sky-600 flex flex-col items-center justify-center shadow-xl">
                            <h2 className="text-white text-xs transition duration-700 group-hover:-rotate-180">Management</h2>
                            <span className="text-white text-xs transition duration-700 group-hover:-rotate-180">{management}</span>
                        </div>
                    </div>
                    <div className="col-span-1 flex flex-col w-full items-center justify-center p-1">
                        <div className="transition duration-700 group hover:rotate-180 w-24 h-24 rounded-full bg-gradient-to-b from-cyan-300 to-cyan-900 flex flex-col items-center justify-center shadow-xl">
                            <h2 className="text-white text-xs transition duration-700 group-hover:-rotate-180">Day</h2>
                            <span className="text-white text-xs transition duration-700 group-hover:-rotate-180">{day}</span>
                        </div>
                    </div>
                    <div className="col-span-1 flex flex-col w-full items-center justify-center p-1">
                        <div className="transition duration-700 group hover:rotate-180 w-24 h-24 rounded-full bg-gradient-to-l from-cyan-300 to-sky-600 flex flex-col items-center justify-center shadow-xl">
                            <h2 className="text-white text-xs transition duration-700 group-hover:-rotate-180">Morning</h2>
                            <span className="text-white text-xs transition duration-700 group-hover:-rotate-180">{morning}</span>
                        </div>
                    </div>
                    <div className="col-span-1 flex flex-col w-full items-center justify-center p-1">
                        <div className="transition duration-700 group hover:rotate-180 w-24 h-24 rounded-full bg-gradient-to-t from-cyan-300 to-cyan-900  flex flex-col items-center justify-center shadow-xl">
                            <h2 className="text-white text-xs transition duration-700 group-hover:-rotate-180">Others</h2>
                            <span className="text-white text-xs transition duration-700 group-hover:-rotate-180">02</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePersonnelCount;