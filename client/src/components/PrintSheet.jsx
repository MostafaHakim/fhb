
import CreaditSheet from "./CreaditSheet";
import CreaditOrDebitOption from "./CreditOrDebitOption"
import { useState, useEffect } from "react";
import LoderSpinner from '../components/LoderSpinner'

const NewSheet = () => {
    const [data, setData] = useState([])
    const [option, setOption] = useState([])
    const [loading, setLoading] = useState(false)




    // ==========================End Item Data=================
    useEffect(() => {
        fetch('https://fhb-api.vercel.app/dailycreadit')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setData(data)
            })
    }, [data,])
    useEffect(() => {

        fetch('https://fhb-api.vercel.app/creditordebit')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setOption(data)
            })
    }, [option])
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])


    return (
        <>
            {loading && <LoderSpinner />}
            <div className="w-full flex flex-col items-center justify-center bg-white px-2">
                <CreaditSheet data={data} option={option} setLoading={setLoading} />
                <div className="w-10/12 m-auto mt-10 grid grid-cols-4 gap-4">
                    <div className="col-span-1">

                    </div>
                    <div className="col-span-3">
                        <CreaditOrDebitOption setLoading={setLoading} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default NewSheet;
