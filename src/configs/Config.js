import axios from 'axios'
import { BASE_URL } from './BaseUrl'
const token = localStorage.getItem("__token__")
export const Config = {
    doGet:(url, valid)=>axios.get(
        `${BASE_URL}${url}`, valid!==""?token:''
    ),
    doPost:(url, data, valid)=>axios.post(
        `${BASE_URL}${url}`, data, valid!==""?token:''
    ),
    doPut:(url, id, data, valid)=>axios.put(
        `${BASE_URL}${url}/${id}`, data, valid!==""?token:''
    ),
    doDelete:(url, id, valid)=>axios.delete(
        `${BASE_URL}${url}/${id}`, valid!==""?token:''
    ),
    doGetOne: (url, id, valid)=>axios.get(
        `${BASE_URL}${url}/${id}`, valid!==""?token:''
    )
}