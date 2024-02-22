import axios from "axios";

const newRequest = axios.create({
    baseURL:"https://backends-k9wj.onrender.com", withCredentials:true
})

export default newRequest
