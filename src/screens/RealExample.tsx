import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  NativeModules,
  Platform,
} from 'react-native';
import {openSettings} from 'react-native-permissions';
import ImagePicker, {ImageOrVideo} from 'react-native-image-crop-picker';

import {Avatar} from '../components/Avatar';

const RealExample = () => {
  const {MyTextModule} = NativeModules;

  const onAvatarChange = (image: ImageOrVideo) => {
    console.log(image);
  };

  const openMySettings = () => {
    openSettings().catch(() => ({}));
  };

  const openGalery = () => {};
  const selectPhotos = async () => {
    try {
      const selectedImage: any = await ImagePicker.openPicker({
        cropping: true,
        writeTempFile: true,
        forceJpg: true,
        width: 300,
        height: 300,
      });
    } catch (err) {}
  };

  const onPress = async () => {
    if (Platform.OS === 'android') {
      console.log('result react native: ', await MyTextModule.getText('olaaa'));
      console.log('result react nativeTwo: ', await MyTextModule.getTextTwo());
    } else {
      console.log(
        'result react native: ',
        await MyTextModule.getText('olaaax', 'doido'),
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Exemplo Real</Text>
      </View>
      <View style={styles.content}>
        <Avatar
          onChange={onAvatarChange}
          source={require('../assets/avatar-placeholder.png')}
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
