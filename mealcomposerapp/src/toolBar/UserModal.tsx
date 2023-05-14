import React, {ChangeEvent, useState} from "react";

const UserModal = (props: { onClickF: Function, bValue: string, setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const [login, setLogin] = useState("")
    const [pass, setPass] = useState("")
    const loginOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value)
    }
    const passOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPass(e.target.value)
    }
    return <div onClick={()=>props.setIsModalOpen(false)} className={"fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-700/40 z-10"}>
        <div onClick={(e)=> e.stopPropagation()} className={"bg-dutchWhite py-8 px-4 rounded-xl z-20"}>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                           htmlFor="login">
                        Login
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input
                        value={login}
                        onChange={(e) => loginOnChange(e)}
                        className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-teal-500"
                        id="login" type="text"/>
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                           htmlFor="inline-password">
                        Password
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input
                        value={pass}
                        onChange={(e) => passOnChange(e)}
                        className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-teal-500"
                        id="inline-password" type="password" placeholder="******************"/>
                </div>
            </div>
            <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                    <button
                        onClick={props.onClickF(login, pass)}
                        className="shadow bg-teal-500 hover:bg-teal-700 focus:shadow-outline focus:outline-none text-dutchWhite font-bold py-2 px-4 rounded"
                        type="button">
                        {props.bValue}
                    </button>
                </div>
            </div>
        </div>
    </div>
}
export default UserModal