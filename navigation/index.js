import { createAppContainer, createStackNavigator } from 'react-navigation';
import ArticleScreen from '../views/articles';
import SingleArticleScreen from '../views/articles/singleArticle';

const AppStackNavigator = createStackNavigator({
  Articles: ArticleScreen,
  SingleArticle: SingleArticleScreen,
})

export default createAppContainer(AppStackNavigator);