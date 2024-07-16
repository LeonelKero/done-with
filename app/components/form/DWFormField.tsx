import { Entypo } from "@expo/vector-icons";
import { FormikErrors, FormikTouched } from "formik";
import React from "react";
import { StyleSheet, View } from "react-native";
import color from "../../config/color";
import DWErrorText from "../error/DWErrorText";
import DWTextInput from "../input/DWTextInput";

// type formFieldsSchema = {
//   username: string;
//   password: string;
// };

// interface Props {
//   field: string;
//   placeholder: string;
//   iconName: "email" | "key";
//   errors: FormikErrors<formFieldsSchema>;
//   value: string;
//   isSecure: boolean;
//   touched: FormikTouched<formFieldsSchema>;
//   keyboardType: "default" | "email-address" | "number-pad";
//   handleChange: (e: React.ChangeEvent<any>) => void;
//   setFieldTouched: (
//     field: string,
//     isTouched?: boolean,
//     shouldValidate?: boolean
//   ) => Promise<void | FormikErrors<formFieldsSchema>>;
// }

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
    <View style={styles.container}>
      <DWTextInput
        placeholder={placeholder}
        value={value}
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
  container:{
    marginBottom: 16
  }
});
