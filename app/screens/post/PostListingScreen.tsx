import { Formik } from "formik";
import React from "react";
import { StyleSheet, View } from "react-native";
import { number, object, string } from "yup";
import DWFormField from "../../components/form/DWFormField";
import DWSubmitButton from "../../components/form/DWSubmitButton";
import RootContainer from "../RootContainer";

const publishSchema = object({
  title: string().required().label("Title"),
  price: number().required().min(1).max(1000).label("Price"),
  category: string().required().label("Category"),
  description: string().required().label("Description"),
});

const PostListingScreen = () => {
  return (
    <RootContainer>
      <View style={styles.container}>
        <Formik
          onSubmit={(values) => console.log("Publish", values)}
          initialValues={{ title: "", price: 1 }}
          validationSchema={publishSchema}
        >
          {({ values, errors, touched, handleChange, setFieldTouched }) => (
            <View style={styles.inputs}>
              <DWFormField
                field={"title"}
                placeholder={"Title of the publication"}
                iconName={undefined}
                errors={errors}
                value={values.title}
                isSecure={false}
                touched={touched}
                keyboardType={"default"}
                handleChange={handleChange}
                setFieldTouched={setFieldTouched}
              />
              <DWFormField
                field={"price"}
                placeholder={"Item price"}
                iconName={undefined}
                errors={errors}
                value={values.price}
                isSecure={false}
                touched={touched}
                keyboardType={"number-pad"}
                handleChange={handleChange}
                setFieldTouched={setFieldTouched}
              />
              <DWSubmitButton title="Publish" />
            </View>
          )}
        </Formik>
      </View>
    </RootContainer>
  );
};

export default PostListingScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: "red",
  },
  inputs: {},
});
