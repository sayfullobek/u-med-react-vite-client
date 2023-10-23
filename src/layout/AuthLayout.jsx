import { Outlet } from "react-router-dom"

export const AuthLayout = () => {
    return(
        <div className="w-100 p-3" style={{height:'100vh'}}>
            <Outlet/>
        </div>
    )
}