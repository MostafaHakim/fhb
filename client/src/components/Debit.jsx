import React from 'react'

function Debit({data, date}) {
    let debitTotal = 0
    let qtyTotal = 0;
  return (
    <>
            <div className='w-1/2'>
                            <h2 className='border-[1px] border-b-0 border-slate-400 uppercase-0 text-center bg-sky-500 text-white'>Debit</h2>
                                <div className="w-full grid grid-cols-3 border-[1px] border-b-0 border-slate-400 uppercase">
                                    <label className="w-full text-center col-span-1 border-r-[1px] border-slate-400">Purpose</label>
                                    <label className="w-full text-center col-span-1 border-r-[1px] border-slate-400">Qty</label>
                                    <label className=" w-full text-center col-span-1">Taka</label>
                                </div>
                                {
                                    data.filter(item=>{
                                        if(item.cDate==date){
                                            return item
                                        }
                                        if(item.cType=="Debit"){
                                            return item
                                        }
                                    }).map(item => {
                                        debitTotal += item.cAmount;
                                        qtyTotal += item.cQty;
                                        return (
                                            <div className="w-full grid grid-cols-3 border-b-0 text-xs border-[1px] border-slate-400" >
                                                <label className="col-span-1 w-full text-center  border-r-[1px] border-slate-400 capitalize">{item.cPurpose}</label>
                                                <label className="col-span-1 w-full text-center  border-r-[1px] border-slate-400 capitalize">{item.cQty}</label>
                                                <label className="col-span-1 w-full text-center  capitalize">{item.cType == "Credit" ? item.cAmount : 0}</label>
                                            </div>
                                        )
                                    })
                                }
                                <div className="w-full grid grid-cols-3  border-[1px] border-slate-400 text-xs bg-yellow-500">
                                    <label className="col-span-1 w-full text-center  border-r-[1px] border-slate-400 capitalize">Total Expense</label>
                                    <label className="col-span-1 w-full text-center  border-r-[1px] border-slate-400 capitalize">{qtyTotal}</label>
                                    <label className="col-span-1 w-full text-center  capitalize ">{debitTotal}</label>
                                </div>
                                <div className="w-full grid grid-cols-3  border-[1px] border-slate-400 text-xs bg-yellow-500 border-t-0">
                                    <label className="col-span-1 w-full text-center  border-r-[1px] border-slate-400 capitalize">Cash in Hand</label>
                                    <label className="col-span-1 w-full text-center  border-r-[1px] border-slate-400 capitalize">{qtyTotal}</label>
                                    <label className="col-span-1 w-full text-center  capitalize ">{debitTotal}</label>
                                </div>
                                <div className="w-full grid grid-cols-3  border-[1px] border-slate-400 text-xs bg-yellow-500  border-t-0">
                                    <label className="col-span-1 w-full text-center  border-r-[1px] border-slate-400 capitalize">Bank</label>
                                    <label className="col-span-1 w-full text-center  border-r-[1px] border-slate-400 capitalize">{qtyTotal}</label>
                                    <label className="col-span-1 w-full text-center  capitalize ">{debitTotal}</label>
                                </div>
                                <div className="w-full grid grid-cols-3  border-[1px] border-slate-400 text-xs bg-yellow-500 border-t-0">
                                    <label className="col-span-1 w-full text-center  border-r-[1px] border-slate-400 uppercase">Iou</label>
                                    <label className="col-span-1 w-full text-center  border-r-[1px] border-slate-400 capitalize">{qtyTotal}</label>
                                    <label className="col-span-1 w-full text-center  capitalize ">{debitTotal}</label>
                                </div>
         </div>
    </>
  )
}

export default Debit