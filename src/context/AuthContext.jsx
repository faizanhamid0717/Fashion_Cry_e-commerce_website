import { createContext, useState } from "react"

export const AuthContext = createContext()

function AuthContextProvider({children}){
    const [isAuth,setIsAuth] = useState(false)
    const [token,setToken]=useState('')
    

const Login=(token)=>{
    setIsAuth(true)
    setToken(token)
}

const Logout=()=>{
    setIsAuth(false)
    setToken('')
}



    return(
        <AuthContext.Provider value={{isAuth,token,Login,Logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider