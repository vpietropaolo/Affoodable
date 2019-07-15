import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  searchBar: {
    padding: 12,
    position: 'absolute',
    width: Dimensions.get('window').width,
    top: 0,
    backgroundColor: 'white',
    fontSize: 17
  }
});

export default styles;