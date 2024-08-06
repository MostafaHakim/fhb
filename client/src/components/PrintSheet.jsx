
import { useState, useEffect } from "react";
import LoderSpinner from '../components/LoderSpinner'

const PrintSheet = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [date,setDate] = useState('')

    let creditTotal = 0
    let debitTotal = 0;
    let iouTotal = 0;
    let qtyTotal = 0;


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
            <div className="w-full flex flex-col items-center justify-center p-1 col-span-3">
                        <h2 className="text-sm uppercase">Fazlul Haque Bidhya Niketon</h2>
                        <h2 className="text-sm">Daily Balance Sheet</h2>
                        <div className="w-full flex flex-row items-center justify-between">
                            <div className="text-xs flex flex-row item-center space-x-2">
                                <label>Date:</label>
                                <input type="date" onChange={(e)=>{setDate(e.target.value)}}/>
                            </div>
                        </div>
                        <h2 className="w-full text-center border-[1px] border-b-0 border-slate-400">Balance Sheets</h2>
                        <div className="w-full grid grid-cols-5 border-[1px] border-b-0 border-slate-400 uppercase">
                            <label className="w-full text-center col-span-1 border-r-[1px] border-slate-400">Purpose</label>
                            <label className="w-full text-center col-span-1 border-r-[1px] border-slate-400">Qty</label>
                            <label className=" w-full text-center col-span-1 border-r-[1px] border-slate-400">Credit</label>
                            <label className=" w-full text-center col-span-1 border-r-[1px] border-slate-400">Debit</label>
                            <label className=" w-full text-center col-span-1 border-r-[1px] border-slate-400">Iou</label>
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
                                return (
                                    <div className="w-full grid grid-cols-5 border-b-0 text-xs border-[1px] border-slate-400" >
                                        <label className="col-span-1 w-full text-center  border-r-[1px] border-slate-400 capitalize">{item.cPurpose}</label>
                                        <label className="col-span-1 w-full text-center  border-r-[1px] border-slate-400 capitalize">{item.cQty}</label>
                                        <label className="col-span-1 w-full text-center  border-r-[1px] border-slate-400 capitalize">{item.cType == "Credit" ? item.cAmount : 0}</label>
                                        <label className="col-span-1 w-full text-center  border-r-[1px] border-slate-400 capitalize">{item.cType == "Debit" ? item.cAmount : 0}</label>
                                        <label className="col-span-1 w-full text-center  border-r-[1px] border-slate-400 capitalize">{item.cType == "IOU" ? item.cAmount : 0}</label>
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
                            <label className="col-span-1 w-full text-center  border-r-[1px] border-slate-400 capitalize">{iouTotal}</label>
                        </div>
                    </div>
        </>
    );
}

export default PrintSheet;
