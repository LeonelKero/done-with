import { Entypo } from "@expo/vector-icons";
import { Formik } from "formik";
import React from "react";
import { StyleSheet, View } from "react-native";
import { object, string } from "yup";
import DWButton from "../../components/button/DWButton";
import DWErrorText from "../../components/error/DWErrorText";
import DWTextInput from "../../components/input/DWTextInput";
import DWAppLogo from "../../components/logo/DWAppLogo";
import color from "../../config/color";
import RootContainer from "../RootContainer";

const validationSchema = object({
  username: string().email().required().label("Email"),
  password: string().min(8).required().label("Password"),
});

const SignInScreen = () => {
  return (
    <RootContainer>
      <View style={styles.container}>
        <View>
          <DWAppLogo
            logo={styles.logo}
            text={styles.textLogo}
            done={styles.done}
          />
          <Formik
            initialValues={{ username: "", password: "" }}
            onSubmit={(values) => console.log("VALUES ARE", values)}
            validationSchema={validationSchema}
          >
            {({
              values,
              errors,
              isValid,
              handleChange,
              handleSubmit,
              setFieldTouched,
              touched,
            }) => (
              <View style={styles.formView}>
                <View style={styles.inputsSection}>
                  <DWTextInput
                    placeholder="Username"
                    value={values.username}
                    inputType="default"
                    isSecure={false}
                    keyboardType="email-address"
                    getText={handleChange("username")}
                    Icon={<Entypo name="email" color={color.gray} size={20} />}
                    onBlur={() => setFieldTouched("username")}
                  />
                  <DWErrorText
                    message={errors.username}
                    isVisible={touched.username}
                  />
                  <DWTextInput
                    placeholder="Password"
                    value={values.password}
                    inputType="secure-secret"
                    isSecure={true}
                    keyboardType="default"
                    getText={handleChange("password")}
                    Icon={<Entypo name="key" color={color.gray} size={20} />}
                    onBlur={() => setFieldTouched("password")}
                  />
                  <DWErrorText
                    message={errors.password}
                    isVisible={touched.password}
                  />
                </View>
                <DWButton
                  btnText={"Login"}
                  handleSignInPressed={handleSubmit}
                  customStyle={{}}
                  disabled={!isValid}
                />
              </View>
            )}
          </Formik>
        </View>
      </View>
    </RootContainer>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 32,
    justifyContent: "space-between",
    // backgroundColor: color.primary,
  },
  formView: {
    // backgroundColor: color.third,
    height: "60%",
    // top: 40,
    justifyContent: "space-between",
  },
  inputsSection: {
    marginTop: 64,
  },
  done: {
    borderColor: color.primary,
    borderWidth: 2,
  },
  text: {
    alignSelf: "center",
  },
  logo: {
    position: "relative",
    top: 32,
    start: 0,
    alignSelf: "center",
  },
  loginText: {
    // marginStart: 16,
  },
  textLogo: {
    color: color.primary,
  },
});
