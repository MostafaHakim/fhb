import React, { useEffect, useState } from 'react'

function DailyTotalCollectionHistory() {
    const [data, setData] = useState([])
    const [cTotal, setCTotal] = useState(0)
    const [dTotal, setDTotal] = useState(0)
    let creditTotal = 0;
    let debitTotal = 0;

    useEffect(() => {
        fetch('https://fhb-api.vercel.app/dailycreadit')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setData(data)
            })
            data.filter(item=>{
                if(item.cType=="Credit"){
                    return item
                }
            }).map(item=>{
                return creditTotal += item.cAmount
            })
            setCTotal(creditTotal)
    }, [data])
    useEffect(() => {
        fetch('https://fhb-api.vercel.app/dailycreadit')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setData(data)
            })
            data.filter(item=>{
                if(item.cType=="Debit"){
                    return item
                }
            }).map(item=>{
                return debitTotal += item.cAmount
            })
            setDTotal(debitTotal)
    }, [data])
  return (
    <>
        <div className='w-full p-2'>
            <div className=''>
                <div className='w-full grid grid-cols-2 text-sm font-bold gap-5'>
                    <label className='col-span-1'>Total Collection</label>
                    <span className='col-span-1'>{cTotal}</span>
                </div>
                <div className='w-full grid grid-cols-2 text-sm font-bold gap-5'>
                    <label className='col-span-1'>Total Expense</label>
                    <span className='col-span-1'>{dTotal}</span>
                </div>
                <div className='w-full grid grid-cols-2 text-sm font-bold gap-5'>
                    <label className='col-span-1'>Total IOU</label>
                    <span className='col-span-1'>{dTotal}</span>
                </div>
                <div className='w-full grid grid-cols-2 text-sm font-bold gap-5'>
                    <label className='col-span-1'>Balance</label>
                    <span className='col-span-1'>{cTotal-dTotal }</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default DailyTotalCollectionHistory