import {useState} from "react";
import UserModal from "./UserModal";

const Register = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const onclickF = (login: string, password: string) => {
        console.log(login, password)
        //TODO register action
    }
    return (
        <>
            <button
                onClick={() => setIsModalOpen(true)}
                className={"bg-teal-500 hover:bg-teal-700 text-xl text-dutchWhite font-bold py-2 px-4 rounded-r-md"}>Register
            </button>
            {isModalOpen ? <UserModal setIsModalOpen={setIsModalOpen} bValue={"Register"} onClickF={onclickF}/> : <></>}
        </>
    )}
export default Register