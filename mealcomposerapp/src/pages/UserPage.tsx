import {PageProps} from "../App";
import ToolBar from "../toolBar/ToolBar";
import AddClient from "../client/AddClient";
import ClientList from "../client/ClientList";

const UserPage = (props: PageProps) => {
    return (<div className={"pages h-screen"}><ToolBar {...props}/><AddClient {...props}/><ClientList/></div>)
}
export default UserPage