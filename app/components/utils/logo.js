import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from '../../assets/images/nba_login_logo.png'
const LogoTitle = () => {
  return (
    <Image
        source={Logo}
        style = {{
            width: 70,
            height: 35
        }}
        resizeMode='contain'
    />
  )
}

export default LogoTitle

const styles = StyleSheet.create({})