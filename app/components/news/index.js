import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NewsComponent = () => {
  return (
    <View style={styles.container}>
      <Text>NewsComponent</Text>
    </View>
  )
}

export default NewsComponent

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})