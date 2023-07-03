import axios from 'axios'
import {config} from '../config';

export async function fetchData() 
{
    try {
        const response = await axios.get(config.apiEndpoint)
        return response.data
    }catch (error){
        console.log(error)
        return null
    }
}