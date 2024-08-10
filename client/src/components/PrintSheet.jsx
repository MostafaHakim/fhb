
import { useState, useEffect, useRef } from "react";
import LoderSpinner from '../components/LoderSpinner'
import ReactToPrint from 'react-to-print';
import logo from '../img/logo.png'

const PrintSheet = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [date,setDate] = useState('')
    const componentRef=useRef()

    let creditTotal = 0
    let debitTotal = 0;
    let iouTotal = 0;
    let qtyTotal = 0;
    let prevB = 0;


    // ==========================End Item Data=================
    useEffect(() => {
        fetch('https://fhb-api.vercel.app/dailycreadit')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setData(data)
            })
    }, [data,])

    return (
        <>
            {loading && <LoderSpinner />}
                <div>
                <div className="w-full cols-span-3 flex flex-col items-center justify-center bg-white py-8 px-4" ref={componentRef}>
                    <div className=" w-full flex flex-col items-center justify-center p-1 ">
                     <div className="w-full flex flex-col items-center justify-center" >
                            <div className="w-full flex flex-row items-center justify-center space-x-3">
                                <img className="w-12" src={logo} alt="FHB" />
                                <div className="flex flex-col items-center justify-center">
                                    <h2 className="text-sm uppercase font-oswald">Fazlul Haque Bidhya Niketon</h2>
                                    <h2 className="text-sm font-oswald">Daily Balance Sheet</h2>
                                </div>
                            </div>
                            <div className="w-full flex flex-row items-center justify-between border-[1px] text-sm font-bold uppercase">
                                <div className="text-xs flex flex-row item-center space-x-2">
                                    <label>Date:</label>
                                    <input type="date" onChange={(e)=>{setDate(e.target.value)}}/>
                                </div>
                            </div>
                            <h2 className="w-full text-center border-[1px] border-b-0 border-slate-400 bg-sky-500 text-white">Balance Sheets</h2>
                            <div className="w-full grid grid-cols-5 border-[1px] border-b-0 border-slate-400 text-xs font-bold uppercase">
                                <label className="w-full text-center col-span-1 border-r-[1px] border-slate-400">Purpose</label>
                                <label className="w-full text-center col-span-1 border-r-[1px] border-slate-400">Qty</label>
                                <label className=" w-full text-center col-span-1 border-r-[1px] border-slate-400">Credit</label>
                                <label className=" w-full text-center col-span-1 border-r-[1px] border-slate-400">Debit</label>
                                <label className=" w-full text-center col-span-1 ">Iou</label>
                            </div>
                            {
                                data.filter(item=>{
                                    if(item.cDate==date){
                                        return item
                                    }
                                }).map(item => {
                                    item.cType == "Credit" ? creditTotal += item.cAmount : creditTotal;
                                    item.cType == "Debit" ? debitTotal += item.cAmount : debitTotal;
                                    item.cType == "IOU" ? iouTotal += item.cAmount : iouTotal;
                                    qtyTotal += item.cQty;
                                    item.cPurpose == "Previous Balance" ? prevB += item.cAmount : item.cAmount;
                                    return (
                                        <div className="w-full grid grid-cols-5 border-b-0 text-xs border-[1px] border-slate-400" >
                                            <label className="col-span-1 w-full text-center  border-r-[1px] border-slate-400 capitalize">{item.cPurpose}</label>
                                            <label className="col-span-1 w-full text-center  border-r-[1px] border-slate-400 capitalize">{item.cQty}</label>
                                            <label className="col-span-1 w-full text-center  border-r-[1px] border-slate-400 capitalize">{item.cType == "Credit" ? item.cAmount : 0}</label>
                                            <label className="col-span-1 w-full text-center  border-r-[1px] border-slate-400 capitalize">{item.cType == "Debit" ? item.cAmount : 0}</label>
                                            <label className="col-span-1 w-full text-center   capitalize">{item.cType == "IOU" ? item.cAmount : 0}</label>
                                            <label className="col-span-1 w-full text-center "></label>
                                        </div>
                                    )
                                })
                            }
                            <div className="w-full grid grid-cols-5  border-[1px] border-slate-400 text-xs">
                                <label className="col-span-1 w-full text-center  border-r-[1px] border-slate-400 capitalize">Total</label>
                                <label className="col-span-1 w-full text-center  border-r-[1px] border-slate-400 capitalize">{qtyTotal}</label>
                                <label className="col-span-1 w-full text-center  border-r-[1px] border-slate-400 capitalize">{creditTotal}</label>
                                <label className="col-span-1 w-full text-center  border-r-[1px] border-slate-400 capitalize">{debitTotal}</label>
                                <label className="col-span-1 w-full text-center ">{iouTotal}</label>
                            </div>
                            <div className="w-full grid grid-cols-5  border-[1px] border-t-0 border-slate-400 text-xs font-bold ">
                                <label className="col-span-1 w-full text-center  border-r-[1px] border-slate-400 capitalize">Total Collection</label>
                                <label className="col-span-1 w-full text-center  border-r-[1px] border-slate-400 capitalize">{qtyTotal}</label>
                                <label className="col-span-1 w-full text-center  border-r-[1px] border-slate-400 capitalize">Cash In Hand</label>
                                <label className="col-span-1 w-full text-center   border-r-[1px] border-slate-400 capitalize">{creditTotal-(debitTotal+iouTotal)}</label>
                            </div>
                        </div>
                       
                    </div>
                    <div className="w-1/2 mt-8 text-xl font-bold">
                        <h2 className="py-1 text-center">Summarry</h2>
                        <div className="w-full grid grid-cols-2  border-[1px] border-slate-400 text-xs items-center justify-center">
                            <label className="col-span-1 w-full text-center  border-r-[1px] border-slate-400 capitalize">Total Collection</label>
                            <label className="col-span-1 w-full text-center   capitalize">{creditTotal - prevB}</label>
                        </div> 
                        <div className="w-full grid grid-cols-2  border-[1px] border-t-0 border-slate-400 text-xs items-center justify-center">
                            <label className="col-span-1 w-full text-center  border-r-[1px] border-slate-400 capitalize">Previous Balance</label>
                            <label className="col-span-1 w-full text-center   capitalize">{prevB}</label>
                        </div>
                        <div className="w-full grid grid-cols-2 border-t-0  border-[1px] border-slate-400 text-xs items-center justify-center">
                            <label className="col-span-1 w-full text-center  border-r-[1px] border-slate-400 capitalize">Total Expense</label>
                            <label className="col-span-1 w-full text-center ">{debitTotal}</label>
                        </div>
                        <div className="w-full grid grid-cols-2 border-t-0  border-[1px] border-slate-400 text-xs items-center justify-center">
                            <label className="col-span-1 w-full text-center  border-r-[1px] border-slate-400 capitalize">Total IOU</label>
                            <label className="col-span-1 w-full text-center  capitalize">{iouTotal}</label>
                        </div>
                        <div className="w-full grid grid-cols-2 border-t-0 border-[1px] border-slate-400 text-xs items-center justify-center">
                            <label className="col-span-1 w-full text-center  border-r-[1px] border-slate-400 capitalize">Cash in Hand</label>
                            <label className="col-span-1 w-full text-center   capitalize 0">{(creditTotal) - (debitTotal + iouTotal)}</label>
                        </div>
                    </div>
                </div>
                <div className="m-4">
                        <ReactToPrint
                                trigger={() => <button className="capitalize  hover:bg-green-600 text-md px-8 py-2 bg-green-500 text-white shadow-xl">Print</button>}
                                content={() => componentRef.current}
                        />
                        </div>
                </div>
                
        </>
    );
}

export default PrintSheet;
