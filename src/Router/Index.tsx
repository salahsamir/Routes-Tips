import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Layout from "../Pages/Layout"
import Home from "../Pages/Home"
import About from "../Pages/About"
import Index from "../Pages/Index"
import LearnLayout from "../Pages/Learn/LearnLayout"
import Install from "../Pages/Learn/Instalition"
import Doc from "../Pages/Learn/Doc"
import LearnIndex from "../Pages/Learn/LearnIndex"
import Login from "../Pages/Login"
import ProtectedRoute from "../Auth/ProtectedRoute"
import ErrorHandling from "../Errors/ErrorHandling"


let isAllow=true
let UserData:{email:string}|null=isAllow?{email:"salahsaamir707@gmail.com"}:null;
let router=createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path="/" errorElement={<ErrorHandling/>} element={<Layout/>}>
        <Route index element={<Index/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="login" element={<ProtectedRoute isAllow={!isAllow} data={UserData}  path="/learn" children={<Login/>}/>}/>

        <Route path="about" element={<About/>}/>
        <Route path="learn"  element={<ProtectedRoute isAllow={isAllow} data={UserData} path="/login" children={<LearnLayout/>}/>}>
        <Route index element={<LearnIndex/>}/>
        <Route path="install"  element={<Install/>}/>
        <Route path="doc" element={<Doc/>}/>
        </Route>
        </Route>
        <Route path="*" element={<ErrorHandling title="404" state={404}/>}/>
        
       
        </>
    )
)

export default router