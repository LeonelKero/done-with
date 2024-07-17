import { Entypo } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import color from "../../config/color";
import DWErrorText from "../error/DWErrorText";
import DWTextInput from "../input/DWTextInput";

const DWFormField = ({
  field,
  placeholder,
  iconName,
  errors,
  value,
  isSecure,
  maxLines = 1,
  touched,
  keyboardType,
  handleChange,
  setFieldTouched,
}) => {
  return (
    <View style={styles.container}>
      <DWTextInput
        placeholder={placeholder}
        value={value}
        maxLines={maxLines}
        inputMode="none"
        isSecure={isSecure}
        keyboardType={keyboardType}
        getText={handleChange(field)}
        onBlur={() => setFieldTouched(field)}
        Icon={
          iconName && <Entypo name={iconName} color={color.gray} size={20} />
        }
      />
      <DWErrorText message={errors[field]} isVisible={touched[field]} />
    </View>
  );
};

export default DWFormField;

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
});
