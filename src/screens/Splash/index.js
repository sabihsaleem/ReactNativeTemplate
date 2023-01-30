import React, {Component} from 'react';
import {Image, View} from 'react-native';
import styles from './styles';
import {images} from '../../assets';
class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('OnBoarding');
    }, 1000);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.logoContainer}>
          <Image source={images.splash} style={styles.appLogoSize} />
        </View>
      </View>
    );
  }
}

export default Splash;
