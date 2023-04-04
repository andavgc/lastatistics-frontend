import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext();
UserContext.displayName = "Usuário";

export const UserProvider = ({children}) => {
    const [user, setUser] = useState("");
    const [period, setPeriod] = useState("overall")
    const [periodValue, setPeriodValue] = useState("all time")
    const [limit, setLimit] = useState("")
    return (
        <UserContext.Provider value={{user, setUser, periodValue, setPeriodValue, limit, setLimit, period, setPeriod}}>
            {children}
        </UserContext.Provider>
    )
}