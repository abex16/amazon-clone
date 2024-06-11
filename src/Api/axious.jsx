import axios from "axios";
const axiosInstance=axios.create({
    
baseURL:"http://localhost:5009"

})
export  {axiosInstance}