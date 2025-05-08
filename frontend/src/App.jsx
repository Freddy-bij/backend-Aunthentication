import FloatingCheaped from "./Component/FloatingCheaped"
import {Routes , Route} from "react-router-dom"
import Home from "./Pages/Home"
import SignUpages from "./Pages/SignUpages"
import LoginPages from "./Pages/LoginPages"
import { useAuthStore } from "./store/authStore"
import { use, useEffect } from "react"


const App = () => {
  const {isCheckingAuth, checkAuth, isAuthenticated, user} = useAuthStore();

  useEffect(() =>{
    checkAuth();
  },[checkAuth]);

  console.log("isauthenticated", isAuthenticated);
  console.log("user", use)
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 flex items-center justify-center relative overflow-hidden ">
         <FloatingCheaped color="big-green-500 "size="w-64 h-64" top="-5%" left="10%" delay={0} />
         <FloatingCheaped color="big-green-500 "size="w-64 h-64" top="-5%" left="10%" delay={0} />
         <FloatingCheaped color="big-green-500 "size="w-64 h-64" top="-5%" left="10%" delay={0} />

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<SignUpages/>}/>
          <Route path="/login" element={<LoginPages/>}/>
        </Routes>
    </div>
  )
}

export default App