import React, {useState} from "react";

const MainForm = () => {
    const [timeLimit, setDayLimit] = useState("")
    const [priceLimit, setPriceLimit] = useState("")
    const dlOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDayLimit(e.target.value)
    }
    const plOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPriceLimit(e.target.value)
    }
    const generate = () => {
        const obj = {//TODO Add client ids
            timeLimit,
            priceLimit,
            clientIds: [],
        }
        const serialized = JSON.stringify(obj)//TODO Send string on server
    }
    return (
        <div className="flex items-start justify-center h-4/5 pt-8">
            <div className={"pages-form text-4xl"}>
                <label className={"block text-gray-700 font-bold mb-4"} htmlFor={"dayLimit"}>Time limit</label>
                <input
                    className={"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-12"}
                    onChange={(e) => dlOnChange(e)} value={timeLimit} type={"text"} id={"timeLimit"}
                    name={"timeLimit"}/>
                <label className={"block text-gray-700 font-bold mb-4"} htmlFor={"priceLimit"}>Price
                    limit</label>
                <input
                    className={"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-12"}
                    onChange={(e) => plOnChange(e)} value={priceLimit} type={"text"} id={"priceLimit"}
                    name={"priceLimit"}/>
                <button className={"bg-teal-500 hover:bg-teal-700 text-dutchWhite font-bold py-2 px-4 rounded w-full"}
                        onClick={() => generate()}>Generate
                </button>
            </div>
        </div>
    )
}

export default MainForm
