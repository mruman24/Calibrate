import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Styles from './Styles';


class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.moved = false;
  }
  componentDidMount = () => {
    setTimeout(() => {
      if (!this.moved) {
        this.props.navigation.navigate('Feed')
      }
    }, 3000);
  }

  render() {
    return (
      <>

        <View style={Styles.backgroundWrapper}>
          <Text style={Styles.headerText}>{"blaab."}</Text>
        </View>

      </>
    );
  }
}
export default Splash;