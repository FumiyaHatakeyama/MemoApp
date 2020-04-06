import React from 'react';
import { StyleSheet, View } from 'react-native';

import MemoDetailScreen from './src/screens/MemoDetailScreen';
import Appbar from './src/components/Appbar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Appbar />
      <MemoDetailScreen />
    </View>
  );
}
