import React from 'react';
import {Image, ImageProps, StyleSheet, TouchableOpacity} from 'react-native';
import ImagePicker, {ImageOrVideo} from 'react-native-image-crop-picker';

interface AvatarProps extends ImageProps {
  onChange?: (file: ImageOrVideo) => void;
}

export const Avatar = (props: AvatarProps) => {
  //@ts-ignore
  const [uri, setUri] = React.useState(props.source?.uri || undefined);

  const chooseImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setUri(image.path);
      props.onChange?.(image);
    });
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
