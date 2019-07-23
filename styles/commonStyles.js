import { StyleSheet } from 'react-native';

const CommonStyles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
  textDanger: {
    color: 'red'
  },
}

function createStyles(overrides = {}) {
  return StyleSheet.create({ ...CommonStyles, ...overrides })
}

export default {
  createStyles,
}