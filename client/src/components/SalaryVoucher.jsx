import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import ReactToPrint from 'react-to-print';
import logo from '../img/logo.png'

const SalaryVoucher = () => {
    const { tId, month } = useParams()
    const componentRef=useRef()
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://fhb-api.vercel.app/salary')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setData(data)
            })
    }, [])
    return (
        <>
            <div className="w-full flex flex-col items-center justify-center">
                <div className="w-11/12 p-4 bg-white mb-4 m-10"  ref={componentRef}>
                    {data.filter((item) => {
                        if (item.mName == month && item.tId == tId) {
                            return item
                        }
                    }
                    ).map((item, i) => {
                        return (
                            <>
                                <div className="w-full border-[1px] border-slate-500" key={i}>
                                    <div className="flex flex-col items-center justify-center border-b-[1px] border-slate-500">
                                        <div className="flex flex-row w-full items-center justify-center space-x-4">
                                            <img className="w-16 p-1" src={logo} alt="FHB" />
                                            <div className=" flex flex-col items-center justify-center">
                                                <h2 className="uppercase text-xl font-bold pt-4">Fazlul Haque Bidhya Niketon</h2>
                                                <span className="text-md uppercase">{`Voucher For the month of ${item.mName}`}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* ======================block=============================== */}
                                    <div className="w-full flex flex-row items-center justify-evenly border-b-[1px] border-slate-500 px-[4px]">
                                        <div className="w-full grid grid-cols-2 items-center justify-between">
                                            <label className="col-span-1 border-r-[1px] border-slate-500 px-[4px]">TID</label>
                                            <h2 className="col-span-1 border-r-[1px] border-slate-500 px-[4px]">{item.tId}</h2>
                                        </div>
                                        <div className="w-full grid grid-cols-2 items-center justify-between">
                                            <label className="col-span-1 border-r-[1px] border-slate-500 px-[4px]">Shift</label>
                                            <h2 className="col-span-1 px-[4px]">{item.tShift}</h2>
                                        </div>
                                    </div>
                                    {/* ============================block=========================== */}
                                    <div className="w-full flex flex-row items-center justify-evenly border-b-[1px] border-slate-500 px-[4px]">
                                        <div className="w-full grid grid-cols-2 items-center justify-between">
                                            <label className="col-span-1 border-r-[1px] border-slate-500 px-[4px]">Name</label>
                                            <h2 className="col-span-1 border-r-[1px] border-slate-500 px-[4px]">{item.tName}</h2>
                                        </div>
                                        <div className="w-full grid grid-cols-2 items-center justify-between">
                                            <label className="col-span-1 border-r-[1px] border-slate-500 px-[4px]">Designation</label>
                                            <h2 className="col-span-1 px-[4px]">{item.tDesignation}</h2>
                                        </div>
                                    </div>
                                    {/* ============================block=========================== */}
                                    <div className="w-full flex flex-row items-center justify-evenly border-b-[1px] border-slate-500 px-[4px]">
                                        <div className="w-full grid grid-cols-2 items-center justify-between">
                                            <label className="col-span-1 border-r-[1px] border-slate-500 px-[4px]">Joining Date</label>
                                            <h2 className="col-span-1 border-r-[1px] border-slate-500 px-[4px]">{item.tJoiningDate}</h2>
                                        </div>
                                        <div className="w-full grid grid-cols-2 items-center justify-between">
                                            <label className="col-span-1 border-r-[1px] border-slate-500 px-[4px]">Salary</label>
                                            <h2 className="col-span-1 px-[4px]">{item.tSalary}</h2>
                                        </div>
                                    </div>
                                    {/* ============================block=========================== */}
                                    <div className="w-full flex flex-row items-center justify-evenly border-b-[1px] border-slate-500 px-[4px]">
                                        <div className="w-full grid grid-cols-2 items-center justify-between">
                                            <label className="col-span-1 border-r-[1px] border-slate-500 px-[4px]">Absent</label>
                                            <h2 className="col-span-1 border-r-[1px] border-slate-500 px-[4px]">{item.tAbsent}</h2>
                                        </div>
                                        <div className="w-full grid grid-cols-2 items-center justify-between">
                                            <label className="col-span-1 border-r-[1px] border-slate-500 px-[4px]">Late</label>
                                            <h2 className="col-span-1 px-[4px]">{item.tLate}</h2>
                                        </div>
                                    </div>
                                    {/* ============================block=========================== */}
                                    <div className="w-full flex flex-row items-center justify-evenly border-b-[1px] border-slate-500 px-[4px]">
                                        <div className="w-full grid grid-cols-2 items-center justify-between">
                                            <label className="col-span-1 border-r-[1px] border-slate-500 px-[4px]">IN/Out Panch</label>
                                            <h2 className="col-span-1 border-r-[1px] border-slate-500 px-[4px]">{item.tInOutPanch}</h2>
                                        </div>
                                        <div className="w-full grid grid-cols-2 items-center justify-between">
                                            <label className="col-span-1 border-r-[1px] border-slate-500 px-[4px]">Diduction</label>
                                            <h2 className="col-span-1 px-[4px]">{item.tDiduction}</h2>
                                        </div>
                                    </div>
                                    {/* ============================block=========================== */}
                                    <div className="w-full flex flex-row items-center justify-evenly border-b-[1px] border-slate-500 px-[4px]">
                                        <div className="w-full grid grid-cols-2 items-center justify-between">
                                            <label className="col-span-1 border-r-[1px] border-slate-500 px-[4px]">Previous Due</label>
                                            <h2 className="col-span-1 border-r-[1px] border-slate-500 px-[4px]">{item.tPreviousDue}</h2>
                                        </div>
                                        <div className="w-full grid grid-cols-2 items-center justify-between">
                                            <label className="col-span-1 border-r-[1px] border-slate-500 px-[4px]">Paid Amount</label>
                                            <h2 className="col-span-1 px-[4px]">{item.tPaidAmount}</h2>
                                        </div>
                                    </div>
                                    {/* ============================block=========================== */}
                                    <div className="w-full flex flex-row items-center justify-evenly border-b-[1px] border-slate-500 px-[4px]">
                                        <div className="w-full grid grid-cols-2 items-center justify-between">
                                            <label className="col-span-1 border-r-[1px] border-slate-500 px-[4px]">Total Amount</label>
                                            <h2 className="col-span-1 border-r-[1px] border-slate-500 px-[4px]">{item.tTotalAmount}</h2>
                                        </div>
                                        <div className="w-full grid grid-cols-2 items-center justify-between">
                                            <label className="col-span-1 border-r-[1px] border-slate-500 px-[4px]">Due After Payment</label>
                                            <h2 className="col-span-1 px-[4px]">{item.tDueAfterPayment}</h2>
                                        </div>
                                    </div>
                                    <div className=" border-b-[1px] border-slate-500 px-[4px]">
                                        <h2 className="px-2">{`In Words:`}</h2>
                                    </div>
                                    <div className="flex flex-row w-full px-8 items-center justify-between mt-20">
                                        <div className="border-t-[1px] border-slate-500 px-4">Accounts</div>
                                        <div className="border-t-[1px] border-slate-500 px-4">Admin</div>
                                        <div className="border-t-[1px] border-slate-500 px-4">Head Mistress</div>
                                        <div className="border-t-[1px] border-slate-500 px-4">Chairman</div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
                <div className="flex flex-row items-center justify-center space-x-4 mt-4">
                    <ReactToPrint
                            trigger={() => <button className="capitalize  hover:bg-green-600 text-md px-8 py-2 bg-green-500 text-white shadow-xl">Print</button>}
                            content={() => componentRef.current}
      />
                </div>
            </div>
        </>
    );
}

export default SalaryVoucher;