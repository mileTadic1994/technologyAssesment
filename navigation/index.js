import { createAppContainer, createStackNavigator } from 'react-navigation';
import ArticleScreen from '../Views/Articles';
import SingleArticleScreen from '../Views/Articles/SingleArticle';

const AppStackNavigator = createStackNavigator({
  Articles: ArticleScreen,
  SingleArticle: SingleArticleScreen,
})

export default createAppContainer(AppStackNavigator);