import React, { ReactNode, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import color from "../../config/color";

interface Props {
  placeholder: string;
  defaultValue: string;
  isSecure: boolean;
  keyboardType: "default" | "email-address" | "number-pad";
  getText: (text: string) => void;
  Icon: ReactNode;
}

const DWTextInput = ({
  placeholder,
  defaultValue,
  isSecure = false,
  keyboardType = "default",
  Icon,
  getText,
}: Props) => {
  const [value, setValue] = useState<string>(defaultValue);
  // TODO: Get typed value from parent

  return (
    <View style={styles.container}>
      {Icon}
      <TextInput
        style={styles.input}
        defaultValue=""
        onChangeText={(text) => {
          getText(text);
          setValue(text);
        }}
        keyboardType={keyboardType}
        autoCapitalize="sentences"
        value={value}
        autoCorrect={false}
        secureTextEntry={isSecure}
        clearButtonMode="always"
        placeholder={placeholder}
      />
    </View>
  );
};

export default DWTextInput;

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: color.white,
  },
  input: {
    paddingStart: 8,
    paddingEnd: 16,
    width: "100%",
  },
});
