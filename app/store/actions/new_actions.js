import { GET_NEWS } from "../types";
import axios from "axios";
import { FIREBASEREALTIMEURL } from "../../components/utils/misc";

export const getNews = () => {
    const request = axios({
        method: 'GET',
        url: `${FIREBASEREALTIMEURL}/news.json`
    }).then(response =>{
        const articles = [];
        for(let key in response.data){
            articles.push({
                ...response.data[key],
                id: key
            })
        }
        return articles;
    }).catch(()=>{
        return false
    })
    return {
        type: GET_NEWS,
        payload: request
    }
}