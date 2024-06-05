import { Navigate } from "react-router-dom"

// condition ,path, children
interface IProps {
   isAllow:Boolean,
   path:string,
   children:React.ReactNode,
   data?:unknown

}
function ProtectedRoute({isAllow, path, children, data}: IProps) {
  return (
    <>
    {isAllow ? children : <Navigate to={path} state={data} />}
    
    
    </>
  )
}

export default ProtectedRoute