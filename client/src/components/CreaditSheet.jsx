import React from 'react'
import { useEffect, useState } from "react";

function CreaditSheet({setIsLoading}) {
    const [data, setData] = useState([])
    const [option, setOption] = useState([])
    // ==========================From Data====================
    const [purpose, setPurpose] = useState('')
    const [amount, setAmount] = useState('')
    const [qty, setQty] = useState('')
    const [total, setTotal] = useState(0)
    // ==========================End From Data=================
    // ==========================Item Data=================
    let totalAmount = 0;
   
    // ==========================End Item Data=================
    useEffect(() => {
        setIsLoading(true)
        fetch('https://fhb-api.vercel.app/dailycreadit')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setData(data)
            })
            setIsLoading(false)
    }, [])

    useEffect(()=>{
        setIsLoading(true)
        setTotal(totalAmount)
        setIsLoading(false)
    },[total])

    
    useEffect(() => {
        setIsLoading(true)
        fetch('https://fhb-api.vercel.app/creditordebit')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setOption(data)
            })
            setIsLoading(false)
    }, [])

    const newCredit = {
        cPurpose: purpose,
        cType:"Credit",
        cAmount: amount,
        cQty: qty
    }
    const handelClick = (e) => {
        e.preventDefault(),
        setIsLoading(true)
            fetch('https://fhb-api.vercel.app/dailycreadit', {
                method: 'post',
                body: JSON.stringify(newCredit),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            setIsLoading(false)
    }

  return (   
    <>
    
    <div className="col-span-3 w-full flex flex-col text-xs">
        <h2 className="w-full text-center border-[1px] border-b-0 border-slate-400">Credit</h2>
        <div className="w-full grid grid-cols-5 border-[1px] border-b-0 border-slate-400">
            <label className="w-full text-center col-span-1 border-r-[1px] border-slate-400">Purpose</label>
            <label className="w-full text-center col-span-1 border-r-[1px] border-slate-400">Qty</label>
            <label className=" w-full text-center col-span-2 border-r-[1px] border-slate-400">Amount</label>
            <button className=" w-full text-center col-span-1">Action</button>
        </div>
        {
            data.filter(item=>{
                if(item.cType=="Credit"){
                    return item
                }
            }).map(item => {
                totalAmount += item.cAmount
                return (
                    <div className="w-full grid grid-cols-5 border-b-0 text-xs border-[1px] border-slate-400" >
                        <label className="col-span-1 w-full text-center  border-r-[1px] border-slate-400 capitalize">{item.cPurpose}</label>
                        <label className="col-span-1 w-full text-center  border-r-[1px] border-slate-400 capitalize">{item.cQty}</label>
                        <label className="col-span-2 w-full text-center  border-r-[1px] border-slate-400 ">{item.cAmount}</label>
                        <label className="col-span-1 w-full text-center "></label>
                    </div>
                )
            })
        }


        <div className="w-full grid grid-cols-5  border-[1px] border-slate-400 text-xs">
            <label className="col-span-2 w-full text-center  border-r-[1px] border-slate-400 capitalize">Total</label>
            <label className="w-full ml-24 col-span-3">{total}</label>
        </div>
        <div className=" border-[1px] border-sky-500 mt-2">
            <div className="w-full grid grid-cols-5 p-1 text-xs">
                <label className="w-full text-center col-span-1">Purpose</label>
                <label className="w-full text-center col-span-1">Qty</label>
                <label className=" w-full text-center col-span-2">Amount</label>
                <button className=" w-full text-center col-span-1">Action</button>
            </div>
            <form className="w-full" onSubmit={handelClick}>
                <div className="w-full grid grid-cols-5 p-1 gap-4 text-xs ">
                    <select className="col-span-1 w-full text-center focus:outline-none border-[1px] border-slate-300" type="text" onChange={(e) => { setPurpose(e.target.value) }}>
                        <option value={option}>--Select One--</option>
                        {option.filter(item => {
                            if (item.optionType == "Credit") {
                                return item
                            }
                        }).map(item => {
                            return (<option>{item.optionName}</option>)
                        })}
                    </select>
                    <input type="text" className="col-span-1 w-full text-center focus:outline-none border-[1px] border-slate-300" onChange={(e) => { setQty(e.target.value) }} />
                    <input type="text" className="col-span-2 w-full text-center focus:outline-none border-[1px] border-slate-300" onChange={(e) => { setAmount(e.target.value) }} />

                    <button className="col-span-1 px-4 py-1 bg-green-700 text-white text-xs">Add Feilds</button>
                </div>
            </form>
        </div>
    </div> 
    </>
  )
}

export default CreaditSheet