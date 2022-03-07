/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  NativeModules,
  Platform,
  Button,
  Dimensions,
  Image,
  FlatList,
} from 'react-native';
import {openSettings} from 'react-native-permissions';
import ImagePicker from 'react-native-image-crop-picker';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import data from './data';

const {width} = Dimensions.get('window');
const numberGrid = 3;
const itemWidth = width / numberGrid;

const App = () => {
  const [myData, setMyData] = useState(data);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const {MyTextModule} = NativeModules;

  const renderItem = ({item}: any) => {
    if (!item) {
      return;
    }
    return (
      <View>
        <Image source={{uri: item.avatar}} style={styles.itemImage} />
      </View>
    );
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
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Bridge/Native Modules</Text>
        </View>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <View style={styles.sectionButtons}>
            <Button
              title="selecionar foto"
              color="black"
              onPress={selectPhotos}
            />
            <Button
              title="abrir configurações"
              color="black"
              onPress={openMySettings}
            />
          </View>
          <View style={styles.sectionImages}>
            {myData && (
              <FlatList
                keyExtractor={(_, index) => String(index)}
                numColumns={numberGrid}
                data={myData}
                renderItem={renderItem}
              />
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemImage: {
    width: itemWidth,
    height: itemWidth,
  },
  header: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: 'black',
    fontSize: 20,
  },
  sectionButtons: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionImages: {
    flex: 1,
    marginTop: 50,
  },
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
});

export default App;
