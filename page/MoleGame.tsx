import React from 'react';
import { styles } from '../StyleSheet';
import { View, Text } from 'react-native';

const MoleGame = () => {
  return (
    <>
      <View style={styles.MoleBoard}>
        <View style={styles.flexCenter}>
          <Text>1</Text>
        </View>
        <View style={styles.flexCenter}>
          <Text>2</Text>
        </View>
        <View style={styles.flexCenter}>
          <Text>3</Text>
        </View>
        <View style={styles.flexCenter}>
          <Text>4</Text>
        </View>
        <View style={styles.flexCenter}>
          <Text>5</Text>
        </View>
        <View style={styles.flexCenter}>
          <Text>6</Text>
        </View>
        <View style={styles.flexCenter}>
          <Text>7</Text>
        </View>
        <View style={styles.flexCenter}>
          <Text>8</Text>
        </View>
        <View style={styles.flexCenter}>
          <Text>9</Text>
        </View>
      </View>
    </>
  );
};

export default MoleGame;
