import React from 'react';
import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { styles } from '../StyleSheet';
import { RootStackParamList } from '../App';
import { StackScreenProps } from '@react-navigation/stack';

export type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;

function TestApp({ navigation, route }: HomeScreenProps) {
  return <View></View>;
}
export default TestApp;
