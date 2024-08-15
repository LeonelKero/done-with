import React, { ReactNode } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import color from "../../config/color";

interface Props {
  placeholder: string;
  value: string;
  isSecure: boolean;
  maxLines: number;
  keyboardType: "default" | "email-address" | "number-pad";
  inputMode:
    | "none"
    | "text"
    | "decimal"
    | "numeric"
    | "tel"
    | "search"
    | "email"
    | "url";
  getText: (text: string) => void;
  Icon: ReactNode;
  onBlur: () => void;
}

const DWTextInput = ({
  placeholder,
  value,
  isSecure = false,
  keyboardType = "default",
  maxLines = 1,
  inputMode = "text",
  Icon,
  onBlur,
  getText,
}: Props) => {
  return (
    <View style={styles.container}>
      {Icon}
      <TextInput
        style={styles.input}
        defaultValue=""
        onChangeText={getText}
        keyboardType={keyboardType}
        autoCapitalize="none"
        inputMode={inputMode}
        value={value}
        numberOfLines={maxLines}
        autoCorrect={false}
        secureTextEntry={isSecure}
        clearButtonMode="always"
        placeholder={placeholder}
        onBlur={onBlur}
      ></TextInput>
    </View>
  );
};

export default DWTextInput;

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginVertical: 4,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: color.white,
  },
  showHideSecret: {
    zIndex: 1,
    position: "absolute",
    end: 32,
  },
  input: {
    paddingStart: 8,
    paddingEnd: 16,
    width: "100%",
  },
});
