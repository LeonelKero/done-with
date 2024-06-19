import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet } from "react-native";
import DWButton from "../button/DWButton";
interface Props {
  title: string;
}

const DWSubmitButton = ({ title }: Props) => {
  const { handleSubmit, isValid } = useFormikContext();

  return (
    <DWButton
      btnText={title}
      handleSignInPressed={handleSubmit}
      customStyle={{}}
      disabled={!isValid}
    />
  );
};

export default DWSubmitButton;

const styles = StyleSheet.create({});
