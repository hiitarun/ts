import { Outlet , Navigate} from "react-router-dom";


interface ProtectedProps {
    isLoggedIn: boolean;
  }

const Protected: React.FC<ProtectedProps> = ({ isLoggedIn }) =>{

   
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
            isLoggedIn ? second() : first()
        }
         
        
    
        </>
    )
}
export default Protected