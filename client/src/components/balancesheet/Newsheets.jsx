import React, { useState, useEffect } from 'react';
import LoaderSpinner from '../LoderSpinner'



const ItemForm = () => {
    const [items, setItems] = useState([]);
    const [totals, setTotals] = useState({ totalAmount: 0, totalQuantity: 0 });

    useEffect(() => {
        // Fetch items using the native fetch API
        fetch('https://fhb-api.vercel.app/creditordebit')
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(err => console.error(err));
    }, []);

    const handleInputChange = (e, itemId, field) => {
        const value = parseFloat(e.target.value) || 0;

        setItems(prevItems => {
            return prevItems.map(item => {
                if (item._id === itemId) {
                    return { ...item, [field]: value };
                }
                return item;
            });
        });

        calculateTotals();
    };

    const calculateTotals = () => {
        let totalAmount = 0;
        let totalQuantity = 0;

        items.forEach(item => {
            totalAmount += item.amount || 0;
            totalQuantity += item.quantity || 0;
        });

        setTotals({ totalAmount, totalQuantity });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Use fetch to send the updated items along with the totals to the backend
        fetch('https://fhb-api.vercel.app/save-items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                items,
                totalAmount: totals.totalAmount,
                totalQuantity: totals.totalQuantity,
                date: new Date()
            })
        })
            .then(response => response.json())
            .then(data => console.log('Items saved successfully!', data))
            .catch(err => console.error(err));
    };

    return (
        <form onSubmit={handleSubmit}>

            <div className='w-full p-10 flex flex-col items-center justify-center bg-white'>
                <div></div>
                <div>
                    <div className='w-full grid grid-cols-2 gap-1'>
                        <div className='col-span-1 w-full  border-t-[1px] border-slate-700'>
                            {items.filter(item => {
                                if (item.optionType == "Credit") {
                                    return item
                                }
                            }).map((item, i) => (
                                <div className='w-full grid grid-cols-7 border-[1px] border-t-0 border-slate-700 m-auto' key={item._id} >
                                    <label className='col-span-1 w-full text-center border-r-[1px] border-slate-700 '>{i + 1}</label>
                                    <label className='col-span-2 w-full   border-r-[1px] border-slate-700 text-start px-4'>{item.optionName}</label>
                                    <input type="number" name={`quantity-${item._id}`} placeholder="Quantity" className='col-span-2 w-full text-center border-r-[1px] border-slate-700' onChange={(e) => handleInputChange(e, item._id, 'quantity')} />
                                    <input type="number" name={`amount-${item._id}`} placeholder="Amount" className='col-span-2 w-full text-center' onChange={(e) => handleInputChange(e, item._id, 'amount')} />
                                </div>
                            ))}
                        </div>
                        <div className='col-span-1 w-full border-t-[1px] border-slate-700'>
                            {items.filter(item => {
                                if (item.optionType != "Credit" && item.optionType != "IOU") {
                                    return item
                                }
                            }).map((item, i) => (
                                <div className='w-full grid grid-cols-7 border-[1px] border-t-0 border-slate-700 m-auto' key={item._id} >
                                    <label className='col-span-1 w-full text-center border-r-[1px] border-slate-700 '>{i + 1}</label>
                                    <label className='col-span-2 w-full   border-r-[1px] border-slate-700 text-start px-4'>{item.optionName}</label>
                                    <input type="number" name={`quantity-${item._id}`} placeholder="Quantity" className='col-span-2 w-full text-center border-r-[1px] border-slate-700' />
                                    <input type="number" name={`amount-${item._id}`} placeholder="Amount" className='col-span-2 w-full text-center' />
                                </div>
                            ))}
                            <div className='w-full grid grid-cols-7 border-[1px] border-t-0 border-slate-700 m-auto bg-green-200' >
                                <label className='col-span-5 w-full text-center border-r-[1px] border-slate-700 '>Total</label>
                                <label className='col-span-2 w-full text-center  border-r-[1px] border-slate-700  px-4'>5000</label>
                            </div>
                            <div className='w-full grid grid-cols-1 border-[1px] border-t-0 border-slate-700 m-auto bg-green-200' >
                                <label className='col-span-1 w-full text-center border-r-[1px] border-slate-700 '>IOU</label>
                            </div>
                            {items.filter(item => {
                                if (item.optionType != "Credit" && item.optionType != "Debit") {
                                    return item
                                }
                            }).map((item, i) => (
                                <div className='w-full grid grid-cols-7 border-[1px] border-t-0 border-slate-700 m-auto' key={item._id} >
                                    <label className='col-span-1 w-full text-center border-r-[1px] border-slate-700 '>{i + 1}</label>
                                    <label className='col-span-2 w-full   border-r-[1px] border-slate-700 text-start px-4'>{item.optionName}</label>
                                    <input type="number" name={`quantity-${item._id}`} placeholder="Quantity" className='col-span-2 w-full text-center border-r-[1px] border-slate-700' />
                                    <input type="number" name={`amount-${item._id}`} placeholder="Amount" className='col-span-2 w-full text-center ' />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h3>Total Amount: {totals.totalAmount.toFixed(2)}</h3>
                <h3>Total Quantity: {totals.totalQuantity}</h3>
            </div>
            <button type="submit">Save</button>
        </form>
    );
};

export default ItemForm;
