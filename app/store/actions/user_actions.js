import { SIGN_IN, SIGN_UP } from "../types"
const signIn = () => {
    return {
        type: SIGN_IN,
        payload: {
            email: 'sonnguyen@gmail.com',
            token: '123456'
        }
    }
}
const signUp = () =>{
    return {
        type: SIGN_UP,
        payload: {
            email: 'sonnguyen@gmail.com',
            token: '123456'
        }
    }

}
export {signIn, signUp}