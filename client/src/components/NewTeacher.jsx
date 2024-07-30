import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NewTeacher = () => {
    const [name, setName] = useState('')
    const [shift, setShift] = useState('')
    const [designation, setDesignation] = useState('')
    const [joiningDate, setJoiningDate] = useState('')
    const [salary, setSalary] = useState('')
    const [newTid, setNewTid] = useState()
    const [success, setSuccess] = useState(false)

    // ===================Fetch============
    useEffect(() => {
        fetch('http://localhost:4000/teacher')
            .then(res => {
                return res.json()
            })
            .then(data => {
                data.map(item => {
                    setNewTid(item.tId)
                })
            })

    }, [])

    const newTeacher = {
        tId: parseInt(newTid) ? parseInt(newTid) + 1 : 201,
        tShift: shift,
        tName: name,
        tDesignation: designation,
        tJoiningDate: joiningDate,
        tSalary: salary
    }
    const handelSubmit = (e) => {
        e.preventDefault()
        fetch('https://fhb-api.vercel.app/teacher', {
            method: "post",
            body: JSON.stringify(newTeacher),
            headers: {
                "Content-Type": "application/json"
            }
        })

        setSuccess(true)
    }
    return (
        <>
            {
                success ? (
                    <>
                        <div className="w-full flex flex-col items-center justify-center h-screen">
                            <div className="w-1/2 flex flex-col items-center justify-center bg-sky-500 text-white rounded-xl shadow-xl p-4">
                                <h2 className="py-4 px-2 text-2xl font-bold">{`New User Created`}</h2>
                                <Link to='/teacher' className="transition-all duration-700 px-4 py-2 bg-violet-500 hover:scale-x-150">Back</Link>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="w-full">
                            <div className="w-2/3 m-auto my-2 flex flex-col bg-white">
                                <h2 className="py-1 text-sm text-white px-10 bg-sky-500 rounded-b-full">New Teacher Registration Form</h2>
                                <form onSubmit={handelSubmit} className="w-full flex flex-col space-y-2">
                                   <div className="w-full p-2 flex flex-col space-y-2">
                                        <div className="w-full grid grid-cols-4 gap-2">
                                                <label htmlFor="name" className="col-span-1 capitalize ">TID</label>
                                                <span type="text" className="col-span-2 border-[1px] border-slate-300 focus:outline-none p-1">{parseInt(newTid) ? parseInt(newTid) + 1 : 201}</span>
                                                <span>Massage</span>
                                            </div>
                                            <div className="w-full grid grid-cols-4 gap-2">
                                                <label htmlFor="name" className="col-span-1 capitalize ">Shift</label>
                                                <select type="text" className="col-span-2 border-[1px] border-slate-300 focus:outline-none p-1" onChange={(e) => { setShift(e.target.value) }}>
                                                    <option >-- Select One --</option>
                                                    <option >Management</option>
                                                    <option >Day</option>
                                                    <option >Morning</option>
                                                </select>
                                                <span>Massage</span>
                                            </div>
                                            <div className="w-full grid grid-cols-4 gap-2">
                                                <label htmlFor="name" className="col-span-1 capitalize ">name</label>
                                                <input type="text" className="col-span-2 border-[1px] border-slate-300 focus:outline-none p-1" onChange={(e) => { setName(e.target.value) }} />
                                                <span>Massage</span>
                                            </div>
                                            <div className="w-full grid grid-cols-4 gap-4">
                                                <label htmlFor="name" className="col-span-1 capitalize ">Designation</label>
                                                <input type="text" className="col-span-2 border-[1px] border-slate-300 focus:outline-none p-1" onChange={(e) => { setDesignation(e.target.value) }} />
                                                <span>Massage</span>
                                            </div>
                                            <div className="w-full grid grid-cols-4 gap-4">
                                                <label htmlFor="name" className="col-span-1 capitalize ">Joining Date</label>
                                                <input type="date" className="col-span-2 border-[1px] border-slate-300 focus:outline-none p-1" onChange={(e) => { setJoiningDate(e.target.value) }} />
                                                <span>Massage</span>
                                            </div>
                                            <div className="w-full grid grid-cols-4 gap-4">
                                                <label htmlFor="name" className="col-span-1 capitalize">salary</label>
                                                <input type="text" className="col-span-2 border-[1px] border-slate-300 focus:outline-none p-1" onChange={(e) => { setSalary(e.target.value) }} />
                                                <span>Massage</span>
                                            </div>
                                   </div>
                                    <button className="transition duration-500 bg-orange-500 text-white text-sm hover:bg-orange-700 rounded-t-full p-1">Create</button>
                                </form>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    );
}

export default NewTeacher;