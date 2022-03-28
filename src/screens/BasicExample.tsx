import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';

const BasicExample = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Exemplo Básico</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>texto do native modules</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  contentText: {
    color: 'black',
    fontSize: 24,
  },
});

export default BasicExample;
