import { Outlet , Navigate} from "react-router-dom";
import { useState } from "react";
function Protected (){
    const [info,setInfo]=useState(true)

    const second = ()=>{
        return(
            <Outlet />
        )
    }


    const first = ()=>{
          return <Navigate to={"/"} />
    }

    return(
        <>
        {
            info ? second() : first()
        }

        
    
        </>
    )
}
export default Protected