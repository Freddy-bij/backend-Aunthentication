import { motion } from "framer-motion"
import { useState } from "react"
import { CiUser } from "react-icons/ci";
import { IoMailOutline } from "react-icons/io5";
import { LuLockKeyhole } from "react-icons/lu";
import {Link} from "react-router-dom"
import PasswordStrengthMetter from "../Component/PasswordStrengthMetter";


const SignUpages = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password , setPassword] = useState("")

  const handleSignUp = (e) => {
    e.preventDefault()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md py-4-   bg-gray-900/30 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflor-hidden"
    >

      <div>
        <h1
          className="text-xl mt-6 text-green-400 font-bold mb-6 text-center "
        >
          Create Account
        </h1>
      </div>

      <div className="mx-2">
         <form onSubmit={handleSignUp} className="flex flex-col  gap-2">

        <div className=" flex items-center " >
          <CiUser className="absolute left-3 z-10 text-green-600" />
          <input
            className="relative pl-8 bg-gray-900/30 py-2 outline-none text-gray-200 "
            type="text"
            placeholder="full name"
            value={name}
            onChange={(e) => setName(e.target.value)}


          />

        </div>

        <div className=" flex items-center " >
          <IoMailOutline  className="absolute left-3 z-10 text-green-600" />
          <input
            className="relative pl-8 bg-gray-900/30 py-2 outline-none text-gray-200 "
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}


          />

        </div>

        <div className=" flex items-center " >
          < LuLockKeyhole className="absolute left-3 z-10 text-green-600" />
          <input
            className="relative pl-8 bg-gray-900/30 py-2 outline-none text-gray-200 "
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}


          />

        </div>

       <PasswordStrengthMetter password={password}/>

        <motion.button className="mt-5 w-full py-3 px-4 bg-green-700 text-white font-bold rounded-lg shadow-lg
         hover:from-green-600 hover:to-emerald-700 focus:outline-none 
         focus:ring-2 focus:ring-green-500 focus:ring-offset-2 
         focus:ring-offset-gray-900 transition duration-200 "

         whileHover={{scale:1.02}}
         whileTap={{scale:0.98}}
         type="submit"
        >Sign Up</motion.button>
      </form>
      </div>
     

      <div className=" px-8 py-4 bg-gray-900/50 mt-6 flex justify-center">

      <p className="text-sm text-gray-400">  
        Aldrady have an account?{" "}
        <Link to="/login" className="text-green-400 hover:underline">Login</Link>
      </p>

      </div>
    </motion.div>
  )
}

export default SignUpages