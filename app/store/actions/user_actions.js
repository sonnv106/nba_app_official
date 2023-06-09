import { SIGN_IN, SIGN_UP, AUTO_SIGN_IN } from "../types"
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
        return response.data
    }).catch(e => {
        return false
    })
    return {
        type: SIGN_UP,
        payload: request
    }

}
export const autoSignIn = (refToken)=> {
    const request = axios({
        method: 'POST',
        url: REFRESH,
        data: "grant_type=refresh_token&refresh_token="+refToken,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',

        }
    }).then(response => {
        console.log('auto sign in', response)
        return response.data
    }).catch(e => {
        return false
    })
    return {
        type: AUTO_SIGN_IN,
        payload: request
    }
}
export {signIn, signUp}