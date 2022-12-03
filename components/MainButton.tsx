import React from 'react';
import { View } from 'react-native';
import { styles } from '../StyleSheet';

const MainButton = ({ title }: any) => {
  return <View style={styles.MainButton}>{title}</View>;
};

export default MainButton