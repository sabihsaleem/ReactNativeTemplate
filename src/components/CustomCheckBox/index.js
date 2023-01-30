import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Colors, FontSizes} from '@common';
import LinearGradient from 'react-native-linear-gradient';

const CustomCheckBox = ({Checked, onPress, title, titleColor}) => {
  return (
    <View style={styles.checkBoxRow}>
      <TouchableOpacity style={styles.checkBox} onPress={onPress}>
        <LinearGradient
          colors={[Colors.PrimaryGreenLight, Colors.PrimaryGreenDark]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={[styles.checkBox]}>
          {Checked ? <Icon style={{color: Colors.White}} name="check" /> : null}
        </LinearGradient>
      </TouchableOpacity>
      <View style={styles.titleRow}>
        <Text style={[styles.titleText, {color: titleColor}]}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  checkBoxRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  checkBox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 22,
    height: 22,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: Colors.PrimaryGreenLight,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: wp('2%'),
  },
  titleText: {
    ...FontSizes.Regular,
  },
});
export default CustomCheckBox;
