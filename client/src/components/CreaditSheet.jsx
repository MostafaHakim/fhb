import React, { useEffect } from 'react'
import { useState } from "react";
import DailyTotalCollectionHistory from './DailyTotalCollectionHistory';



function CreaditSheet({ data, option, setLoading }) {
    // ==========================From Data====================
    const [purpose, setPurpose] = useState('')
    const [amount, setAmount] = useState('')
    const [qty, setQty] = useState('')
    const [ctyp, setCtype] = useState('')
    const [date, setDate] = useState('')
    


    // ==============================Total ====================
    let creditTotal = 0
    let debitTotal = 0;
    let iouTotal = 0;
    let qtyTotal = 0;
   
    // ==============================End Total ====================
    // ==========================End From Data=================

    // ==========================Item Data=================


    const newCredit = {
        cPurpose: purpose,
        cType: ctyp,
        cAmount: amount,
        cQty: qty,
        cDate:date,
    }
console.log(date)
    const handelClick = (e) => {
        setLoading(true)
        e.preventDefault(),
            fetch('https://fhb-api.vercel.app/dailycreadit', {
                method: 'post',
                body: JSON.stringify(newCredit),
                headers: {
                    "Content-Type": "application/json"
                }
            })
        setPurpose('')
        setAmount('')
        setQty('')
        setCtype('')
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }
    return (
        <>
            <div className='w-full'>
                <div className='w-10/12 m-auto p-1 grid grid-cols-4 gap-4'>
                    <div className='col-span-1'>
                        <DailyTotalCollectionHistory data={data} />
                    </div>
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
                            data.map(item => {
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
                        <div className="w-full border-[1px] border-sky-500 mt-2">
                            <div className="w-full grid grid-cols-5 p-1 text-xs">
                                <label className="w-full text-center col-span-1">Type</label>
                                <label className="w-full text-center col-span-1">Purpose</label>
                                <label className=" w-full text-center col-span-1">Qty</label>
                                <label className=" w-full text-center col-span-1">Amount</label>
                                <label className=" w-full text-center col-span-1"></label>
                            </div>
                            <form className="w-full" onSubmit={handelClick}>
                                <div className="w-full grid grid-cols-5 p-1 gap-4 text-xs ">
                                    <select className="col-span-1 w-full text-center focus:outline-none border-[1px] border-slate-300" type="text" value={ctyp} onChange={(e) => { setCtype(e.target.value) }}>
                                        <option >--Select One--</option>
                                        <option >Debit</option>
                                        <option >Credit</option>
                                        <option >IOU</option>
                                    </select>
                                    <select className="col-span-1 w-full text-center focus:outline-none border-[1px] border-slate-300" type="text" value={purpose} onChange={(e) => { setPurpose(e.target.value) }}>
                                        <option value={option}>--Select One--</option>
                                        {option.filter(item => {
                                            if (item.optionType == ctyp) {
                                                return item
                                            }
                                        }).map(item => {
                                            return (<option>{item.optionName}</option>)
                                        })}
                                    </select>
                                    <input type="text" className="col-span-1 w-full text-center focus:outline-none border-[1px] border-slate-300" value={qty} onChange={(e) => { setQty(e.target.value) }} />
                                    <input type="text" className="col-span-1 w-full text-center focus:outline-none border-[1px] border-slate-300" value={amount} onChange={(e) => { setAmount(e.target.value) }} />
                                    <button className="col-span-1 px-4 py-1 bg-green-700 text-white text-xs">Add Feilds</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CreaditSheet
