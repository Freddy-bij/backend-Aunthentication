import  {create} from "zustand";
import axios from "axios";


const API_URL = "http://localhost:5000/api/auth";

axios.defaults.withCredentials = true;




export const useAuthStore = create((set) =>({
    user:null,
    isAuthenticated:false,
    error:null,
    isLoading:false,
    isCheckingAuth:true,
    
    signup: async(email,password,name) =>{
        set({isLoading:true,error:null});
        try {
            const response = axios.post(`${API_URL}/signup`, { email , password, name });
            set({user:(await response).data.user, isAuthenticated: true, isLoading:false });
        }catch(error) {
            set({ error: error.response.data.message || "Error signing", isLoading: false});
            throw error;
        }
    },
    login: async(email,password) =>{
        set({isLoading:true,error:null});
        try {
            const response = axios.post(`${API_URL}/login`, { email,password});
            set({user:(await response).data.user, isAuthenticated: true, isLoading:false});
            console.log(user)
            throw error
        } catch (error) {
            set({ error:error.response.data.message || "Error signing", isLoading:false})
        }
    },


}))


