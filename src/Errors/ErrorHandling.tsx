import { Link, useLocation } from "react-router-dom"
import Buttons from "../ui/Buttons"

interface IAlerts {
    title?: string
    state?:number
}
function ErrorHandling({title="Server Error",state=500}: IAlerts) {
    let {pathname}=useLocation()
  return (
    <div className="fixed inset-0 flex justify-center items-center text-center h-screen w-screen ">
   
     <div className="text-center">
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-24 text-red-500 m-auto">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
</svg>

    <h2 className="text-slate-200 text-3xl font-bold py-4">
      {title}: {state}
    </h2>
    <h6 className="text-slate-200 text-3xl font-bold">
      path: {pathname}
    </h6>
    <Buttons bgColor="bg-blue-400 hover:bg-blue-700 mt-2">
        <Link to="/" reloadDocument>Home</Link>
    </Buttons>
     </div>
   
    
    
    
    
    </div>
  )
}

export default ErrorHandling