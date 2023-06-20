import { View, StyleSheet, ActivityIndicator, ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import Logo from './authLogo'
import AuthForm from './authForm';
import { getTokens, setTokens } from '../utils/misc';
import { connect, useSelector } from 'react-redux';
import {autoSignIn} from '../../store/actions/user_actions';
import { bindActionCreators } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
class AuthComponent extends React.Component{
  // const [loading, setLoading] = useState<boolean>(true)
  state = {
    loading: true
  }
  componentDidMount(): void {
    getTokens((value:any[]) => {
      if(value[0][1] === null){
        this.setState({loading: false})
      }else{
        this.props.autoSignIn(value[1][1]).then(()=>{
          if(!this.props.User?.auth?.token){
            this.setState({loading: false})
          }else{
            setTokens(this.props.User.auth, ()=>{
              this.goNext()
            })
          }
        })
      }
    });
  }
  render(): React.ReactNode {
    if(this.state.loading){
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
          <AuthForm goNext={this.goNext}/>
        </View>
      </ScrollView>
    )
  }
  goNext = () => {
    this.props.navigation.navigate('App')
  }
}
function mapStateToProps(state: any){
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