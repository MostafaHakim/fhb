import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'


const SalaryCalculate = () => {
    const [teacher, setTeacher] = useState([])
    // ================New Salary==============


    useEffect(() => {
        fetch('http://localhost:4000/teacher')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setTeacher(data)
            })
    }, [])

    return (
        <>
            <div className="w-full">
                <div className="w-2/3 m-auto py-2 my-20 flex flex-col">
                    <h2 className="py-6 text-2xl">Select Teacher for Create new Salary</h2>
                    <div className="w-full flex flex-col shadow-xl">
                        <div className="w-full px-20 grid grid-cols-9 text-sm py-2 text-white uppercase bg-violet-500">
                            <div className="col-span-1">Ser No</div>
                            <div className="col-span-1">tid</div>
                            <div className="col-span-1">Shift</div>
                            <div className="col-span-2">name</div>
                            <div className="col-span-2">designation</div>
                            <div className="col-span-2"></div>
                        </div>
                        {teacher.map((item, i) => {
                            return (

                                <div className={`w-full px-20 grid grid-cols-9 text-sm py-2 items-center justify-center  uppercase ${item.tId % 2 == 0 ? 'bg-slate-300' : 'bg-white'} `} key={i}>
                                    <div className="col-span-1">{i + 1}</div>
                                    <div className="col-span-1">{item.tId}</div>
                                    <div className="col-span-1">{item.tShift}</div>
                                    <div className="col-span-2">{item.tName}</div>
                                    <div className="col-span-2">{item.tDesignation}</div>
                                    <div className="col-span-2">
                                        <Link to={`${item.tId}`} className="px-2 py-1 bg-green-500 text-white" >Create Salary</Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default SalaryCalculate;