import { View, StyleSheet, ActivityIndicator, ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import Logo from './authLogo'
import AuthForm from './authForm';
import { getTokens, setTokens } from '../utils/misc';
import { connect, useSelector } from 'react-redux';
import {autoSignIn} from '../../store/actions/user_actions';
import { bindActionCreators } from 'redux';
const AuthComponent = (props: any) => {
  const [loading, setLoading] = useState<boolean>(true)
  const goNext = () => {
    props.navigation.navigate('App')
  }
  useEffect(()=> { 
    getTokens((value:any[]) => {
      if(value[0][1] === null){
        setLoading(false)
      }else{
        props.autoSignIn(value[1][1]).then(()=>{
          if(!props.User?.auth?.token){
            setLoading(false)
          }else{
            setTokens(props.User.auth, ()=>{
              goNext()
            })
          }
        })
      }
    });
  }, [props.User?.auth?.token])
  if(loading){
    return(
      <View style={styles.loading}>
        <ActivityIndicator size={'small'}/>
      </View>
    )
  }
  return (
    <ScrollView style = {styles.container}>
      <View>
        <Logo/>
        <AuthForm goNext={goNext}/>
      </View>
    </ScrollView>
  )
}
const mapStateToProps = (state: any) =>{
  return {
    User: state.User
  }
}
const mapDispatchToProps = (dispatch:any) =>{
  return bindActionCreators({autoSignIn}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(AuthComponent);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: '#1D42BA'
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  }
})