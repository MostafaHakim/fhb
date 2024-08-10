import React, { useEffect, useState } from 'react'

function Credit({ option,date }) {
    const [name,setName]=useState()
    const [amount,setAmount]=useState(0)
    let creditTotal = 0
    let qtyTotal = 0;
  return (
    <>
        <div className='w-1/2'>
                    <h2 className='border-[1px] border-b-0 border-slate-400 uppercase-0 text-center'>Credit</h2>
                        <div className="w-full grid grid-cols-3 border-[1px] border-b-0 border-slate-400 uppercase">
                            <label className="w-full text-center col-span-1 border-r-[1px] border-slate-400">Purpose</label>
                            <label className="w-full text-center col-span-1 border-r-[1px] border-slate-400">Qty</label>
                            <label className=" w-full text-center col-span-1">Taka</label>
                        </div>
                        {
                            option.filter(item=>{
                                if(item.optionType=="Credit"){
                                    return item
                                }
                            }).map(item => {
                                qtyTotal += item.cQty;
                                return (
                                    <div className="w-full grid grid-cols-3 border-b-0 text-xs border-[1px] border-slate-400" >
                                        <input className="col-span-1 w-full text-start px-2  border-r-[1px] border-slate-400 capitalize" name="optionName" value={item.optionName} onChange={(e)=>{}}/>
                                        <input type='text' className="col-span-1 w-full text-center  border-r-[1px] border-slate-400 capitalize" name='optionQty'/>
                                        <input type='text' className="col-span-1 w-full text-center  capitalize" name='optionAmount' />
                                    </div>
                                )
                            })
                        }
                <div className="w-full grid grid-cols-3  border-[1px] border-slate-400 text-xs">
                    <label className="col-span-1 w-full text-center  border-r-[1px] border-slate-400 capitalize">Total</label>
                    <label className="col-span-1 w-full text-center  border-r-[1px] border-slate-400 capitalize">{qtyTotal}</label>
                    <label className="col-span-1 w-full text-center  capitalize">{creditTotal}</label>
                </div>
         </div>
    </>
  )
}

export default Credit