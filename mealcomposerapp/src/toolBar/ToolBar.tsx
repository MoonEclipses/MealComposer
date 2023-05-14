import React from "react";
import ProfileButton from "./ProfileButton";
import {PageProps} from "../App";
import HomeButton from "./HomeButton";
import LogIn from "./LogIn";
import Register from "./Register";
import LogOut from "./LogOut";

const ToolBar = (props: PageProps) => {
    return <div className={"h-1/5"}>
        <div className={"flex py-4 px-8"}><HomeButton {...props}/>
            <div className={"flex justify-end h-3/4 w-full gap-0.5"}><ProfileButton {...props}/></div>
        </div>
        <div className={"flex justify-end h-1/4 w-full px-8"}><LogIn/><Register/><LogOut/></div>
    </div>
}
export default ToolBar