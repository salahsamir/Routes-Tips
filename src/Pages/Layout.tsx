import { Outlet } from "react-router-dom"
import Nav from "./Nav"


function Layout() {
  return (
    <>
    <Nav/>
    <div className="m-5">
    <Outlet/>
    </div>
    </>
  )
}

export default Layout