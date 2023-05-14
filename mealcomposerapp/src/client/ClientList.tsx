import {useEffect, useState} from "react";

const ClientList = () => {
    const [clients, setClients] = useState<{name: string}[]>([])
    useEffect(()=>{
        //TODO Fetch Clients from server
        setClients([{name: "Oleg"}])
    },[])
    return <div>
        {clients.map((client)=>{
            return <div>{client.name}</div>
        })}
    </div>
}
export default ClientList