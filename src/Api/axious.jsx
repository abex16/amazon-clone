import axios from "axios";
const axiosInstance=axios.create({
    
//baseURL:"http://localhost:5009",
baseURL:"https://amazon2-clone-deploy-1.onrender.com"
})
export  {axiosInstance}