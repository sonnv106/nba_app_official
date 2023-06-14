import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { getNews } from '../../store/actions/new_actions'
import { connect, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
const NewsComponent = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getNews())
  },[])
  return (
    <View style={styles.container}>
      <Text>NewsComponent</Text>
    </View>
  )
}

const mapStateToProps = (state)=>{
  console.log("state news", state)
  return {
    News: state.News
  }
}
const mapDispatchToProps = (dispatch)=>{
  return bindActionCreators({getNews}, dispatch)
}
export default connect(mapStateToProps)(NewsComponent)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})