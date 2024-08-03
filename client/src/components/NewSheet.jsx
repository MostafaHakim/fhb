

import DebitSheet from "./DebitSheet";
import DailyTotalCollectionHistory from "./DailyTotalCollectionHistory";
import CreaditSheet from "./CreaditSheet";
import CreaditOrDebitOption from "./CreditOrDebitOption"
import { useState ,useEffect} from "react";
import LoderSpinner from "./LoderSpinner";

const NewSheet = () => {
    const [data, setData] = useState([])
    const [option, setOption] = useState([])
    const [isLoading,setIsLoading]=useState(false)
    const date = new Date()
    
  
    // ==========================End Item Data=================
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
            setTimeout(()=>{
                setIsLoading(false)
            },2000)
            
    }, [])

   
    
    return (
        <>
        <div className="w-full flex flex-col items-center justify-center bg-white px-2 relative">
            { isLoading && <LoderSpinner /> }
            <div className="w-full grid grid-cols-3 gap-4">
                <div className="col-span-1 w-full">
                  <DailyTotalCollectionHistory />
                </div>
                <div className="w-full col-span-2 bg-white rounded-md">
                    <div className="w-full flex flex-col items-center justify-center p-1">
                        <h2 className="text-sm uppercase">Fazlul Haque Bidhya Niketon</h2>
                        <h2 className="text-sm">Daily Balance Sheet</h2>
                        <div className="w-full flex flex-row items-center justify-between">
                            <div  className="text-xs flex flex-row item-center space-x-2">
                                <label>Date:</label>
                                <span>{date.toLocaleDateString()}</span>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 gap-2 p-1">
                        {/* ================================Creadit=================================================== */}
                        <CreaditSheet data={data} option={option} />
                        {/* ================================Debit=================================================== */}
                       <DebitSheet />
                    </div>
                    <div className="w-full">
                        <CreaditOrDebitOption />
                    </div>
                </div>
            </div>
        </div>
        
        </>
    );
}

export default NewSheet;
