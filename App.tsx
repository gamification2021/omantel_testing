/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { loadGame, DailyChallenge } from 'react-native-omantel_library_sample'


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  async function test() {
    console.log(await loadGame());
  }

  return (
    <SafeAreaView style={{ ...backgroundStyle, ...styles.container }}>
      <TouchableOpacity onPress={() => {
        //test();
        loadGame();
      }} style={{ alignItems: 'center', backgroundColor: 'dodgerblue', borderRadius: 5, marginTop: 50, padding: 10, width: '50%' }}>
        <Text style={{ color: 'white', fontSize: 20 }}>Load Game</Text>
      </TouchableOpacity>

      <DailyChallenge />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  }
});

export default App;
