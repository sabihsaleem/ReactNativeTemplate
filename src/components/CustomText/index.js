/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './styles';
import {Colors} from '@common';
import {LinearGradientText} from 'react-native-linear-gradient-text';

const CustomText = ({title, onPress, textStyle}) => {
  return (
    <TouchableOpacity style={styles.btnNext} onPress={onPress}>
      <LinearGradientText
        colors={[Colors.PrimaryGreenLight, Colors.PrimaryGreenDark]}
        text={title}
        start={{x: 0.5, y: 0}}
        end={{x: 1, y: 1}}
        textStyle={[textStyle, styles.btnNextText]}
      />
    </TouchableOpacity>
  );
};

export default CustomText;
