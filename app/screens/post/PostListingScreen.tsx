import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import React from "react";
import { StyleSheet, View } from "react-native";
import { number, object, string } from "yup";
import DWFormField from "../../components/form/DWFormField";
import DWSubmitButton from "../../components/form/DWSubmitButton";
import DWPicker from "../../components/picker/DWPicker";
import color from "../../config/color";
import RootContainer from "../RootContainer";

const publishSchema = object({
  title: string().required().label("Title"),
  price: number().required().min(1).max(1000).label("Price"),
  category: string().required().label("Category"),
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
          initialValues={{ title: "", price: 0, category: "", description: "" }}
          validationSchema={publishSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            setFieldValue,
            setFieldTouched,
          }) => (
            <View style={styles.inputs}>
              <DWFormField
                field={"title"}
                placeholder={"Publication's Title"}
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
                placeholder={"Item's Price"}
                iconName={undefined}
                errors={errors}
                value={values.price}
                isSecure={false}
                touched={touched}
                keyboardType={"number-pad"}
                handleChange={handleChange}
                setFieldTouched={setFieldTouched}
              />
              <DWPicker
                handleSelectedCategory={(cat) =>
                  setFieldValue("category", cat.name)
                }
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
              <DWFormField
                field={"description"}
                placeholder={"Short description of the publication"}
                iconName={undefined}
                errors={errors}
                value={values.description}
                isSecure={false}
                touched={touched}
                keyboardType={"default"}
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
