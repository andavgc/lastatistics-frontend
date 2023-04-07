import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext();
UserContext.displayName = "Usuário";

export const UserProvider = ({children}) => {
    const [user, setUser] = useState("");
    const [period, setPeriod] = useState("overall")
    const [periodValue, setPeriodValue] = useState("all time")
    const [limit, setLimit] = useState("")
    const [method, setMethod] = useState("gettoptracks")
    const [methodValue, setMethodValue] = useState("top tracks")
    const [noData, setNoData] = useState(false)
    return (
        <UserContext.Provider 
        value={{
            user, 
            setUser, 
            periodValue, 
            setPeriodValue, 
            limit, 
            setLimit, 
            period, 
            setPeriod, 
            method, 
            setMethod, 
            methodValue, 
            setMethodValue, 
            noData, 
            setNoData}}>
            {children}
        </UserContext.Provider>
    )
}