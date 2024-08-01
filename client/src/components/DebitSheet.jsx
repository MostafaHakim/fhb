import React, { useEffect, useState } from 'react'

function debitSheet({setIsLoading}) {
    const [data, setData] = useState([])
    const [option, setOption] = useState([])
    const [total, setTotal] = useState(0)
    let totalAmount = 0;
// ===============================================

    const [purpose, setPurpose] = useState('')
    const [amount, setAmount] = useState('')
    const [qty, setQty] = useState(0)



// ===============================================
    
    useEffect(() => {
        setIsLoading(true)
        fetch('https://fhb-api.vercel.app/dailycreadit')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setData(data)
            })
        fetch('https://fhb-api.vercel.app/creditordebit')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setOption(data)
            })
            setTotal(totalAmount)
            setIsLoading(false)
    }, [data,option,total])
// =========================================================


    const newDebit = {
        cPurpose: purpose,
        cType:"Debit",
        cAmount: amount,
        cQty: qty
    }
    const handelClick = (e) => {
        e.preventDefault(),
        setIsLoading(true)
            fetch('https://fhb-api.vercel.app/dailycreadit', {
                method: 'post',
                body: JSON.stringify(newDebit),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            setIsLoading(false)
    }

  return (
    <>
                <div className="col-span-2 w-full text-xs">
                                <h2 className="w-full text-center border-[1px] border-slate-400 border-b-0">Debit</h2>
                                <div className="w-full grid grid-cols-3 border-[1px] border-b-0 border-slate-400">
                                    <label className="w-full text-center col-span-1 border-r-[1px] border-slate-400">Purpose</label>
                                    <label className=" w-full text-center col-span-2 border-r-[1px] border-slate-400">Amount</label>
                                </div>
                                {
                                    data.filter(item=>{
                                        if(item.cType == "Debit"){
                                            return item
                                        }
                                    }).map(item => {
                                        totalAmount += item.cAmount
                                        return (
                                            <div className="w-full grid grid-cols-3 border-b-0 text-xs border-[1px] border-slate-400" >
                                                <label className="col-span-1 w-full text-center  border-r-[1px] border-slate-400 capitalize">{item.cPurpose}</label>
                                                <label className="col-span-2 w-full text-center  border-r-[1px] border-slate-400 ">{item.cAmount}</label>
                                            </div>
                                        )
                                    })
                                }


                                <div className="w-full grid grid-cols-3  border-[1px] border-slate-400 text-xs">
                                    <label className="col-span-1 w-full text-center  border-r-[1px] border-slate-400 capitalize">Total</label>
                                    <label className="w-full ml-24 col-span-2">{total}</label>
                                </div>
                                <div className=" border-[1px] border-sky-500 mt-2">
                                    <div className="w-full grid grid-cols-4 p-1 text-xs">
                                        <label className="w-full text-center col-span-1">Purpose</label>
                                        <label className=" w-full text-center col-span-2">Amount</label>
                                        <button className=" w-full text-center col-span-1">Action</button>
                                    </div>
                                    <form className="w-full" onSubmit={handelClick}>
                                        <div className="w-full grid grid-cols-4 p-1 gap-2 text-xs ">
                                            <select className="col-span-2 w-full text-center focus:outline-none border-[1px] border-slate-300" type="text" onChange={(e) => { setPurpose(e.target.value) }}>
                                                <option>--Select One--</option>
                                                {option.filter(item => {
                                                    if (item.optionType == "Debit") {
                                                        return item
                                                    }
                                                }).map(item => {
                                                    return (<option>{item.optionName}</option>)
                                                })}
                                            </select>
                                            <input type="text" className="col-span-1 w-full text-center focus:outline-none border-[1px] border-slate-300" onChange={(e) => { setAmount(e.target.value) }} />
                                            <button className="col-span-1 px-2 py-1 bg-green-700 text-white text-[10px]">Add Feilds</button>
                                        </div>
                                    </form>
                                </div>
                            </div> 
     
    </>
  )
}

export default debitSheet