import React from 'react';
import {
  Alert,
  Image,
  ImageProps,
  NativeModules,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import ImagePicker, {ImageOrVideo} from 'react-native-image-crop-picker';
import {
  openLimitedPhotoLibraryPicker,
  openSettings,
} from 'react-native-permissions';
import asyncStorage from '../screens/asyncStorage';

interface AvatarProps extends ImageProps {
  onChange?: (file: ImageOrVideo) => void;
}

export const Avatar = (props: AvatarProps) => {
  //@ts-ignore
  const [uri, setUri] = React.useState(props.source?.uri || undefined);
  const {MyFirstModule} = NativeModules;

  const chooseImage = async () => {
    try {
      const photosLiberated = await MyFirstModule.getNumberPhotosLiberated();
      console.log('photosLiberated:', photosLiberated);
      if (
        photosLiberated > 0 ||
        !(await asyncStorage.get('@USER:open-library'))
      ) {
        openPicker();
        asyncStorage.set('@USER:open-library', true);
      } else {
        openPhotoLibrary();
      }
    } catch (err) {
      //@ts-ignore
      if (Platform.OS === 'ios' && err?.code === 'E_PERMISSION_MISSING') {
        openAlert();
      }
    }
  };

  const openPhotoLibrary = () => {
    openLimitedPhotoLibraryPicker().catch(() => {});
  };

  const openPicker = () => {
    ImagePicker.openPicker({
      cropping: true,
      writeTempFile: true,
      forceJpg: true,
      width: 300,
      height: 300,
    })
      .then(image => {
        updateAvatar(image);
      })
      .catch(() => {});
  };

  const updateAvatar = (image: ImageOrVideo) => {
    setUri(image.path);
    props.onChange?.(image);
  };

  const openAlert = () => {
    Alert.alert(
      'Para seguir é necessário que o app tenha acesso a sua galeria de fotos.',
      '',
      [
        {
          text: 'Abrir configurações',
          onPress: () => openSettings().catch(() => ({})),
          style: 'default',
        },
        {
          text: 'Cancelar',
          style: 'cancel',
        },
      ],
    );
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={chooseImage}>
      <Image
        style={styles.avatar}
        {...props}
        source={uri ? {uri} : props.source}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  avatar: {
    paddingTop: 20,
    height: 100,
    width: 100,
    borderRadius: 100,
    padding: 20,
  },
});
