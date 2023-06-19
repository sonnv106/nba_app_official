import { ActivityIndicator, Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/Ionicons'
class GameArticleComponent extends React.Component {
  state = {
    loading: false,
    isAuth: false
  }
 render(){
  const params = this.props.navigation.state?.params;
  if(this.state.loading){
    return(
      <View style={styles.loading}>
        <ActivityIndicator size={'small'}/>
      </View>
    )
  }else{
    return (
      <ScrollView style={{backgroundColor: '#F0F0F0'}}>
        {
          this.state.isAuth ? 
          <View>
            <Text>Video</Text>
          </View>
          :
          <View style={styles.notAuth}>
            <Icon name='md-sad' size={80} color='#d5d5d5'/>
            <Text style={styles.notAuthText}>
              We are sorry you need to be registered/logged to see this game
            </Text>
            <Button title='Login/Register' 
            onPress={()=>this.props.navigation.navigate('Auth')}/>
          </View>
        }
      </ScrollView>
    )
  }
  // return (
  //   <View>
  //     <Text>GameArticleComponent</Text>
  //   </View>
  // )
 }
}

export default GameArticleComponent

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  notAuth: {
    flex: 1,
    margin: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  notAuthText:{
    fontFamily: 'Roboto-Bold',
    textAlign: 'center'
  }
})