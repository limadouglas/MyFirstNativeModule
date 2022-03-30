import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import {openLimitedPhotoLibraryPicker} from 'react-native-permissions';

import {Avatar} from '../components/Avatar';

const RealExample = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Exemplo Real</Text>
      </View>
      <View style={styles.content}>
        <Avatar source={require('../assets/avatar-placeholder.png')} />
        <Button
          title="Abrir biblioteca"
          onPress={() => openLimitedPhotoLibraryPicker()}
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
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#ececec',
    alignItems: 'center',
  },
});

export default RealExample;
