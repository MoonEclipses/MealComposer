import React from "react";
import ToolBar from "../toolBar/ToolBar";
import MainForm from "../forms/MainForm";
import {PageProps} from "../App";

const MainPage = (props: PageProps) => {
    return (<div className={"pages h-screen"}><ToolBar {...props}/><MainForm/></div>)
}
export default MainPage
