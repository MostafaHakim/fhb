import { useEffect, useState } from "react";
import HomePersonnelCount from "../components/HomePersonnelCount";
import AccountsStatistics from "../components/AccountsStatistics";


const Home = () => {
    const [user, setUser] = useState([])
    const [management, setManagement] = useState([])
    const [day, setDay] = useState([])
    const [morning, setMorninng] = useState([])
    const [others, setOthers] = useState([])




    useEffect(() => {
        fetch('http://localhost:4000/teacher')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setUser(data)
            })
    }, [day])



    useEffect(() => {
        user.filter((item) => {
            if (item.tShift == "Management") {
                return item
            }
        }).filter((item, i) => {
            setManagement(i + 1)
        })
        user.filter((item) => {
            if (item.tShift == "Day") {
                return item
            }
        }).filter((item, i) => {
            setDay(i + 1)
        })
        user.filter((item) => {
            if (item.tShift == "Morning") {
                return item
            }
        }).filter((item, i) => {
            setMorninng(i + 1)
        })
    }, [user])



    return (
        <>
            <div className="w-full p-4">
            <div className="w-full flex flex-col p-4 items-center justify-center border-[1px] border-sky-500 rounded-xl bg-white">
                <h2 className="text-sm uppercase p-1 border-[1px] border-sky-500 rounded-xl">Summary Of Everything</h2>
                <HomePersonnelCount management={management} day={day} morning={morning} />
                <AccountsStatistics management={management} day={day} morning={morning} />
            </div>
            </div>
        </>
    );
}

export default Home;