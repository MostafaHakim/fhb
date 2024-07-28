import { useState } from "react";
import { Link } from "react-router-dom";

const SalarySamary = ({ salary, month }) => {
    const [salaryMonth, setSalaryMonth] = useState('')
    return (
        <>
            <div className="w-full p-2">
                <div className="w-full flex flex-row items-center justify-center mt-4 space-x-4 border-2 border-slate-200  text-xs bg-white">
                    <label htmlFor="">Select Month</label>
                    <select className="focus:outline-none px-8" onChange={(e) => { setSalaryMonth(e.target.value) }}>
                        <option>--Select One--</option>
                        {month.map((item, i) => {
                            return (<option key={i}>{item.mName}</option>)
                        })}
                    </select>
                </div>
                <div className="w-full flex flex-col shadow-xl uppercase bg-gradient-to-tr from-sky-500 to-sky-100 text-white rounded-xl mt-4">
                    <h2 className="uppercase text-sm px-8 py-1">{`Salary Samary For the month of ${salaryMonth}`}</h2>
                </div>
                <div className="px-2 py-4 w-full">
                    <table className="table-auto border-collapse border border-slate-400">
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
                                <th className="border-collapse border border-slate-400  px-2 bg-gradient-to-tr from-violet-500 to-violet-400 text-white">Print</th>
                            </tr>
                        </thead>
                        <tbody className="uppercase">
                            {salary.filter(item => {
                                if (item.mName == salaryMonth) {
                                    return item
                                }
                            }).map((item, i) => {
                                return (
                                    <tr className="text-[10px]" key={i}>
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
                                        <td className={`border-collapse border border-slate-400 flex flex-col items-center justify-center ${item.tId % 2 == 0 ? 'bg-white' : 'bg-slate-300'}`}><Link to={`/teacher/salary/${item.tId}/${salaryMonth}`} className="px-[4px] py-[2px] text-xs bg-green-500 text-white capitalize hover:bg-green-600 shadow-lg">Print</Link></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
}

export default SalarySamary;