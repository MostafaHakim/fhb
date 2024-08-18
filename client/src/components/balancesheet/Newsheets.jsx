import React, { useState, useEffect } from 'react';
import LoaderSpinner from '../LoderSpinner'


const ItemForm = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        // Fetch items using the native fetch API
        fetch('https://fhb-api.vercel.app/creditordebit')
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(err => console.error(err));
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }, []);

    let totalAmount = 0;
    let totalQuantity = 0;
    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedItems = items.map(item => {
            const amount = parseFloat(e.target[`amount-${item._id}`].value);
            const quantity = parseInt(e.target[`quantity-${item._id}`].value, 10);

            totalAmount += amount;
            totalQuantity += quantity;

            return {
                ...item,
                amount,
                quantity
            };
        });
        const newSheets = {
            items: updatedItems,
            totalAmount,
            totalQuantity,
            date: new Date()
        }
        // Use fetch to send the updated items to the backend
        fetch('https://fhb-api.vercel.app/save-items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newSheets)
        })
            .then(response => response.json())
            .then(data => console.log('Items saved successfully!', data))
            .catch(err => console.error(err));
    };

    return (
        <form onSubmit={handleSubmit}>
            {loading && <LoaderSpinner />}
            {items.filter(item => {
                if (item.optionType == "Credit") {
                    return item
                }
            }).map((item, i) => (
                <div className='w-1/2 grid grid-cols-7 border-[1px] border-t-0 border-slate-700 m-auto' key={item._id} >
                    <label className='col-span-1 w-full text-center border-r-[1px] border-slate-700 '>{i + 1}</label>
                    <label className='col-span-2 w-full   border-r-[1px] border-slate-700 text-start px-4'>{item.optionName}</label>
                    <input type="number" name={`amount-${item._id}`} placeholder="Amount" className='col-span-2 w-full text-center  border-r-[1px] border-slate-700' />
                    <input type="number" name={`quantity-${item._id}`} placeholder="Quantity" className='col-span-2 w-full text-center' />
                </div>
            ))}
            {items.filter(item => {
                if (item.optionType != "Credit" && item.optionType != "IOU") {
                    return item
                }
            }).map((item, i) => (
                <div className='w-1/2 grid grid-cols-7 border-[1px] border-t-0 border-slate-700 m-auto' key={item._id} >
                    <label className='col-span-1 w-full text-center border-r-[1px] border-slate-700 '>{i + 1}</label>
                    <label className='col-span-2 w-full   border-r-[1px] border-slate-700 text-start px-4'>{item.optionName}</label>
                    <input type="number" name={`amount-${item._id}`} placeholder="Amount" className='col-span-2 w-full text-center  border-r-[1px] border-slate-700' />
                    <input type="number" name={`quantity-${item._id}`} placeholder="Quantity" className='col-span-2 w-full text-center' />
                </div>
            ))}
            {items.filter(item => {
                if (item.optionType != "Credit" && item.optionType != "Debit") {
                    return item
                }
            }).map((item, i) => (
                <div className='w-1/2 grid grid-cols-7 border-[1px] border-t-0 border-slate-700 m-auto' key={item._id} >
                    <label className='col-span-1 w-full text-center border-r-[1px] border-slate-700 '>{i + 1}</label>
                    <label className='col-span-2 w-full   border-r-[1px] border-slate-700 text-start px-4'>{item.optionName}</label>
                    <input type="number" name={`amount-${item._id}`} placeholder="Amount" className='col-span-2 w-full text-center  border-r-[1px] border-slate-700' />
                    <input type="number" name={`quantity-${item._id}`} placeholder="Quantity" className='col-span-2 w-full text-center' />
                </div>
            ))}
            <button type="submit">Save</button>
        </form>
    );
};

export default ItemForm;
