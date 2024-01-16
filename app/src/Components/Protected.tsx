import { Outlet , Navigate} from "react-router-dom";
import { useState } from "react";
function Protected (){
    const [info,setInfo]=useState(false)

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
           <h1>jjjj</h1>
        
    
        </>
    )
}
export default Protected