import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { getMostPopularArticles } from '../../services/articlesService';
import ArticleList from './articleList';
import CommonStyles from '../../styles/commonStyles';

const styles = CommonStyles.createStyles()

export default class Articles extends Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      error: '',
    }
  }

  async componentDidMount() {
    try {
      const response = await getMostPopularArticles('all-sections', 7)();
      const articles = response.data.results;
      this.setState({
        articles,
        error: '',
      })
    } catch (error) {
      this.setState({
        articles: [],
        error,
      })
    }
  }

  render() {
    const { articles, error } = this.state;
   
    return (
      <View style={styles.container}>
        <ArticleList articles={articles} />
        {error ? <Text style={styles.textDanger}>{error}</Text> : null}
      </View>
    )
  }
}