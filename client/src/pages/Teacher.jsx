
import { useEffect, useState } from 'react';
import SalarySamary from '../components/SalarySummery';
import TeacherFields from '../components/TeacherFields';
import LoderSpinner from '../components/LoderSpinner';
const Teacher = () => {
    const [salary, setSalary] = useState([])
    const [month, setMonth] = useState([])
    const [loading, setLoading] = useState(false)
    

    useEffect(() => {
        setLoading(true)
        fetch('https://fhb-api.vercel.app/salary')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setSalary(data)
            })
            setTimeout(() => {
                setLoading(false)
            }, 2000)
    }, [])
    useEffect(() => {
        setLoading(true)
        fetch('https://fhb-api.vercel.app/month')
        .then(res => {
            return res.json()
        })
        .then(data => {
            setMonth(data)
        })
            setTimeout(() => {
                setLoading(false)
            }, 2000)
            
    }, [])


    return (
        <>
        {loading && <LoderSpinner />}
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