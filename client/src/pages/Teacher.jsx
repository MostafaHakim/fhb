
import { useEffect, useState } from 'react';
import SalarySamary from '../components/SalarySummery';
import TeacherFields from '../components/TeacherFields';
const Teacher = () => {
    const [salary, setSalary] = useState([])
    const [month, setMonth] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/salary')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setSalary(data)
            })
        fetch('http://localhost:4000/month')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setMonth(data)
            })
    }, [])


    return (
        <>
            <div className="w-full grid grid-cols-6 gap-2">
                <div className='col-span-1 m-2'>
                    <TeacherFields />
                </div>
                <div className='col-span-5'>
                    <SalarySamary salary={salary} month={month} />
                </div>
            </div>
        </>
    );
}

export default Teacher;