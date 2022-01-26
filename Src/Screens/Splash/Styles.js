import { StyleSheet } from 'react-native';
import Colors from '../../Styles/Colors';

const styles = StyleSheet.create({
  backgroundWrapper: {
    flex: 1,
    backgroundColor: Colors.Black,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 42,
    color: Colors.White
  }
});
export default styles;