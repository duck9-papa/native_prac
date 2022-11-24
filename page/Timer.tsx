import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { styles } from '../StyleSheet';
import { RootStackParamList } from '../App';
import { StackScreenProps } from '@react-navigation/stack';

export type TimerScreenProps = StackScreenProps<RootStackParamList, 'Timer'>;

function Timer({ navigation, route }: TimerScreenProps) {
  const [min, setMin] = useState<number>(0);
  const [sec, setSec] = useState<number>(0);
  const [count, setCount] = useState<Boolean>(false);

  const TimerOn = () => {
    setCount(!count);
  };

  useEffect(() => {
    if (min == 0 && sec == 0) {
      setCount(false);
    } else if (sec == -1) {
      setSec(59);
      setMin(min - 1);
    } else if (count) {
      const counting = setTimeout(() => {
        setSec(sec - 1);
      }, 1000);

      return () => clearTimeout(counting);
    }
  });

  useEffect(() => {
    setMin(route.params.min);
    setSec(route.params.sec);
  }, []);
  return (
    <>
      <Text>
        {min}:{sec}
      </Text>
      <Button title={count ? 'stop' : 'go'} onPress={TimerOn} />
      <Button title="test" onPress={() => setSec(sec - 1)} />
    </>
  );
}
export default Timer;
