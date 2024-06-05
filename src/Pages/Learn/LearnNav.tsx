

import { NavLink } from 'react-router-dom'

const navigation = [
  { name: 'learn ', href: ''},
  { name: 'Instalintion', href: 'install' },
  { name: 'Doc', href: 'doc' },

 
]


export default function LearnNav() {
  return (
    
   <aside>
     <nav className="flex flex-col  items-center">

{navigation.map((item) => (
  <NavLink
    key={item.name}
    to={item.href}
    end
    className='text-slate-100 text-3xl font-blod m-3  p-3  w-40  '
  >
    {item.name}
  </NavLink>
))}
</nav>
   </aside>
  )
}
