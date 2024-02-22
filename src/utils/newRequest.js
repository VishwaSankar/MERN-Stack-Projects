import axios from "axios";

const newRequest = axios.create({
    baseURL:"https://backends-k9wj.onrender.com",  credentials:true,methods:["POST","GET"]
})

export default newRequest
