import {
  ActivityIndicator,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/Ionicons';
import {getTokens, setTokens} from '../utils/misc';
import {connect} from 'react-redux';
import {autoSignIn} from '../../store/actions/user_actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
class GameArticleComponent extends React.Component {
  state = {
    loading: true,
    isAuth: true,
  };
  componentDidMount() {
    const user = this.props.User;
    getTokens(value => {
      if (value[0][1] === null) {
        //neu khong co token thi dang nhap
        this.manageState(false, false);
      } else {
        this.props.dispatch(autoSignIn(value[1][1])).then(() => {
          !user.auth.token
            ? this.manageState(false, false)
            : setTokens(user.auth, () => {
                this.manageState(false, true);
              });
        });
      }
    });
  }
  manageState = (loading, isAuth) => {
    this.setState({
      loading,
      isAuth,
    });
  };
  render() {
    const params = this.props.route?.params;
    console.log('params', this.props);
    if (this.state.loading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator size={'small'} />
        </View>
      );
    } else {
      return (
        <ScrollView style={{backgroundColor: '#F0F0F0'}}>
          {this.state.isAuth ? (
            <View style={{height: 250, backgroundColor: 'green'}}>
              <Video
                source={{uri: 'https://cdn.tuoitre.vn/471584752817336320/2023/6/20/photo1687244108995-16872441090641938608563.gif.mp4'}}
                paused={true}
                muted={true}
                controls={true}
                style={{width: '100%', height: 250}}
              />
            </View>
          ) : (
            <View style={styles.notAuth}>
              <Icon name="md-sad" size={80} color="#d5d5d5" />
              <Text style={styles.notAuthText}>
                We are sorry you need to be registered/logged to see this game
              </Text>
              <Button
                title="Login/Register"
                onPress={() => this.props.navigation.navigate('Auth')}
              />
            </View>
          )}
        </ScrollView>
      );
    }
    // return (
    //   <View>
    //     <Text>GameArticleComponent</Text>
    //   </View>
    // )
  }
}
function mapStateToProps(state) {
  console.log('state', state);
  return {
    User: state.User,
  };
}
export default connect(mapStateToProps)(GameArticleComponent);

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notAuth: {
    flex: 1,
    margin: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notAuthText: {
    fontFamily: 'Roboto-Bold',
    textAlign: 'center',
  },
});
