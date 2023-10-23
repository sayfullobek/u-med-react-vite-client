import { Config } from "../Config"

export const GetAll = async (url, valid) => {
    try{
        const res = await Config.doGet(url, valid!==""?valid:'')
        return res.data.getAll
    }catch (err) {
        
    }
}