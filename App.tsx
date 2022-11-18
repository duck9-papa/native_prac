import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [text, setText] = useState<string>('');
  const [arr, setArr] = useState<string[]>([]);

  const TextHandler = (enteredText: string): void => {
    setText(enteredText);
  };

  const AddText = (): void => {
    setArr([...arr, text]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <TextInput
          value={text}
          style={styles.textinput}
          placeholder="place holder"
          onChangeText={TextHandler}
        ></TextInput>
        <Button title="add" onPress={AddText} />
      </View>
      <View style={styles.row}>
        {arr ? arr.map((item) => <Text>{item}</Text>) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinput: {
    borderBottomColor: 'grey',
    // paddingLeft: '10px',
    padding: '10px',
  },
  view: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
  },
});
