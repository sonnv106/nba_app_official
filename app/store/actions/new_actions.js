import { GET_NEWS } from "../types";
import axios from "axios";
import { FIREBASEURL } from "../../components/utils/misc";

export const getNews = () => {
    return {
        type: GET_NEWS,
        payload: {
            news: 'something'
        }
    }
}