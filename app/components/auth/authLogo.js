import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Logo from '../../assets/images/nba_login_logo.png'
const authLogo = () => {
  return (
    <View style={styles.bgLogo}>
      <Image 
        source={Logo}
        resizeMode='contain'
        style={{
            width: 170,
            height: 150
        }}
      />

    </View>
  )
}

export default authLogo

const styles = StyleSheet.create({
    bgLogo: {
        alignItems: 'center'
    }
})