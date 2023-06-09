import { SIGN_IN, SIGN_UP } from "../types"
import { SIGNIN, SIGNUP, FIREBASEURL, REFRESH } from "../../components/utils/misc"
import axios from "axios"
const signIn = (data) => {
    const request = axios({
        method: 'POST',
        url: SIGNIN,
        data: {
            email: data.email,
            password: data.password,
            returnSecureToken: true
        },
        headers: {
            'Content-Type': 'application/json',

        }
    }).then(response => {
        return response.data
    }).catch(e => {
        return false
    })
    return {
        type: SIGN_IN,
        payload: request
    }
}
const signUp = (data) =>{
    const request = axios({
        method: 'POST',
        url: SIGNUP,
        data: {
            email: data.email,
            password: data.password,
            returnSecureToken: true
        },
        headers: {
            'Content-Type': 'application/json',

        }
    }).then(response => {
        console.log(response.data)
        return response.data
    }).catch(e => {
        return false
    })
    return {
        type: SIGN_UP,
        payload: request
    }

}
export {signIn, signUp}