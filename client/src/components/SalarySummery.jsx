import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useReactToPrint } from 'react-to-print';
import AllSalaryVoucher from "./AllSalaryVoucher";
import LoderSpinner from "./LoderSpinner";

const SalarySamary = ({ salary, month }) => {
    const [salaryMonth, setSalaryMonth] = useState('')
    const componentRef = useRef()
    const voucherRef = useRef()

    const handlePrint = useReactToPrint({
        content: () => voucherRef.current,

    });
    const handleSinglePrint = useReactToPrint({
        content: () => componentRef.current,

    });




    return (
        <>
            <div className="w-full p-2">
                <div className="w-full flex flex-row items-center justify-center my-4 space-x-4 border-2 border-slate-200  text-sm bg-white">
                    <label htmlFor="">Select Month</label>
                    <select className="focus:outline-none px-8" onChange={(e) => { setSalaryMonth(e.target.value) }}>
                        <option>--Select One--</option>
                        {month.map((item, i) => {
                            return (
                                <>
                                    {month ? <option key={i}>{item.mName}</option> : <LoderSpinner />}
                                </>
                            )
                        })}
                    </select>
                </div>
                <div className="flex flex-row items-center space-x-4">
                    <button className="capitalize  hover:bg-green-600 text-md px-8 py-[2px] bg-green-500 text-white shadow-xl rounded-full" onClick={handleSinglePrint}>Print</button>
                    <button className="capitalize  hover:bg-orange-600 text-md px-8 py-[2px] bg-orange-500 text-white shadow-xl rounded-full" onClick={handlePrint}>Print All voucher</button>
                </div>
                <div className="w-full" ref={componentRef}>
                    <div className="w-full flex flex-col shadow-xl uppercase bg-gradient-to-tr from-sky-500 to-sky-100 text-white rounded-xl mt-4">
                        <h2 className="w-full text-center uppercase text-sm px-8 py-1 ">{`Salary Samary For the month of ${salaryMonth}`}</h2>
                    </div>
                    <div className="w-full px-2 py-4 ">
                        <table className="table-auto border-collapse border border-slate-400 w-full">
                            <thead className="capitalize">
                                <tr className="text-[10px]">
                                    <th className="border-collapse border border-slate-400  px-2 bg-gradient-to-tr from-violet-500 to-violet-400 text-white">SL</th>
                                    <th className="border-collapse border border-slate-400  px-2 bg-gradient-to-tr from-violet-500 to-violet-400 text-white">TID</th>
                                    <th className="border-collapse border border-slate-400  px-2 bg-gradient-to-tr from-violet-500 to-violet-400 text-white">Shift</th>
                                    <th className="border-collapse border border-slate-400  px-2 bg-gradient-to-tr from-violet-500 to-violet-400 text-white">Name</th>
                                    <th className="border-collapse border border-slate-400  px-2 bg-gradient-to-tr from-violet-500 to-violet-400 text-white">Designation</th>
                                    <th className="border-collapse border border-slate-400  px-2 bg-gradient-to-tr from-violet-500 to-violet-400 text-white">Joining Date</th>
                                    <th className="border-collapse border border-slate-400  px-2 bg-gradient-to-tr from-violet-500 to-violet-400 text-white">Salary</th>
                                    <th className="border-collapse border border-slate-400  px-2 bg-gradient-to-tr from-violet-500 to-violet-400 text-white">Absent</th>
                                    <th className="border-collapse border border-slate-400  px-2 bg-gradient-to-tr from-violet-500 to-violet-400 text-white">Late</th>
                                    <th className="border-collapse border border-slate-400  px-2 bg-gradient-to-tr from-violet-500 to-violet-400 text-white">In/Out Panch</th>
                                    <th className="border-collapse border border-slate-400  px-2 bg-gradient-to-tr from-violet-500 to-violet-400 text-white">Diduction</th>
                                    <th className="border-collapse border border-slate-400  px-2 bg-gradient-to-tr from-violet-500 to-violet-400 text-white">Previous Due</th>
                                    <th className="border-collapse border border-slate-400  px-2 bg-gradient-to-tr from-violet-500 to-violet-400 text-white">Total Amount</th>
                                    <th className="border-collapse border border-slate-400  px-2 bg-gradient-to-tr from-violet-500 to-violet-400 text-white">Paid amount</th>
                                    <th className="border-collapse border border-slate-400  px-2 bg-gradient-to-tr from-violet-500 to-violet-400 text-white">Due After Payment</th>
                                    <th className="border-collapse border border-slate-400  px-2 bg-gradient-to-tr from-violet-500 to-violet-400 text-white no-print">voucher</th>
                                </tr>
                            </thead>
                            <tbody className="uppercase w-full">
                                {salary.filter(item => {
                                    if (item.mName == salaryMonth) {
                                        return item
                                    }
                                }).map((item, i) => {
                                    return (
                                        <tr className="w-full text-[10px]" key={i} >
                                            <td className={`border-collapse border border-slate-400 px-[2px] ${item.tId % 2 == 0 ? 'bg-white' : 'bg-slate-300'}`}>{i + 1}</td>
                                            <td className={`border-collapse border border-slate-400 px-[2px] ${item.tId % 2 == 0 ? 'bg-white' : 'bg-slate-300'}`}>{item.tId}</td>
                                            <td className={`border-collapse border border-slate-400 px-[2px] ${item.tId % 2 == 0 ? 'bg-white' : 'bg-slate-300'}`}>{item.tShift}</td>
                                            <td className={`border-collapse border border-slate-400 px-[2px] ${item.tId % 2 == 0 ? 'bg-white' : 'bg-slate-300'}`}>{item.tName}</td>
                                            <td className={`border-collapse border border-slate-400 px-[2px] ${item.tId % 2 == 0 ? 'bg-white' : 'bg-slate-300'}`}>{item.tDesignation}</td>
                                            <td className={`border-collapse border border-slate-400 px-[2px] ${item.tId % 2 == 0 ? 'bg-white' : 'bg-slate-300'}`}>{item.tJoiningDate}</td>
                                            <td className={`border-collapse border border-slate-400 px-[2px] ${item.tId % 2 == 0 ? 'bg-white' : 'bg-slate-300'}`}>{item.tSalary}</td>
                                            <td className={`border-collapse border border-slate-400 px-[2px] ${item.tId % 2 == 0 ? 'bg-white' : 'bg-slate-300'}`}>{item.tAbsent}</td>
                                            <td className={`border-collapse border border-slate-400 px-[2px] ${item.tId % 2 == 0 ? 'bg-white' : 'bg-slate-300'}`}>{item.tLate}</td>
                                            <td className={`border-collapse border border-slate-400 px-[2px] ${item.tId % 2 == 0 ? 'bg-white' : 'bg-slate-300'}`}>{item.tInOutPanch}</td>
                                            <td className={`border-collapse border border-slate-400 px-[2px] ${item.tId % 2 == 0 ? 'bg-white' : 'bg-slate-300'}`}>{Math.ceil(item.tDiduction)}</td>
                                            <td className={`border-collapse border border-slate-400 px-[2px] ${item.tId % 2 == 0 ? 'bg-white' : 'bg-slate-300'}`}>{item.tPreviousDue}</td>
                                            <td className={`border-collapse border border-slate-400 px-[2px] ${item.tId % 2 == 0 ? 'bg-white' : 'bg-slate-300'}`}>{item.tTotalAmount}</td>
                                            <td className={`border-collapse border border-slate-400 px-[2px] ${item.tId % 2 == 0 ? 'bg-white' : 'bg-slate-300'}`}>{item.tPaidAmount}</td>
                                            <td className={`border-collapse border border-slate-400 px-[2px] ${item.tId % 2 == 0 ? 'bg-white' : 'bg-slate-300'}`}>{item.tDueAfterPayment}</td>
                                            <td className={`border-collapse border border-slate-400 flex flex-col items-center justify-center no-print ${item.tId % 2 == 0 ? 'bg-white' : 'bg-slate-300'}`}><Link to={`/teacher/salary/${item.tId}/${salaryMonth}`} className="px-[4px] py-[2px] text-xs bg-green-500 text-white capitalize hover:bg-green-600 shadow-lg">voucher</Link></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="w-full" >
                <AllSalaryVoucher voucherRef={voucherRef} salaryMonth={salaryMonth} />
            </div>
        </>
    );
}

export default SalarySamary;