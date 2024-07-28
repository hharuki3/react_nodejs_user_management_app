import { FC, memo } from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "../components/Home"
import { Login } from "../components/Login"


export const Router:FC = memo(() => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Routes>
                
            </Routes>
        </Routes>
    )
})