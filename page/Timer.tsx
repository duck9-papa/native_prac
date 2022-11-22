import React,{useEffect} from 'react';
import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { styles } from '../StyleSheet';
import { RootStackParamList } from '../App';
import { StackScreenProps } from '@react-navigation/stack';

export type TimerScreenProps = StackScreenProps<RootStackParamList, 'Timer'>;

function Timer({ navigation, route }: TimerScreenProps) {

    const [min,setMin] = useState<number>(0)
    const [sec,setSec] = useState<number>(0)
    const [count,setCount] = useState<boolean>(false)

    const TimerOn = () : void =>{
        setCount(!count)
    }

    useEffect(()=>{
        if(sec==-1){
            setSec(59)
            setMin(min-1)
        }
       else if(count){
        const counting = setTimeout(()=>{
        setSec(sec-1)
        },1000)
        
        return clearTimeout(counting)}
        },[count])



  ;
  return (
    <View>
        <View>{min}:{sec}</View>
        <Button title={count ? "stop" : "go"} onPress={TimerOn} />
    </View>
  );
}
export default Timer;
