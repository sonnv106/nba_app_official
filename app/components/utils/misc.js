import AsyncStorage from "@react-native-async-storage/async-storage";
export const FIREBASEURL = `https://rn-nba-app-4db5c.firebaseapp.com`;
export const APIKEY = `AIzaSyAzdZ5HsJ0VF68tJhJP2UqBQcmW_IFS8Vs`;
export const SIGNUP = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${APIKEY}`;
export const SIGNIN = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${APIKEY}`;
export const REFRESH = ``;

export const setTokens =(values, cb) => {
    const dateNow = new Date();
    const expiration = dateNow.getTime() + (3600*1000);
    AsyncStorage.multiSet([
        ['@nba_app@token',values.token],
        ['@nba_app@refreshToken',values.refToken],
        ['@nba_app@expireToken',expiration.toString()],
        ['@nba_app@uid',values.uid]

    ]).then((response=> {
        cb()
    }))
}
export const getTokens = (cb) => {
    AsyncStorage.multiGet([
        '@nba_app@token',
        '@nba_app@refreshToken',
        '@nba_app@expireToken',
        '@nba_app@uid'
    ]).then((value)=>{
        cb(value)
    })
}