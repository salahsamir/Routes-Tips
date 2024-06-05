import { useLocation } from "react-router-dom"
import { LoginInputs } from "../Interfaces/Login"
import Buttons from "../ui/Buttons"
import Inputs from "../ui/Inputs"

function Login() {

  let location=useLocation()
  console.log(location);
  
  return (
    <div className="flex flex-col  justify-center items-center py-5 ">
        {LoginInputs.map((item)=>{
            return(
                <>
                <Inputs key={item.name} {...item}/>
                
                </>

            )
        })
        }
      
        <Buttons bgColor="bg-gray-400 hover:bg-gray-700 mt-2 " width="w-fit" >Login</Buttons>
    </div>
  )
}

export default Login