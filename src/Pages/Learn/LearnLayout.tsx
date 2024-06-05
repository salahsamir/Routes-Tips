
import { Outlet } from 'react-router-dom'

import LearnNav from './LearnNav'


function LearnLayout() {
  return (
    <>
    
  <div className="flex p-3">
    
    <LearnNav/> 
    
     <div className="m-4">
     <Outlet/>
     </div>
  </div>
    </>
  )
}

export default LearnLayout