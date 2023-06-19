import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { getGames } from '../../store/actions/game_actions'

class GamesComponent extends React.Component{
  componentDidMount(){
    this.props.dispatch(getGames())
  }
  render(){
    return (
      <View>
        <Text>GamesComponent</Text>
      </View>
    )  
  }
}
const mapStateToProps = (state)=>{
  console.log('state', state)
  return {
    Games: state.Games
  }
}
export default connect(mapStateToProps)(GamesComponent)

const styles = StyleSheet.create({})