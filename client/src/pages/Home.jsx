import { useEffect, useState } from "react";








const Home = () => {
    const [teacherInfo, setTeacherInfo] = useState([])
    const [tData, setTData] = useState([])
    const [search, setSearch] = useState()
    const [late, setLate] = useState()
    const [absent, setAbsent] = useState()
    const [collectSalary, setCollectSalary] = useState()
    const [netSalary, setNetSalary] = useState()

    const salarySubmit = (e) => {
        e.preventDefault()

        const lateCount = parseInt(late) * 100
        const absentCount = (parseInt(collectSalary) / 30) * parseInt(absent)
        const finalSalary = parseInt(collectSalary) - (lateCount + absentCount)
        setNetSalary(Math.ceil(finalSalary))

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setTData(search)
        teacherInfo.filter(data => {
            if (data.tId == search) {
                return data
            }
        }).map(item => {
            setCollectSalary(item.tSalary)
            setNetSalary(item.tSalary)
        })

    }





    useEffect(() => {
        fetch('http://localhost:5000/teacher')
            .then((res) => {
                return res.json()
            }).then(data => {
                setTeacherInfo(data)
            })
    }, [])
    return (
        <>
            <div className="w-full h-screen bg-gray-200 grid grid-cols-7 gap-2">
                <div className="col-span-1"></div>
                <div className="col-span-5 bg-white flex flex-col items-center justify-start pt-20">
                    <div className="w-11/12 py-4  border-[1px] border-sky-500">
                        <form onSubmit={handleSubmit}>
                            <div className="w-full">
                                <div className="grid grid-cols-6">
                                    <label className="col-span-2 text-end mx-4" htmlFor="search">Search TID</label>
                                    <select id="search" className="col-span-2 focus:outline-none bg-gray-100 border-[1px] border-lime-300 pl-20" type="text" onChange={(e) => {
                                        setSearch(e.target.value)
                                    }}>
                                        <option>Select One</option>
                                        {teacherInfo.map(data => {
                                            return (
                                                <option key={data._id}>{data.tId}</option>
                                            )
                                        })}
                                    </select>
                                    <div className="col-span-1 ml-4 block">
                                        <button className="py-2 px-8 bg-orange-600 text-white">Search</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <form onSubmit={salarySubmit} className="flex flex-col">
                            <div className="w-full mt-10 flex flex-col items-center justify-center">
                                {teacherInfo.filter(data => {
                                    if (data.tId == tData) {
                                        return data
                                    }
                                }).map(item => {
                                    return (

                                        <div key={item._id} className=" flex flex-col space-y-2">
                                            <div className="grid grid-cols-5">
                                                <label htmlFor="tId" className="col-span-2">TID</label>
                                                <span className="col-span-3">{item.tId}</span>
                                            </div>
                                            <div className="grid grid-cols-5">
                                                <label htmlFor="tId" className="col-span-2">Teacher's Name</label>
                                                <span className="col-span-3">{item.tName}</span>
                                            </div>
                                            <div className="grid grid-cols-5">
                                                <label htmlFor="tId" className="col-span-2">Designatin</label>
                                                <span className="col-span-3">{item.tDesignation}</span>
                                            </div>
                                            <div className="grid grid-cols-5">
                                                <label htmlFor="tId" className="col-span-2">Salary</label>
                                                <span className="col-span-3">{item.tSalary}</span>

                                            </div>
                                            <div className="grid grid-cols-5">
                                                <label htmlFor="tId" className="col-span-2">Late</label>
                                                <input type="text" className="col-span-2 bg-slate-300 border-[1px] border-black focus:outline-none px-4" onChange={(e) => { setLate(parseInt(e.target.value)) }} />
                                            </div>
                                            <div className="grid grid-cols-5">
                                                <label htmlFor="tId" className="col-span-2 ">Absent</label>
                                                <input type="text" className="col-span-2 bg-slate-300 border-[1px] border-black focus:outline-none px-4" onChange={(e) => { setAbsent(parseInt(e.target.value)) }} />
                                            </div>
                                            <div className="grid grid-cols-5">
                                                <label htmlFor="tId" className="col-span-2">Net Salary</label>
                                                <span className="col-span-2">{netSalary}</span>
                                            </div>
                                        </div>
                                    )
                                })}
                                <button className=" bg-green-500 text-white py-2 px-4 rounded-lg mt-10 mb-4">Calculate Salary</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-span-1"></div>
            </div>
        </>
    );
}

export default Home;