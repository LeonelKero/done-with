import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet, View } from "react-native";
import DWButton from "../button/DWButton";

interface Props {
  title: string;
  disabled?: boolean;
}

const DWSubmitButton = ({ title, disabled }: Props) => {
  const { handleSubmit, isValid } = useFormikContext();

  return (
    <View style={styles.container}>
      <DWButton
        btnText={title}
        handlePress={handleSubmit}
        disabled={!isValid || disabled}
      />
    </View>
  );
};

export default DWSubmitButton;

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
  },
});
