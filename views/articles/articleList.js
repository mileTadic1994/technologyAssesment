import React, { Component } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import { withNavigation } from 'react-navigation';
import ArticleStyles from '../../styles/articleStyles';
import dictionary from '../../dictionary/english';
import routes from '../../utils/routes'

const articleStyles = ArticleStyles.createStyles();

class ArticleList extends Component {

  _handleOnPressItem = (item) => {
    const { navigation } = this.props;
    navigation.navigate(routes.singleArticle, {
      article: item,
    })
  }

  _keyExtractor = (item) => `${item.id}`

  _renderItem = ({ item }) => (
    <TouchableOpacity
      style={articleStyles.listItem}
      onPress={() => this._handleOnPressItem(item)}
    >
      <Text>{item.title}</Text>
    </TouchableOpacity>
  )

  _renderSeparator = () => (
    <View style={articleStyles.separator} />
  )

  render() {
    const { articles } = this.props;
    if (articles.length === 0) return <Text>{dictionary.emptyList}</Text>
    return (
      <FlatList
        data={articles}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
        ItemSeparatorComponent={this._renderSeparator}
      />
    )
  }
}

export default withNavigation(ArticleList);