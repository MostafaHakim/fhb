import { useEffect, useState } from "react";

const AdvancePaymentForm = () => {
    const [data, setData] = useState([])
    const [month, setMonth] = useState([])
    const [salary, setSalary] = useState([])

    // =========================Change Data=============

    const [atid, setAtid] = useState('')
    const [amonth, setAmonth] = useState('')
    const [newPaid, setNewPaid] = useState('')
    const [add, setAdd] = useState('')
    const [id, setId] = useState('')
    const [due, setDue] = useState('')
    // =========================Status Data=============
    const [success, setSuccess] = useState(false)



    // ============================================
    useEffect(() => {
        fetch('http://localhost:4000/teacher')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setData(data)

            })
        fetch('http://localhost:4000/month')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setMonth(data)

            })
        fetch('http://localhost:4000/salary')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setSalary(data)

            })

    }, [])
    useEffect(() => {
        salary.filter(item => {
            if (item.mName == amonth && item.tId == atid) {
                return item
            }
        }).map(item => {
            setNewPaid(item.tPaidAmount)
            setId(item._id)
            setDue(item.tDueAfterPayment)
        })
    }, [atid, amonth])

    const addPaid = parseInt(newPaid) + parseInt(add)
    const dueAmount = parseInt(due) - parseInt(add)

    const updateSalary = {
        id,
        tPaidAmount: addPaid,
        tDueAfterPayment: dueAmount

    }

    const handelSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:4000/salary', {
            method: "put",
            body: JSON.stringify(updateSalary),
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
                        <h2>Advance Payment Done</h2>
                    </>
                ) : (<div className="w-full">
                    <h2 className="w-full bg-sky-500 text-white uppercase text-center text-xl py-2 rounded-t-full shadow-xl">Advance Payment Slip for the month of January</h2>
                    <div className="w-2/3 m-auto grid grid-cols-2 items-center justify-center space-x-4 mt-2">
                        <div className="cols-span-1 grid grid-cols-3 gap-4 items-center justify-center px-8 py-2 bg-white rounded-full shadow-xl uppercase text-sm font-bold">
                            <label className="col-span-1">Select TID</label>
                            <select className="focus:outline-none col-span-2 border-[1px] border-slate-500 text-center rounded-full" onChange={(e) => { setAtid(e.target.value) }}>
                                <option>--Select One--</option>
                                {data.map((item, i) => { return <option key={i}>{item.tId}</option> })}
                            </select>
                        </div>
                        <div className="cols-span-1 grid grid-cols-3 gap-4 items-center justify-center px-8 py-2 bg-white rounded-full shadow-xl uppercase text-sm font-bold">
                            <label className="col-span-1">Select Month</label>
                            <select className="focus:outline-none col-span-2 border-[1px] border-slate-500 text-center rounded-full" onChange={(e) => { setAmonth(e.target.value) }}>
                                <option>--Select One--</option>
                                {month.map((item, i) => { return <option key={i}>{item.mName}</option> })}
                            </select>
                        </div>
                    </div>
                    <form className="w-full mt-8" onSubmit={handelSubmit}>
                        {salary.filter(item => {
                            if (item.mName == amonth && item.tId == atid) {
                                return item
                            }
                        }).map((item, i) => {
                            return (
                                <div className="w-2/3 bg-white flex flex-col items-center justify-center m-auto p-8" key={i}>
                                    <h2 className="w-full py-2 px-8 bg-rose-500 text-white text-center text-xl uppercase rounded-b-full shadow-md shadow-sky-300 mb-8">Salary Details</h2>
                                    <div className="w-2/3 grid grid-cols-3 border-[1px] border-slate-400 border-b-0">
                                        <label className="col-span-1 border-r-[1px] border-slate-400 px-8">TID</label>
                                        <span className="col-span-2 px-8">{item.tId}</span>
                                    </div>
                                    <div className="w-2/3 grid grid-cols-3 border-[1px] border-slate-400 border-b-0">
                                        <label className="col-span-1 border-r-[1px] border-slate-400 px-8">Name</label>
                                        <span className="col-span-2 px-8">{item.tName}</span>
                                    </div>
                                    <div className="w-2/3 grid grid-cols-3 border-[1px] border-slate-400 border-b-0">
                                        <label className="col-span-1 border-r-[1px] border-slate-400 px-8">Designation</label>
                                        <span className="col-span-2 px-8">{item.tDesignation}</span>
                                    </div>
                                    <div className="w-2/3 grid grid-cols-3 border-[1px] border-slate-400 border-b-0">
                                        <label className="col-span-1 border-r-[1px] border-slate-400 px-8">Total Salary</label>
                                        <span className="col-span-2 px-8">{item.tTotalAmount}</span>
                                    </div>
                                    <div className="w-2/3 grid grid-cols-3 border-[1px] border-slate-400 border-b-0">
                                        <label className="col-span-1 border-r-[1px] border-slate-400 px-8">Previous Paid Amount</label>
                                        <span className="col-span-2 px-8">{item.tPaidAmount}</span>
                                    </div>
                                    <div className="w-2/3 grid grid-cols-3 border-[1px] border-slate-400 border-b-0">
                                        <label className="col-span-1 border-r-[1px] border-slate-400 px-8">New Paid Amount</label>
                                        <input type="text" className="col-span-2 px-8 focus:outline-none" placeholder="--Please Enter New Amount--" onChange={(e) => { setAdd(e.target.value) }} />
                                    </div>
                                    <div className="w-2/3 grid grid-cols-3 border-[1px] border-slate-400 ">
                                        <label className="col-span-1 border-r-[1px] border-slate-400 px-8">Total Paid Amount</label>
                                        <span className="col-span-2 px-8">{addPaid ? addPaid : newPaid}</span>
                                    </div>
                                    <div className="w-full mt-4">
                                        <button className="transition-all duration-700 py-2 bg-orange-500 text-white w-full uppercase hover:bg-orange-600 hover:shadow-lg hover:shadow-rose-400 rounded-t-full">Submit</button>
                                    </div>
                                </div>
                            )
                        })}
                    </form>
                </div>)
            }

        </>
    );
}

export default AdvancePaymentForm;