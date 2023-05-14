import {useState} from "react";

type ModalListProps = {
    getList: Function
    isVisible: boolean
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalList = (props: ModalListProps) => {
    const [choosen, setChoosen] = useState<number[]>([])
    const remove = (elem: number) => {
        setChoosen(
            choosen.filter(x =>
                x !== elem))
    }
    const add = (elem: number) => {
        setChoosen([...choosen, elem])
    }
    return <div onClick={() => props.setIsVisible(false)}
                className={(props.isVisible ? "" : "hidden") + " fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-700/40 z-10"}>
        <div onClick={(e) => e.stopPropagation()}
             className={"bg-dutchWhite rounded-xl z-20 h-4/5 w-1/3 overflow-y-scroll"}>
            {props.getList().map((elem: { id: number, name: string }, ind: number) => {
                return <div onClick={() => {
                    choosen.includes(elem.id) ? remove(elem.id) : add(elem.id)
                }} className={(choosen.includes(elem.id) ?"hover:text-gray":"bg-teal-500 text-dutchWhite") + " text-4xl h-20 leading-loose cursor-pointer"} key={ind}>{elem.name}</div>
            })}
        </div>
    </div>
}
export default ModalList