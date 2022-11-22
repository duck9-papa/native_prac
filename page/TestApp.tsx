import React from 'react';
import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { styles } from '../StyleSheet';
import { RootStackParamList } from '../App';
import { StackScreenProps } from '@react-navigation/stack';

export type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;

function TestApp({ navigation, route }: HomeScreenProps) {
  const [text, setText] = useState<string>('');
  const [arr, setArr] = useState<string[]>([]);
  let A = [1, 3, 6, 4, 1, 2];
  const TextHandler = (enteredText: string) => {
    setText(enteredText);
  };
  console.log(
    A.sort((a, b) => {
      return a - b;
    }),

  );
  return (
    <View>
      <View style={styles.view}>
        <TextInput
          value={text}
          style={styles.textinput}
          placeholder="place holder"
          onChangeText={TextHandler}
        ></TextInput>
        <Button
          title="Go Detail"
          onPress={() => navigation.navigate('Detail', { id: 1 })}
        />
      </View>
    </View>
  );
}
export default TestApp;
