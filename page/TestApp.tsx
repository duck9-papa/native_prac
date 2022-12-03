import React from 'react';
import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { styles } from '../StyleSheet';
import { RootStackParamList } from '../App';
import { StackScreenProps } from '@react-navigation/stack';
import MainButton from '../components/MainButton';

export type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;

function TestApp({ navigation, route }: HomeScreenProps) {
  return <View style={styles.flexCenter} >
    <MainButton title={"미니게임"} navigation={navigation} route={route} />
  </View>;
}
export default TestApp;
