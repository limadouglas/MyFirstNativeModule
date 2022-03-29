import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  NativeModules,
  Button,
} from 'react-native';

const BasicExample = () => {
  const {MyFirstModule} = NativeModules;
  const [text, setText] = useState('sem texto nativo');

  const onPress = () => {
    const nativeText = MyFirstModule.getText();
    setText(nativeText);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Exemplo Básico</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>{text}</Text>
        <Button
          title="Clique para invocar o native module!"
          onPress={onPress}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 26,
  },
  content: {
    backgroundColor: '#ececec',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
  },
  contentText: {
    color: 'black',
    fontSize: 24,
  },
  button: {
    marginTop: 50,
  },
});

export default BasicExample;
