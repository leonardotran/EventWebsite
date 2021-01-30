import axios from 'axios'
import store from '../store'
import { logout } from '../store/actions/auth'

const API = axios.create({
    baseURL: 'https://atex.org/api' || 'http://localhost:7002/api',
    withCredentials: false,
    headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token') || ''}`,
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
    },

})

API.interceptors.response.use(
    res => {
        console.log("response interceptoors", res); 
        return res
    },
    err => {

        console.log("error interceptoors", err.response)
        if (err.response.status !== 401) {
            throw err
        }

        if (typeof err.response.data.error.name !== 'undefined') {
            if (err.response.data.error.name === 'TokenExpiredError') {
                store.dispatch(logout())
                throw err
            }
        }
    }
)

export default API