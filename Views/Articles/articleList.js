import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import { withNavigation } from 'react-navigation';
import ArticleStyles from '../../styles/articleStyles';

const articleStyles = ArticleStyles.createStyles();

class ArticleList extends PureComponent {

  handleOnPressItem = (item) => {
    const { navigation } = this.props;
    navigation.navigate('SingleArticle', {
      article: item,
    })
  }

  _keyExtractor = (item) => item.id

  _renderItem = ({ item }) => (
    <TouchableOpacity
      style={articleStyles.listItem}
      onPress={() => this.handleOnPressItem(item)}
    >
      <Text>{item.title}</Text>
    </TouchableOpacity>
  )

  _renderSeparator = () => (
    <View style={articleStyles.separator} />
  )

  render() {
    const { articles } = this.props;
    if (articles.length === 0) return <Text>List is empty...</Text>
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