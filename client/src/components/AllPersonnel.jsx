import { useEffect, useState } from "react";

const AllPersonnel = () => {
    const [data, setData] = useState([])
    const [tId, setTId] = useState('')


    useEffect(() => {
        fetch('http://localhost:4000/teacher')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setData(data)
            })
    }, [])

    const handelDelete = (e) => {
        e.preventDefault()
        fetch('http://localhost:4000/teacher', {
            method: "delete",
            body: JSON.stringify({ tId }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        fetch('http://localhost:4000/salary', {
            method: "delete",
            body: JSON.stringify({ tId }),
            headers: {
                "Content-Type": "application/json"
            }
        })
    }


    return (
        <>
            <div className="w-full">
                <div className="w-2/3 bg-white m-auto pb-8 border-[1px] border-sky-400">
                    <h2 className="bg-sky-500 text-white px-8 py-2 text-lg uppercase">Management Personnel</h2>
                    <div className="w-11/12 m-auto grid grid-cols-6 px-8 bg-violet-500 text-white mt-4 ">
                        <div className="col-span-1">TID</div>
                        <div className="col-span-2">Name</div>
                        <div className="col-span-1">Degicnation</div>
                        <div className="col-span-1 text-center">Action</div>
                        <div className="col-span-1 text-center"></div>
                    </div>
                    {
                        data.filter(item => {
                            if (item.tShift == "Management") {
                                return item
                            }
                        }).map((item, i) => {
                            return (
                                <div className={`w-11/12 m-auto grid grid-cols-6 px-8 ${item.tId % 2 == 0 ? "bg-white" : "bg-slate-300"}`} key={i}>
                                    <div className={`col-span-1`}>{item.tId}</div>
                                    <div className="col-span-2">{item.tName}</div>
                                    <div className="col-span-1">{item.tDesignation}</div>
                                    <button className="col-span-1 hover:text-red-500" onClick={(e) => {
                                        e.preventDefault()
                                        setTId(item.tId)
                                    }}>Select to Delete</button>
                                    <button className={`col-span-1 hover:text-red-600`} onClick={handelDelete}>Confirm</button>
                                </div>
                            )
                        })
                    }

                </div>
                <div className="w-2/3 bg-white m-auto mt-8 pb-8 border-[1px] border-sky-400">
                    <h2 className="bg-sky-500 text-white px-8 py-2 text-lg uppercase">Day Shift Personnel</h2>
                    <div className="w-11/12 m-auto grid grid-cols-6 px-8 bg-violet-500 text-white mt-4">
                        <div className="col-span-1">TID</div>
                        <div className="col-span-2">Name</div>
                        <div className="col-span-1">Degicnation</div>
                        <div className="col-span-1 text-center">Action</div>
                        <div className="col-span-1 text-center"></div>
                    </div>
                    {
                        data.filter(item => {
                            if (item.tShift == "Day") {
                                return item
                            }
                        }).map((item, i) => {
                            return (
                                <div className={`w-11/12   m-auto grid grid-cols-6 px-8 ${item.tId % 2 == 0 ? "bg-white" : "bg-slate-300"}`} key={i}>
                                    <div className={`col-span-1`}>{item.tId}</div>
                                    <div className="col-span-2">{item.tName}</div>
                                    <div className="col-span-1">{item.tDesignation}</div>
                                    <button className="col-span-1 hover:text-red-500" onClick={(e) => {
                                        e.preventDefault()
                                        setTId(item.tId)
                                    }}>Select to Delete</button>
                                    <button className={`col-span-1 hover:text-red-600`} onClick={handelDelete}>Confirm</button>
                                </div>
                            )
                        })
                    }

                </div>
                <div className="w-2/3 bg-white m-auto mt-8 pb-8 border-[1px] border-sky-400">
                    <h2 className="bg-sky-500 text-white px-8 py-2 text-lg uppercase">Morning Shift Personnel</h2>
                    <div className="w-11/12 m-auto grid grid-cols-6 px-8 bg-violet-500 text-white mt-4">
                        <div className="col-span-1">TID</div>
                        <div className="col-span-2">Name</div>
                        <div className="col-span-1">Degicnation</div>
                        <div className="col-span-1 text-center">Action</div>
                        <div className="col-span-1 text-center"></div>
                    </div>
                    {
                        data.filter(item => {
                            if (item.tShift == "Morning") {
                                return item
                            }
                        }).map((item, i) => {
                            return (
                                <div className={`w-11/12   m-auto grid grid-cols-6 px-8 ${item.tId % 2 == 0 ? "bg-white" : "bg-slate-300"}`} key={i}>
                                    <div className={`col-span-1`}>{item.tId}</div>
                                    <div className="col-span-2">{item.tName}</div>
                                    <div className="col-span-1">{item.tDesignation}</div>
                                    <button className="col-span-1 hover:text-red-500" onClick={(e) => {
                                        e.preventDefault()
                                        setTId(item.tId)
                                    }}>Select to Delete</button>
                                    <button className={`col-span-1 hover:text-red-600`} onClick={handelDelete}>Confirm</button>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </>
    );
}

export default AllPersonnel;