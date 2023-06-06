import { View, Text, StyleSheet, ActivityIndicator, ScrollView} from 'react-native'
import React, { useState } from 'react'
import Logo from './authLogo'
import AuthForm from './authForm'
const AuthComponent = ({props, navigation}: any) => {
  const [loading, setLoading] = useState<boolean>(false)
  const goNext = () => {
    navigation.navigate('App')
  }
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

export default AuthComponent;
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