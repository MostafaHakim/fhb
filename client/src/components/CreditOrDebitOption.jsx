import { useState } from "react";

const CreditOrDebitOption = () => {
    const [optionName, setOptionName] = useState('')
    const [optionType, setOptionType] = useState('')
    const handelClick = (e) => {
        e.preventDefault()
        fetch('https://fhb-api.vercel.app/creditordebit', {
            method: 'post',
            body: JSON.stringify({ optionName, optionType }),
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
    return (
        <>
            <div className="bg-white w-full flex flex-col items-center justify-center text-xs">
                <h2 className="w-full bg-green-500 text-white text-center">Create New Option</h2>
                <div className="w-full flex flex-col items-center justify-center p-4">
                    <div className="w-full grid grid-cols-4 border-b-0 border-[1px] border-slate-400">
                        <label className="col-span-2 border-r-[1px] border-slate-400 text-center w-full">New Option Name</label>
                        <label className="col-span-1 border-r-[1px] border-slate-400 text-center w-full">Type</label>
                        <label className="col-span-1 w-full text-center">Submit</label>
                    </div>
                    <form className="w-full grid grid-cols-4 border-[1px] border-slate-400" onSubmit={handelClick}>
                        <input className="col-span-2 border-r-[1px] border-slate-400 text-center w-full placeholder:text-gray-400 placeholder:text-xs" type="text" placeholder="Type Your New Option Here" onChange={(e) => { setOptionName(e.target.value) }} />
                        <select className="col-span-1 border-r-[1px] border-slate-400 text-center w-full" onChange={(e) => { setOptionType(e.target.value) }}>
                            <option>Credit</option>
                            <option>Debit</option>
                        </select>
                        <div className="col-span-1 w-full text-center text-white">
                            <button className="w-full bg-green-500 text-sm shadow-xl">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default CreditOrDebitOption;