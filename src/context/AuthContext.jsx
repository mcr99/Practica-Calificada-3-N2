import { createContext, useState } from "react";

export const AuthContext = createContext()

export function AuthProvider({children}) {
    const[user, setUser] = useState(null)

    function login (email, password) {
        const dataBase = [
            {
                email: "admin@admin.com",
                password: "123456",
                username: "Cat",
                img: "cat.png",
                role: "Admin Account"
            },
            {
                email: "user@user.com",
                password: "987654",
                username: "Panda",
                img: "panda.png",
                role: "User Account"
            },
            {
                email: "guest@guest.com",
                password: "123987",
                username: "Rabbit",
                img: "rabbit.png",
                role: "User Account"
            }
        ];

        const current = dataBase.find(user => user.email === email)
        if (current?.password === password){
            setUser(current)
            return true
        }
    }

    function logout () {
        setUser(null)
    }

    return(
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}