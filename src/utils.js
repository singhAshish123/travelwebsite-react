import axios from "axios"
const hotelUrl = 'http://127.0.0.1:8000/api'
 export const customFetch = axios.create({
    baseURL:hotelUrl
})