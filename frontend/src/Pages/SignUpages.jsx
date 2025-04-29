import { motion } from "framer-motion"
import { useState } from "react"
import { CiUser } from "react-icons/ci";
import { IoMailOutline } from "react-icons/io5";
import { LuLockKeyhole } from "react-icons/lu";

const SignUpages = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password , setPAssword] = useState("")

  const handleSignUp = (e) => {
    e.preventDefault()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md py-4 px-2  bg-gray-900/30 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflor-hidden"
    >

      <div>
        <h1
          className="text-3xl  font-bold mb-6 text-center bg-gray-900/30-"
        >
          create Account
        </h1>
      </div>
      <form onSubmit={handleSignUp} className="flex flex-col gap-2">

        <div className=" flex items-center " >
          <CiUser className="absolute left-3 z-10 text-green-600" />
          <input
            className="relative pl-8 bg-gray-900/30 outline-none text-gray-200 "
            type="text"
            placeholder="full name"
            value={name}
            onChange={(e) => setName(e.target.value)}


          />

        </div>

        <div className=" flex items-center " >
          <IoMailOutline  className="absolute left-3 z-10 text-green-600" />
          <input
            className="relative pl-8 bg-gray-900/30 outline-none text-gray-200 "
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}


          />

        </div>

        <div className=" flex items-center " >
          < LuLockKeyhole className="absolute left-3 z-10 text-green-600" />
          <input
            className="relative pl-8 bg-gray-900/30 outline-none text-gray-200 "
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPAssword(e.target.value)}


          />

        </div>

      </form>
    </motion.div>
  )
}

export default SignUpages