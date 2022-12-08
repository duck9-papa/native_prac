import React from 'react';
import { styles } from '../StyleSheet';
import { View,Text } from 'react-native';

const MoleGame = () => {
  return (
    <>
      <View style={styles.MoleBoard}>
        <View><Text></Text></View>
        <View></View>
        <View></View>
        <View></View>
        <View></View>
        <View></View>
        <View></View>
        <View></View>
        <View></View>
      </View>
    </>
  );
};

export default MoleGame;
