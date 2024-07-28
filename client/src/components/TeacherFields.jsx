
import { Link } from 'react-router-dom'




const TeacherFields = () => {


    return (
        <>
            <div className="w-full flex flex-col divide-y-2 text-xs uppercase divide-slate-200 bg-white rounded-2xl">
                <Link to='/newteacher' className=" px-4 py-1 hover:bg-slate-200">Create New Teacher</Link>
                <Link to='/allpersonnel' className=" px-4 py-1 hover:bg-slate-200">All Personnel</Link>
                <Link to='/calculatesalary' className=" px-4 py-1 hover:bg-slate-200">Salary Calculation</Link>
                <Link to='/advancepayment' className="px-4 py-1 hover:bg-slate-200">Advance Payment</Link>
            </div>
        </>
    );
}

export default TeacherFields;