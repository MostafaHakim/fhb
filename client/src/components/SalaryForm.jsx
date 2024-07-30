import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SalaryFrom = () => {
    const { tId } = useParams()
    const [teachter, setTeacher] = useState([])
    const [month, setMonth] = useState([])



    // ====================================
    const [mName, setMName] = useState('')
    const [tName, setTName] = useState('')
    const [tShift, setTShift] = useState('')
    const [tJoiningDate, setTJoiningDate] = useState('')
    const [tDesignation, setTDesignation] = useState('')
    const [tSalary, setTSalary] = useState('')
    const [tLate, setTLate] = useState(0)
    const [tAbsent, setTAbsent] = useState(0)
    const [tInOutPanch, setTInOutPanch] = useState(0)
    const [tDiduction, setTDiduction] = useState('')
    const [tPreviousDue, setTPreviousDue] = useState(0)
    const [tTotalAmount, setTTotalAmount] = useState('')
    const [tPaidAmount, setTPaidAmount] = useState(0)
    const [tDueAfterPayment, setTDueAfterPayment] = useState('')
    // ==================================================================

    const diduction = Math.ceil(((parseInt(tLate) >= 2 ? parseInt(tLate) * ((tShift == 'Day') ? 100 : (tShift == "Management") ? 200 : 50) : 0) + ((tSalary / 30) * parseInt(tAbsent))))
    const totalAmount = (parseInt(tSalary) + parseInt(tPreviousDue)) - parseInt(tDiduction)
    const dueAfterPayment = parseInt(totalAmount) - parseInt(tPaidAmount)

    // ================================================================
    // =============verified Block==================================
    // ===============================================================
    const [auth, setAuth] = useState(true)
    const [success, setSuccess] = useState(false)
    const [load, setLoad] = useState(false)
    const [verify, setVerify] = useState([])
    // ================================================================
    // ===========================================================
    // ===============================================================


    useEffect(() => {
        fetch('https://fhb-api.vercel.app/teacher')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setTeacher(data)
            })
        teachter.filter(item => {
            if (item.tId == tId) {
                return item
            }
        }).map(item => {
            setTName(item.tName)
            setTShift(item.tShift)
            setTJoiningDate(item.tJoiningDate)
            setTDesignation(item.tDesignation)
            setTSalary(item.tSalary)

        })
    }, [tAbsent, tLate, mName])




    useEffect(() => {
        fetch('https://fhb-api.vercel.app/salary')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setVerify(data)
                data ? setLoad(true) : setLoad(false)
            })
        verify.filter(item => {
            if (item.tId == tId) {
                return item
            }

        }).map(item => {
            item.mName == mName ? setAuth(false) : setAuth(true)
        })
    }, [mName,])
    useEffect(() => {
        fetch('https://fhb-api.vercel.app/month')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setMonth(data)
            })
        setTDiduction(diduction)
        setTTotalAmount(totalAmount)
        setTDueAfterPayment(dueAfterPayment)
    }, [diduction, totalAmount, dueAfterPayment, mName])
    const newSalary = {
        mName,
        tId,
        tName,
        tJoiningDate,
        tDesignation,
        tShift,
        tSalary,
        tLate,
        tAbsent,
        tInOutPanch,
        tDiduction,
        tPreviousDue,
        tTotalAmount,
        tPaidAmount,
        tDueAfterPayment
    }
    const handelSubmit = async (e) => {
        e.preventDefault()
        auth ? await fetch('https://fhb-api.vercel.app/salary', {
            method: 'post',
            body: JSON.stringify(newSalary),
            headers: {
                "Content-Type": "application/json"
            }
        }) : alert("Salary Voucher Already Created")

        setSuccess(true)
    }
    return (
        <div className="w-full flex flex-col">
            <div className="w-2/3 m-auto mt-2 bg-white">
                <h2 className="py-1 text-sm text-white px-2 bg-violet-500 mb-2">Salary Calculation Form</h2>
                {success ? (
                    <>
                        <h2>Salary Voucher Success fully created</h2>
                        <button> Back to Home</button>
                    </>
                ) : (
                    <>
                        {
                            !load ? ("Loading...") : (
                                <form className="w-full  py-1 flex flex-col space-y-2" onSubmit={handelSubmit}>
                                    {
                                        teachter.filter(item => {
                                            if (item.tId == tId) {
                                                return item
                                            }
                                        }).map((item, i) => {
                                            return (
                                                <div className="w-full flex flex-col">
                                                    <div className="w-full flex flex-col px-4">
                                                        <div className="flex flex-col space-y-2 w-full" key={i}>
                                                            <div className="w-full grid grid-cols-4 gap-2 text-xs">
                                                                <label htmlFor="name" className="col-span-1  capitalize ">Month Name</label>
                                                                <select className="col-span-2 text-xs border-[1px] border-slate-300 focus:outline-none p-1" onChange={(e) => { setMName(e.target.value) }}>
                                                                    <option>--Select One--</option>
                                                                    {month.map((item, i) => {
                                                                        return (
                                                                            <option key={i}>{item.mName}</option>
                                                                        )
                                                                    })}
                                                                </select>
                                                                <span>Massage</span>
                                                            </div>
                                                            <div className="w-full grid grid-cols-4 gap-2 text-xs">
                                                                <label htmlFor="name" className="col-span-1 capitalize ">TID</label>
                                                                <span className="col-span-2 border-[1px] border-slate-300 focus:outline-none p-1" >{item.tId}</span>
                                                                <span>Massage</span>
                                                            </div>
                                                            <div className="w-full grid grid-cols-4 gap-2 text-xs">
                                                                <label htmlFor="name" className="col-span-1 capitalize ">name</label>
                                                                <span className="col-span-2 border-[1px] border-slate-300 focus:outline-none p-1" >{item.tName}</span>
                                                                <span>Massage</span>
                                                            </div>
                                                            <div className="w-full grid grid-cols-4 gap-2 text-xs">
                                                                <label htmlFor="name" className="col-span-1 capitalize ">Designation</label>
                                                                <span className="col-span-2 border-[1px] border-slate-300 focus:outline-none p-1" >{item.tDesignation}</span>
                                                                <span>Massage</span>
                                                            </div>
                                                            <div className="w-full grid grid-cols-4 gap-2 text-xs">
                                                                <label htmlFor="name" className="col-span-1 capitalize ">Shift</label>
                                                                <span className="col-span-2 border-[1px] border-slate-300 focus:outline-none p-1" >{item.tShift}</span>
                                                                <span>Massage</span>
                                                            </div>
                                                            <div className="w-full grid grid-cols-4 gap-2 text-xs">
                                                                <label htmlFor="name" className="col-span-1 capitalize ">Joining Date</label>
                                                                <span className="col-span-2 border-[1px] border-slate-300 focus:outline-none p-1">{item.tJoiningDate}</span>
                                                                <span>Massage</span>
                                                            </div>
                                                            <div className="w-full grid grid-cols-4 gap-2 text-xs">
                                                                <label htmlFor="name" className="col-span-1 capitalize">Salary</label>
                                                                <span className="col-span-2 border-[1px] border-slate-300 focus:outline-none p-1">{item.tSalary}</span>
                                                                <span>Massage</span>
                                                            </div>
                                                            <div className="w-full grid grid-cols-4 gap-2 text-xs">
                                                                <label htmlFor="name" className="col-span-1 capitalize">Late</label>
                                                                <input className="col-span-2 border-[1px] border-slate-300 focus:outline-none p-1" onChange={(e) => { setTLate(e.target.value) }} />
                                                                <span>Massage</span>
                                                            </div>
                                                            <div className="w-full grid grid-cols-4 gap-2 text-xs">
                                                                <label htmlFor="name" className="col-span-1 capitalize">Absent</label>
                                                                <input className="col-span-2 border-[1px] border-slate-300 focus:outline-none p-1" onChange={(e) => { setTAbsent(e.target.value) }} />
                                                                <span>Massage</span>
                                                            </div>
                                                            <div className="w-full grid grid-cols-4 gap-2 text-xs">
                                                                <label htmlFor="name" className="col-span-1 capitalize">In Panch or Out Panch</label>
                                                                <input className="col-span-2 border-[1px] border-slate-300 focus:outline-none p-1" value={tInOutPanch ? tInOutPanch : 0} onChange={(e) => { setTInOutPanch(e.target.value) }} />
                                                                <span>Massage</span>
                                                            </div>
                                                            <div className="w-full grid grid-cols-4 gap-2 text-xs">
                                                                <label htmlFor="name" className="col-span-1 capitalize">Diduction</label>
                                                                <input className="col-span-2 border-[1px] border-slate-300 focus:outline-none p-1" value={diduction ? diduction : 0} readOnly />
                                                                <span>Massage</span>
                                                            </div>
                                                            <div className="w-full grid grid-cols-4 gap-2 text-xs">
                                                                <label htmlFor="name" className="col-span-1 capitalize">Previous Due</label>
                                                                <input className="col-span-2 border-[1px] border-slate-300 focus:outline-none p-1" value={tPreviousDue} readOnly />
                                                                <span>Massage</span>
                                                            </div>
                                                            <div className="w-full grid grid-cols-4 gap-2 text-xs">
                                                                <label htmlFor="name" className="col-span-1 capitalize">Total Amount</label>
                                                                <input className="col-span-2 border-[1px] border-slate-300 focus:outline-none p-1" value={totalAmount ? totalAmount : 0} readOnly />
                                                                <span>Massage</span>
                                                            </div>
                                                            <div className="w-full grid grid-cols-4 gap-2 text-xs">
                                                                <label htmlFor="name" className="col-span-1 capitalize">Paid Amount</label>
                                                                <input className="col-span-2 border-[1px] border-slate-300 focus:outline-none p-1" value={tPaidAmount} onChange={(e) => { setTPaidAmount(e.target.value) }} />
                                                                <span>Massage</span>
                                                            </div>
                                                            <div className="w-full grid grid-cols-4 gap-2 text-xs">
                                                                <label htmlFor="name" className="col-span-1 capitalize">Due After Payment</label>
                                                                <input className="col-span-2 border-[1px] border-slate-300 focus:outline-none p-1" value={dueAfterPayment ? dueAfterPayment : 0} readOnly />
                                                                <span>Massage</span>
                                                            </div>
                                                        
                                                        </div>
                                                    </div>
                                                    <button className="w-full transition duration-500 bg-orange-500 text-white py-1 hover:bg-orange-700 text-sm mt-2">Create</button>
                                                </div>
                                            )
                                        })
                                    }
                                </form>
                            )
                        }

                    </>
                )}


            </div>
        </div>
    );
}

export default SalaryFrom;