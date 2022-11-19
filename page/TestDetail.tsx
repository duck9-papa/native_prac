import React from 'react';
import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { styles } from '../StyleSheet';
import { RootStackParamList } from '../App';
import { StackScreenProps } from '@react-navigation/stack';

export type DetailScreenProps = StackScreenProps<RootStackParamList, 'Detail'>;

export default function TestDetail({ navigation, route }: DetailScreenProps) {
    console.log(navigation,route)
  return <View>Detail</View>;
}
