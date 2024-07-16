import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { ReactNode, useState } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import color from "../../config/color";

interface Props {
  placeholder: string;
  value: string;
  isSecure: boolean;
  keyboardType: "default" | "email-address" | "number-pad";
  inputMode: "none" | "text" | "decimal" | "numeric" | "tel" | "search"  | "email" | "url";
  getText: (text: string) => void;
  Icon: ReactNode;
  onBlur: () => void;
}

const DWTextInput = ({
  placeholder,
  value,
  isSecure = false,
  keyboardType = "default",
  inputMode = "text",
  Icon,
  onBlur,
  getText,
}: Props) => {
  // const [value, setValue] = useState<string>(defaultValue);
  // const [isSecretVisible, setSecretVisible] = useState(false);
  const [isSecret, setSecret] = useState(isSecure);

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
        autoCorrect={false}
        secureTextEntry={isSecret}
        clearButtonMode="always"
        placeholder={placeholder}
        onBlur={onBlur}
      ></TextInput>
      {/* {inputType == "secure-secret" && value && (
        <Pressable
          onPress={() => {
            setSecretVisible(!isSecretVisible);
            setSecret(isSecretVisible);
          }}
          style={styles.showHideSecret}
        >
          <MaterialCommunityIcons
            name={isSecretVisible ? "eye" : "eye-off"}
            size={20}
            color={color.softDark}
          />
        </Pressable>
      )} */}
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
