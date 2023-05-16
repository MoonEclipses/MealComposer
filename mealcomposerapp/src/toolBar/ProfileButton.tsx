import React from "react";
import {UserIcon} from "@heroicons/react/24/solid";
import {PageProps} from "../App";

const ProfileButton = (props: PageProps) => {
    //TODO add redirect
    return <button onClick={()=>props.setCurrentPage("user")} className={"bg-teal-500 hover:bg-teal-700 py-4 px-4 h-28 w-28 rounded-full"}><UserIcon className={"h-18 w-18 text-dutchWhite"}/></button>
}
export default ProfileButton