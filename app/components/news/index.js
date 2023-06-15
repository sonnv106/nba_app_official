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
class NewsComponent extends React.Component {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getNews());
  //   console.log(props.News);
  // }, [props.News.articles?.length]);
  componentDidMount(){
    console.log(this.props)
    this.props.dispatch(getNews())
  }
  renderArticle = news => {
    return news.articles
      ? news.articles.map((item, i) => (
          <TouchableOpacity key={i}>
            <View style={styles.cardContainer}>
              <View>
                <Image
                  style={{height: 150, justifyContent: 'space-around'}}
                  source={{uri:  `https://loremflickr.com/640/360`}}
                  resizeMode="cover"
                />
              </View>
            </View>
          </TouchableOpacity>
        ))
      : null;
  };
  render(){
    return (
      <ScrollView style={{backgroundColor: '#F0F0F0'}}>
        {this.renderArticle(this.props.News)}
      </ScrollView>
    );
  }
};

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
    borderRadius: 2
  }
});
