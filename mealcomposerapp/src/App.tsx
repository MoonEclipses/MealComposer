import React, {useState} from 'react';
import './App.css';
import MainPage from "./pages/MainPage";
import "./global.css"
import UserPage from "./pages/UserPage";
import ClientCreationPage from "./pages/ClientCreationPage";

const pages = {
    main: MainPage,
    user: UserPage,
    creation: ClientCreationPage,
}
export type PageProps = {
    setCurrentPage:  React.Dispatch<React.SetStateAction<string>>
}

function App() {
    const [currentPage, setCurrentPage] = useState("main")
    const Page = pages[currentPage as keyof typeof pages]
    return <Page setCurrentPage={setCurrentPage}/>
}

export default App;
