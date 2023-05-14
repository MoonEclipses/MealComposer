import {PlusIcon} from "@heroicons/react/24/solid";
import {PageProps} from "../App";

const AddClient = (props: PageProps) => {
    return <button onClick={() => props.setCurrentPage("creation")}
                   className={"bg-teal-500 hover:bg-teal-700 py-2 px-2 h-16 w-16 rounded-full"}><PlusIcon
        className={"h-12 w-12 text-dutchWhite"}/></button>
}
export default AddClient