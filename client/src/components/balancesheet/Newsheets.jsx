import { useEffect, useState } from 'react';
import logo from '../../img/logo.png'

const Newsheets = () => {
    const [data, setData] = useState([])

    const [selectedDate, setSelectedDate] = useState(() => {
        // Get today's date in the format 'YYYY-MM-DD'
        const today = new Date().toISOString().split('T')[0];
        return today
    });
    const handleChange = (e) => {
        setSelectedDate(e.target.value);
    }
    useEffect(() => {
        fetch('https://fhb-api.vercel.app/creditordebit')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setData(data)
            })
    }, [])



    return (
        <>
            <div className="w-full bg-white p-4">
                <div className="w-2/3 m-auto flex flex-col items-center justify-center">
                    <div className='flex flex-row items-center justify-center space-x-4 w-full  border-[1px] border-slate-700'>
                        <img className='w-12' src={logo} alt="" />
                        <div className='flex flex-col items-center justify-center'>
                            <h2 className='font-oswald font-bold text-md'>Fazlul Haque Bidhya Niketon</h2>
                            <span className='text-sm'>Daily Balance Sheet</span>
                        </div>
                    </div>
                    <div className='w-full border-[1px] border-slate-700 px-4 flex flex-row space-x-4 '>
                        <label>Date</label>
                        <input className='focus:outline-none' type="date" value={selectedDate} onChange={handleChange} />
                    </div>
                    <div className='w-full grid grid-cols-2 gap-1'>
                        <div className='w-full col-span-1 flex flex-col item-center justify-center '>
                            <div className='w-full flex flex-col item-center justify-center border-[1px] border-y-0 border-slate-700'>
                                <h2 className='w-full text-center'>Credit</h2>
                            </div>
                            <div className='w-full grid grid-cols-7 border-[1px] border-slate-700'>
                                <label className='col-span-1 w-full text-center border-r-[1px] border-slate-700 '>SL</label>
                                <label className='col-span-2 w-full text-center  border-r-[1px] border-slate-700'>Class</label>
                                <label className='col-span-2 w-full text-center  border-r-[1px] border-slate-700'>Qty</label>
                                <label className='col-span-2 w-full text-center'>Taka</label>
                            </div>
                            <form className='w-full'>
                                {data.filter((item) => {
                                    if (item.optionType == "Credit") {
                                        return item
                                    }
                                }).map((item, i) => {
                                    return (
                                        <div className='w-full grid grid-cols-7 border-[1px] border-t-0 border-slate-700' key={i}>
                                            <label name={`${i}`} className='col-span-1 w-full text-center border-r-[1px] border-slate-700 '>{i + 1}</label>
                                            <label name={`${item.optionName}`} className='col-span-2 w-full   border-r-[1px] border-slate-700 text-start px-4'>{item.optionName}</label>
                                            <input type='number' className='col-span-2 w-full text-center  border-r-[1px] border-slate-700' />
                                            <input type='number' className='col-span-2 w-full text-center' />
                                        </div>
                                    )
                                })}
                            </form>

                        </div>
                        <div className='w-full col-span-1 item-center justify-center border-[1px] border-t-0 border-slate-700'>
                            <h2 className='w-full text-center'>Debit</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Newsheets;