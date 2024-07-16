import { Formik } from "formik";
import React from "react";
import { StyleSheet, View } from "react-native";
import { number, object, string } from "yup";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import DWFormField from "../../components/form/DWFormField";
import DWSubmitButton from "../../components/form/DWSubmitButton";
import RootContainer from "../RootContainer";
import color from "../../config/color";
import DWPicker from "../../components/picker/DWPicker";

const publishSchema = object({
  title: string().required().label("Title"),
  price: number().required().min(1).max(1000).label("Price"),
  // category: object({
  //   name: string().label("Name"),
  //   value: number(),
  //   Icon: object({})
  // }),
  description: string().required().label("Description"),
});

const categories = [
  {
    name: "Technology",
    value: 1,
    Icon: (
      <MaterialCommunityIcons name={"laptop"} size={24} color={color.gray} />
    ),
  },
  {
    name: "Furnitures",
    value: 2,
    Icon: (
      <MaterialCommunityIcons
        name={"table-furniture"}
        size={24}
        color={color.gray}
      />
    ),
  },
  {
    name: "Clothing",
    value: 3,
    Icon: (
      <MaterialCommunityIcons name={"glasses"} size={24} color={color.gray} />
    ),
  },
];

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
              <DWPicker
                handleSelectedCategory={(cat) => console.log("The selected category => ", cat.name)}
                Icon={
                  <MaterialIcons
                    name="category"
                    size={16}
                    color={color.softDark}
                  />
                }
                placeholder="Item category"
                pickerItems={categories}
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
