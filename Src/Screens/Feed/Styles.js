import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Styles/Colors';

const widthScreen = Dimensions.get('window').width;
// const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: Colors.White
  },
  header: {
    // flexDirection: 'row',
    // width: widthScreen / 1.12,
    // alignSelf: 'center',
    // justifyContent: 'space-between'
    marginBottom: 20
  },
  logo: {
    width: 69.32,
    height: 24.95,
    alignSelf: 'center',
    marginTop: 5
  },
  // avatar: {
  //   width: 40,
  //   height: 40,
  //   marginTop: 5
  // },
  // line: {
  //   width: widthScreen,
  //   height: 1,
  //   backgroundColor: Colors.Grey,
  //   marginTop: 20,
  //   marginBottom: 20
  // },
  tagWrapper: {
    height: 74,
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: Colors.Grey
  },
  direction: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  tagContainer: {
    backgroundColor: Colors.White,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: Colors.LightBlack,
    marginEnd: 8
  },
  containerText: {
    fontSize: 15,
    fontWeight: '700',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5
  },
  background: {
    width: widthScreen,
    height: 519,
    justifyContent: 'flex-end',
    marginBottom: 10
  },
  coloredBackground: {
    backgroundColor: Colors.LightBlack,
    width: widthScreen,
    height: 519,
    justifyContent: 'flex-end',
    marginBottom: 10
  },
  shareFeed: {
    width: 44,
    height: 48,
    marginBottom: 20
  },
  likeFeed: {
    width: 44,
    height: 48,
    marginBottom: 20
  },
  enterButton: {
    width: 134,
    height: 48
  },
  featuredFeed: {
    width: widthScreen,
    height: 519,
    backgroundColor: Colors.LightBlack,
    marginBottom: 10
  },
  featured: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.White,
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 15
  },
  shoes: {
    width: 300,
    height: 400
  },
});
export default styles;