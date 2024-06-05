
import { motion } from "framer-motion"
interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    bgColor: string
    children: React.ReactNode,
    width:'w-full'|'w-fit'
}
function Buttons({children,width="w-full", bgColor, ...rest}: IButton ) {
  return (
    <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className={`${bgColor} ${width} max-w-sm px-2 py-2 text-white hover:text-black font-bold rounded-md`}
     {...rest}
  >

    {children}
  </motion.button>
  )
}

export default Buttons