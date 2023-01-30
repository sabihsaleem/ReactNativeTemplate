import React from 'react';
import {View, Text, TouchableOpacity, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import {Colors} from '@common';
import DeviceInfo from 'react-native-device-info';
let hasNotch = DeviceInfo.hasNotch();

const CustomHeader = ({
  title = '',
  leftIconColor = Colors.black,
  isLeftIcon = true,
  leftChild,
  onLeftClick,
  leftBtnDisabled = false,
  isRightIcon = false,
  rightChild,
  onRightClick,
  rightBtnDisabled,
  hasSafeArea = false,
}) => {
  return (
    <View
      style={[
        styles.header,
        {
          height: hasSafeArea ? (hasNotch ? 35 : 60) : hasNotch ? 90 : 60,
          paddingTop: hasSafeArea
            ? 0
            : hasNotch
            ? 30
            : Platform.OS == 'ios'
            ? 20
            : 0,
        },
      ]}>
      <TouchableOpacity
        disabled={leftBtnDisabled}
        style={styles.leftSide}
        onPress={onLeftClick}>
        {isLeftIcon ? (
          <Icon name="chevron-back" size={30} color={leftIconColor} />
        ) : (
          leftChild
        )}
      </TouchableOpacity>
      <View style={styles.center}>
        <Text customStyle={styles.title}>{title}</Text>
      </View>
      <TouchableOpacity
        disabled={rightBtnDisabled}
        style={styles.rightSide}
        onPress={onRightClick}>
        {isRightIcon ? (
          <Icon name="chevron-back" size={30} color={leftIconColor} />
        ) : (
          rightChild
        )}
      </TouchableOpacity>
    </View>
  );
};
export default CustomHeader;
