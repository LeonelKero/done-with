import React, { ReactNode, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import color from "../../config/color";

interface Props {
  placeholder: string;
  value: string;
  onTextChange: (text: string) => void;
  Icon: ReactNode;
}

const DWInput = ({ placeholder, Icon }: Props) => {
  const [value, setValue] = useState<string>("");

  return (
    <View style={styles.container}>
      {Icon}
      <TextInput
        style={styles.input}
        defaultValue=""
        onChangeText={(text) => setValue(text)}
        autoCapitalize="sentences"
        value={value}
        clearButtonMode="always"
        placeholder={placeholder}
      />
    </View>
  );
};

export default DWInput;

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: color.white,
  },
  input: {
    paddingStart: 8,
    paddingEnd: 16,
    width: '100%'
  },
});
