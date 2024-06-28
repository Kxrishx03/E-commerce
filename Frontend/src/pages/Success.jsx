import { useLocation } from "react-router-dom"

export function Success(){
    const location = useLocation();
    console.log(location);
    return (
        <div>
            SUCCESS!
        </div>
    )
}