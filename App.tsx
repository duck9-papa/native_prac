import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { styles } from './StyleSheet';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import TestApp from './page/TestApp';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <TestApp />
    </NavigationContainer>
  );
}
