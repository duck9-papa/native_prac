import React from 'react';
import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { styles } from '../StyleSheet';
import { RootStackParamList } from '../App';
import { StackScreenProps } from '@react-navigation/stack';

export type DetailScreenProps = StackScreenProps<RootStackParamList, 'Detail'>;

export default function TestDetail({ navigation, route }: DetailScreenProps) {
    const [min,setMin] = useState<number>(0)
    const [sec,setSec] = useState<number>(0)
    const TextHandler = (enteredText: number) => {
        setMin(enteredText);
      };
    
  return <View>
    {/* <TextInput onChangeText={TextHandler}/> */}
    <Button title='go timer' onPress={()=>navigation.navigate('Timer',{min:min,sec:sec})} />
  </View>;
}
