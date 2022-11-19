import React from 'react';
import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { styles } from '../StyleSheet';
import axios from 'axios';

export default function TestApp() {
  const [text, setText] = useState<string>('');
  const [arr, setArr] = useState<string[]>([]);

  const TextHandler = (enteredText: string): void => {
    setText(enteredText);
  };

  const AddText = (): void => {
    setArr([...arr, text]);
  };
  return (
    <View>
      <View style={styles.view}>
        <TextInput
          value={text}
          style={styles.textinput}
          placeholder="place holder"
          onChangeText={TextHandler}
        ></TextInput>
        <Button title="add" onPress={AddText} />
      </View>
      <View>
        {arr
          ? arr.map((item) => <Text style={styles.item}>{item}</Text>)
          : null}
      </View>
    </View>
  );
}
