
function DailyTotalCollectionHistory({ data,date }) {

    let creditTotal = 0
    let debitTotal = 0;
    let iouTotal = 0;
    data.filter(item=>{
        if(item.cDate==date){
            return item
        }
    }).map(item => {
        item.cType == "Credit" ? creditTotal += item.cAmount : creditTotal;
        item.cType == "Debit" ? debitTotal += item.cAmount : debitTotal;
        item.cType == "IOU" ? iouTotal += item.cAmount : iouTotal;
    })
    return (
        <>
            <div className='w-full p-2'>
                <div className=''>
                    <div className='w-full grid grid-cols-2 text-sm font-bold gap-5'>
                        <label className='col-span-1'>Total Collection</label>
                        <span className='col-span-1'>{creditTotal}</span>
                    </div>
                    <div className='w-full grid grid-cols-2 text-sm font-bold gap-5'>
                        <label className='col-span-1'>Total Expense</label>
                        <span className='col-span-1'>{debitTotal}</span>
                    </div>
                    <div className='w-full grid grid-cols-2 text-sm font-bold gap-5'>
                        <label className='col-span-1'>Total IOU</label>
                        <span className='col-span-1'>{iouTotal}</span>
                    </div>
                    <div className='w-full grid grid-cols-2 text-sm font-bold gap-5'>
                        <label className='col-span-1'>Balance</label>
                        <span className='col-span-1'>{creditTotal - (debitTotal + iouTotal)}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DailyTotalCollectionHistory