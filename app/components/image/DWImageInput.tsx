import React from "react";
import {
  Image,
  ImageURISource,
  StyleSheet,
  View
} from "react-native";

interface Props {
  imageUri: ImageURISource;
  customStyle?: object;
  onChangeHandle?: (newUri: string) => void;
}

const DWImageInput = ({ imageUri, customStyle, onChangeHandle }: Props) => {
  return (
    <View>
      <Image
        source={imageUri}
        resizeMode="cover"
        style={[styles.image, customStyle]}
      />
    </View>
  );
};

export default DWImageInput;

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
  },
});
