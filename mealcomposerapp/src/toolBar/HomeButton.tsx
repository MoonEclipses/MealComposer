import React from "react";
import {HomeIcon} from "@heroicons/react/24/solid";
import {PageProps} from "../App";

const HomeButton = (props: PageProps) => {
    //TODO add redirect
    return <button onClick={() => props.setCurrentPage("main")}
                   className={"bg-teal-500 hover:bg-teal-700 py-4 px-4 h-28 w-28 rounded-full"}><HomeIcon
        className={"h-18 w-18 text-dutchWhite"}/></button>
}
export default HomeButton