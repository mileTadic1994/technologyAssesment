import React, { Component, Fragment } from 'react';
import { View, Text } from 'react-native';
import CommonStyles from '../../styles/commonStyles';
import dictionary from '../../dictionary/english';

const styles = CommonStyles.createStyles()

class SingleArticle extends Component {

  render() {
    const { navigation } = this.props;
    const article = navigation.getParam('article', null)
    return (
      <View style={styles.container}>
        {
          article ?
            <Fragment>
              <Text style={styles.textCenter}>{dictionary.title}{article.title}</Text>
              <Text style={styles.textCenter}>{dictionary.section}{article.section}</Text>
              <Text style={styles.textCenter}>{dictionary.soucer}{article.source}</Text>
            </Fragment>
            :
            <Text>{dictionary.somethingWrong}</Text>
        }
      </View>
    )
  }
}

export default SingleArticle;