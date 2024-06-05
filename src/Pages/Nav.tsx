

import { NavLink } from 'react-router-dom'

const navigation = [
  { name: 'Index', href: '' },
  { name: 'Home', href: 'home' },
  { name: 'About', href: 'about' },
  { name: 'Learn', href: 'learn' },
  { name: 'Login', href: 'login' },



 
]


export default function Nav() {
  return (
    
    <nav className="flex space-x-5 justify-center">

    {navigation.map((item) => (
      <NavLink
        key={item.name}
      
        to={item.href}
        className='text-slate-100 text-4xl text-center font-blod'
       
      >
        {item.name}
      </NavLink>
    ))}
  </nav>
  )
}
