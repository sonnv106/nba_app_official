import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {getNews} from '../../store/actions/new_actions';
import {connect, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import moment from 'moment';
class NewsComponent extends React.Component {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getNews());
  //   console.log(props.News);
  // }, [props.News.articles?.length]);
  componentDidMount() {
    console.log(this.props);
    this.props.dispatch(getNews());
  }
  renderArticle = news => {
    return news.articles
      ? news.articles.map((item, i) => (
          <TouchableOpacity key={i}
          onPress={()=>{
            this.props.navigation.navigate('Article',{
              ...item
            })
          }}>
            <View style={styles.cardContainer}>
              <View>
                <Image
                  style={{height: 150, justifyContent: 'space-around'}}
                  source={{uri: `https://loremflickr.com/640/360`}}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.cardContent}>
                <Text style={styles.titleCard}>{item.title}</Text>
                <View style={styles.bottomCard}>
                  <Text style={styles.bottomCardTeam}>{item.team} - </Text>
                  <Text style={styles.bottomCardText}>
                    Posted ad {moment(item.date).format('d MMMM')}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))
      : null;
  };
  render() {
    return (
      <ScrollView style={{backgroundColor: '#F0F0F0'}}>
        {this.renderArticle(this.props.News)}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    News: state.News,
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({getNews}, dispatch);
};
export default connect(mapStateToProps)(NewsComponent);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    backgroundColor: '#FFFFFF',
    margin: 10,
    shadowColor: '#DDDDDD',
    textShadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    borderRadius: 2,
  },
  cardContent: {
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#DDDDDD',
  },
  titleCard: {
    fontFamily: 'Roboto-Bold',
    color: '#232323',
    fontSize: 16,
    padding: 10,
  },
  bottomCard: {
    flex: 1,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#e6e6e6',
    padding: 10,
  },
  bottomCardTeam: {
    fontFamily: 'Roboto-Bold',
    color: '#828282',
    fontSize: 12,
  },
  bottomCardText: {
    fontFamily: 'Roboto-Light',
    color: '#828282',
    fontSize: 12,
  },
});
