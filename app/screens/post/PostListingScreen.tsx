import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { Formik } from "formik";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { array, number, object, string } from "yup";
import DWFormField from "../../components/form/DWFormField";
import DWSubmitButton from "../../components/form/DWSubmitButton";
import DWImageInputList from "../../components/input/DWImageInputList";
import DWPicker from "../../components/picker/DWPicker";
import color from "../../config/color";
import RootContainer from "../RootContainer";

const publishSchema = object({
  images: array().of(string().required()).required().label("Pictures"),
  title: string().required().label("Title"),
  price: number().required().min(1).max(1000).label("Price"),
  category: string().required().label("Category"),
  description: string().required().label("Description"),
});

const categories = [
  {
    name: "Computers",
    value: 1,
    Icon: (
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: color.lightBlue,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons name={"laptop"} size={24} color={color.white} />
      </View>
    ),
  },
  {
    name: "Furnitures",
    value: 2,
    Icon: (
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: color.primary,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons
          name={"table-furniture"}
          size={24}
          color={color.white}
        />
      </View>
    ),
  },
  {
    name: "Clothing",
    value: 3,
    Icon: (
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: color.softDark,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons
          name={"shoe-formal"}
          size={24}
          color={color.white}
        />
      </View>
    ),
  },
  {
    name: "Cameras",
    value: 3,
    Icon: (
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: color.warm,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons name={"camera"} size={24} color={color.white} />
      </View>
    ),
  },
  {
    name: "Movies",
    value: 3,
    Icon: (
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: color.deepRed,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons
          name={"movie-play"}
          size={24}
          color={color.white}
        />
      </View>
    ),
  },
  {
    name: "Books",
    value: 3,
    Icon: (
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: color.secondary,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons
          name={"book-edit"}
          size={24}
          color={color.white}
        />
      </View>
    ),
  },
  {
    name: "Games",
    value: 3,
    Icon: (
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: color.third,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons
          name={"google-controller"}
          size={24}
          color={color.white}
        />
      </View>
    ),
  },
  {
    name: "Musics",
    value: 3,
    Icon: (
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: color.darkTeal,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons
          name={"earbuds"}
          size={24}
          color={color.white}
        />
      </View>
    ),
  },
  {
    name: "Cars",
    value: 3,
    Icon: (
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: color.violet,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons name={"car"} size={24} color={color.white} />
      </View>
    ),
  },
  {
    name: "Sports",
    value: 3,
    Icon: (
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: color.pastel,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons
          name={"basketball"}
          size={24}
          color={color.white}
        />
      </View>
    ),
  },
  {
    name: "Others",
    value: 3,
    Icon: (
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: color.gray,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons
          name={"apple-finder"}
          size={24}
          color={color.white}
        />
      </View>
    ),
  },
];

const PostListingScreen = () => {
  const requestCameraPermission = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted)
      alert("This application needs to acces the Camera for this activity.");
  };

  useEffect(() => {
    requestCameraPermission();
  }, []);

  return (
    <RootContainer>
      <View style={styles.container}>
        <Formik
          onSubmit={(values) => console.log("Publish", values)}
          initialValues={{
            images: [],
            title: "",
            price: 0,
            category: "",
            description: "",
          }}
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
              <DWImageInputList imageUris={values.images} />
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
                numberOfColumns={3}
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
                pickerItems={categories}
              />
              <DWFormField
                field={"description"}
                placeholder={"Short description of this publication"}
                iconName={undefined}
                errors={errors}
                maxLines={3}
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
    // borderWidth: 1,
    // borderColor: "red",
  },
  inputs: {},
  // pictures: {
  //   flexDirection: "row",
  //   width: "100%",
  // },
});
