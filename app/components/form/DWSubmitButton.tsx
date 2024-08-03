import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet, View } from "react-native";
import DWButton from "../button/DWButton";
interface Props {
  title: string;
}

const DWSubmitButton = ({ title }: Props) => {
  const { handleSubmit, isValid } = useFormikContext();

  return (
    <View style={styles.container}>
      <DWButton
        btnText={title}
        handlePress={handleSubmit}
        disabled={!isValid}
      />
    </View>
  );
};

export default DWSubmitButton;

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    // borderColor: 'blue',
    marginTop: 32,
  },
});
