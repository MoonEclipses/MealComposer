import React, {useState} from "react";
import {PageProps} from "../App";
import ModalList from "../client/ModalList";

const ClientCreationPage = (props: PageProps) => {
    const getDietList = () => {
        return [{id: 1, name: "diet1"}, {id: 2, name: "diet2"}]
    }
    const getRestrictionList = () => {
        return [{id: 1, name: "rest1"}, {id: 2, name: "rest2"}]
    }
    let getList = getDietList
    const [isVisible, setIsVisible] = useState(false)
    return (<div className={"pages h-screen"}>
        <div
            className={"border-r-solid border-l-solid border-l-black border-r-black border-l-4 border-r-4 h-full mx-auto w-3/4 pt-4"}>
            <div className={"h-4/5 mx-6 border-t-solid border-t-black border-t-4 grid grid-cols-2 py-4"}>
                <div
                    className={"border-r-solid border-r-black border-r-2 h-full px-28 py-6 flex flex-col gap-3 text-xl"}>
                    <input type={"text"} placeholder={"Name"}
                           className={"appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-teal-500"}/>
                    <input type={"text"} placeholder={"Surname"}
                           className={"appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-teal-500"}/>
                    <label><input type={"number"}
                                  className={"w-1/4 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-teal-500"}/> Age</label>
                    <label><input type={"number"}
                                  className={"w-1/4 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-teal-500"}/> Height</label>
                    <label><input type={"number"}
                                  className={"w-1/4 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-teal-500"}/> Weight</label>
                    <label className={"w-full"}>Activity level <select
                        className={"w-max border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-teal-500"}>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </select></label>
                </div>
                <div
                    className={"border-l-solid border-l-black border-l-2 h-full px-28 py-6 flex flex-col gap-3 text-xl"}>
                    <div
                        className={"flex items-center justify-between border-b-solid border-b-black border-b-4 mb-3 py-2"}>
                        Restrictions <button onClick={() => {
                        setIsVisible(true);
                        getList = getRestrictionList
                    }} className={"bg-teal-500 hover:bg-teal-700 text-dutchWhite font-bold py-2 px-4 rounded w-max"}>Add
                        restrictions</button>
                    </div>
                    <div
                        className={"flex items-center justify-between border-b-solid border-b-black border-b-4 mb-3 py-2"}>
                        Diets <button onClick={() => {
                        setIsVisible(true);
                        getList = getRestrictionList
                    }} className={"bg-teal-500 hover:bg-teal-700 text-dutchWhite font-bold py-2 px-4 rounded w-max"}>Add
                        diets</button>
                    </div>
                </div>
            </div>
            <div className={"h-1/5 bg-gray-200 flex justify-center gap-12 items-center text-2xl"}>
                <button
                    className={"bg-red-500 hover:bg-red-700 text-dutchWhite font-bold py-2 px-4 rounded w-1/5"}>Cancel
                </button>
                <button
                    className={"bg-teal-500 hover:bg-teal-700 text-dutchWhite font-bold py-2 px-4 rounded w-1/5"}>Save
                </button>
            </div>
        </div>
        <ModalList getList={getList} isVisible={isVisible} setIsVisible={setIsVisible}/>
    </div>)
}
export default ClientCreationPage