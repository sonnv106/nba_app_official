import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const AuthComponent = () => {
  return (
    <View style = {styles.container}>
      <Text>AuthComponent</Text>
    </View>
  )
}

export default AuthComponent;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})