import { Navigate, Outlet } from "react-router-dom"


export const ProtectedRoute = ({
    isAllowed,
    redirectTo = '/Home',
    children
}) => {
    if (!isAllowed){
        return <Navigate to={redirectTo}/>
    }

    return children ? children : <Outlet/>
}