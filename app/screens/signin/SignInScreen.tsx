import { Entypo } from "@expo/vector-icons";
import { Formik } from "formik";
import React from "react";
import { StyleSheet, View } from "react-native";
import { object, string } from "yup";
import DWButton from "../../components/button/DWButton";
import DWTextInput from "../../components/input/DWTextInput";
import DWAppLogo from "../../components/logo/DWAppLogo";
import color from "../../config/color";
import RootContainer from "../RootContainer";
import DWText from "../../components/text/DWText";

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
            {({ values, errors, isValid, handleChange, handleSubmit }) => (
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
                  />
                  <DWText customStyle={{color: color.deepRed, fontSize: 16, marginBottom: 8,  paddingHorizontal: 16}}>{errors.username}</DWText>
                  <DWTextInput
                    placeholder="Password"
                    value={values.password}
                    inputType="secure-secret"
                    isSecure={true}
                    keyboardType="default"
                    getText={handleChange("password")}
                    Icon={<Entypo name="key" color={color.gray} size={20} />}
                  />
                  <DWText customStyle={{color: color.deepRed}}>{errors.password}</DWText>
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
