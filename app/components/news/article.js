import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import moment from 'moment';

const NewsArticleComponent = ({navigation, route}) => {
  const params = route?.params;
  const re1 =  /<p>/g;
  const re2 =  /<\/p>/g;
  const formatText = (content) =>{
    const text =  content.replace(re1, "").replace(re2, "")
    return text;
  }
    return (
    <ScrollView>
      <Image
        source={{uri: params.image}}
        style={{height: 250}}
        resizeMode="cover"
      />
      <View style={styles.articleContainer}>
        <View style={styles.header}>
          <Text style={styles.articleTitle}>{params.title}</Text>
          <Text style={styles.articleData}>
            {params.team} - Posted at {moment(params.date).format('d MMMM')}
          </Text>
        </View>
        <View style={styles.articleContent}>
          <Text style={styles.articleText}>{formatText(params.content)}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default NewsArticleComponent;

const styles = StyleSheet.create({
  articleContainer: {
    padding: 10,
  },
  articleTitle: {
    fontSize: 23,
    color: '#323232',
    fontFamily: 'Roboto-Bold',
  },
  articleData: {
    fontSize: 12,
    color: '#828282',
    fontFamily: 'Roboto-Light',
  },
  articleContent: {
    marginTop: 30
  },
  articleText: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Roboto-Light',
  },
});
