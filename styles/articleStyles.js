import { StyleSheet } from 'react-native';

const ArticleStyles = {
  listItem: {
    fontSize: 16,
    padding: 10,
  },
  separator: {
    borderWidth: 3
  }
}

function createStyles(overrides = {}) {
  return StyleSheet.create({ ...ArticleStyles, ...overrides })
}

export default {
  createStyles,
}