

import DebitSheet from "./DebitSheet";
import DailyTotalCollectionHistory from "./DailyTotalCollectionHistory";
import CreaditSheet from "./CreaditSheet";
import CreaditOrDebitOption from "./CreditOrDebitOption"

const NewSheet = () => {
    const [isLoading,setIsLoading]=useState(false)
    const date = new Date()
    return (
        <>
            {
                !isLoading ? <div className="w-full flex flex-col items-center justify-center bg-white px-2">
                <div className="w-full grid grid-cols-3 gap-4">
                    <div className="col-span-1 w-full">
                      <DailyTotalCollectionHistory setIsLoading={setIsLoading} isLoading={isLoading}/>
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
                            <CreaditSheet setIsLoading={setIsLoading} isLoading={isLoading}/>
                            {/* ================================Debit=================================================== */}
                           <DebitSheet setIsLoading={setIsLoading} isLoading={isLoading}/>
                        </div>
                        <div className="w-full">
                            <CreaditOrDebitOption setIsLoading={setIsLoading} isLoading={isLoading}/>
                        </div>
                    </div>
                </div>
            </div>: "Loading..."
            }
        </>
    );
}

export default NewSheet;