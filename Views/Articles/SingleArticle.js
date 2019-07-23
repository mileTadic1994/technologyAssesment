import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CommonStyles from '../../styles/commonStyles';

const styles = CommonStyles.createStyles()

class SingleArticle extends Component {

  render() {
    const { navigation } = this.props;
    const article = navigation.getParam('article', null)
    return (
      <View style={styles.container}>
        {
          article ?
            <Text>{article.title}</Text> :
            <Text>Something went wrong...</Text>
        }
      </View>
    )
  }
}

export default SingleArticle;