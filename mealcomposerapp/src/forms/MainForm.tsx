import React, {useState} from "react";

const MainForm = () => {
    const [dayLimit, setDayLimit] = useState("")
    const [priceLimit, setPriceLimit] = useState("")
    const dlOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDayLimit(e.target.value)
    }
    const plOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPriceLimit(e.target.value)
    }
    const generate = () => {
        const obj = {//TODO Add user id
            dayLimit,
            priceLimit
        }
        const serialized = JSON.stringify(obj)//TODO Send string on server
    }
    return (
        <div className={"main-form"}>
            <input onChange={(e) => dlOnChange(e)} value={dayLimit} type={"text"} name={"dayLimit"}/>
            <input onChange={(e) => plOnChange(e)} value={priceLimit} type={"text"} name={"priceLimit"}/>
            <button onClick={() => generate()}>Generate</button>
        </div>
    )
}

export default MainForm
