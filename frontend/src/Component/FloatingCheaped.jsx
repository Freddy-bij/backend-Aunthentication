import { motion } from "framer-motion"

const FloatingCheaped = ({color , size, left , top , delay}) => {
  return (
    <motion.div
    className={` absolute rounded-full ${color} ${size} opacity-20 blur-xl ${left} ${top}  `}
    style={{top , left}}
    animate={{
      y:["0%" , "100%" , "0%"],
      x:["0%" , "100%" , "0%"],
      rotate:[0,360]
    }}

    transition={{
      duration: 20,
      ease:"linear",
      repeat: Infinity,
      delay
    }}

    aria-hidden="true"
    >FloatingCheaped</motion.div>
  )
}

export default FloatingCheaped