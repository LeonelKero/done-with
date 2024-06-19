import { Entypo } from "@expo/vector-icons";
import React from "react";
import { StyleSheet } from "react-native";
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
  touched,
  keyboardType,
  handleChange,
  setFieldTouched,
}) => {
  return (
    <>
      <DWTextInput
        placeholder={placeholder}
        value={value}
        inputType="default"
        isSecure={isSecure}
        keyboardType={keyboardType}
        getText={handleChange(field)}
        onBlur={() => setFieldTouched(field)}
        Icon={<Entypo name={iconName} color={color.gray} size={20} />}
      />
      <DWErrorText message={errors[field]} isVisible={touched[field]} />
    </>
  );
};

export default DWFormField;

const styles = StyleSheet.create({});
