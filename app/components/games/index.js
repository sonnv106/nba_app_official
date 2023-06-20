import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import {getGames} from '../../store/actions/game_actions';
import moment from 'moment';

class GamesComponent extends React.Component {
  componentDidMount() {
    this.props.dispatch(getGames());
    console.log(this.props);
  }
  showGames = list => {
    return list.games
      ? list.games.map((item, i) => (
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('GameArticle', {
                ...item,
              });
            }}
            key={i}>
            <View style={styles.gameContainer}>
              <View style={styles.gamebox}>
                <Image
                  source={{uri: `${item.awayData.logo}`}}
                  style={{height: 80, width: 80}}
                  resizeMode="contain"
                />
                <Text style={styles.teamRecord}>
                  {item.awayData.wins} - {item.awayData.loss}
                </Text>
              </View>
              <View style={styles.gamebox}>
                <Text style={styles.gameTime}>{item.time}</Text>
                <Text style={styles.gameTime}>{moment(item.date).format('d MMMM')}</Text>
              </View>
              <View style={styles.gamebox}>
                <Image
                  source={{uri: `${item.localData.logo}`}}
                  style={{height: 80, width: 80}}
                  resizeMode="contain"
                />
                <Text style={styles.teamRecord}>
                  {item.localData.wins} - {item.localData.loss}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))
      : null;
  };
  render() {
    return (
      <ScrollView style={{backgroundColor: '#F0F0F0'}}>
        <View style={{flex: 1, flexDirection: 'column', flexWrap: 'nowrap'}}>
          {this.showGames(this.props.Games)}
        </View>
      </ScrollView>
    );
  }
}
const mapStateToProps = state => {
  return {
    Games: state.Games,
  };
};
export default connect(mapStateToProps)(GamesComponent);

const styles = StyleSheet.create({
  gameContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#FFF',
    shadowColor: '#DDDDDD',
    textShadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    borderRadius: 2,
  },
  gamebox: {
    width: '33.3%',
    height: 100,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  teamRecord: {
    fontFamily: 'Roboto-Light',
    fontSize: 12,
  },
  gameTime: {
    fontFamily: 'Roboto-Bold',
    fontSize: 15
  }
});
