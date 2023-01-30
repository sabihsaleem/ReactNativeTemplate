import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Colors} from '../../common';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  appLogoSize: {
    width: wp('65%'),
    height: wp('65%'),
    borderRadius: wp('65%'),
    resizeMode: 'cover',
  },
  logoContainer: {
    borderRadius: wp('65%'),
    height: wp('65%'),
    width: wp('65%'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
});

export default styles;
