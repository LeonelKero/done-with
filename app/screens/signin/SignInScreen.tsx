import { Formik } from "formik";
import React from "react";
import { StyleSheet, View } from "react-native";
import { object, string } from "yup";
import DWFormField from "../../components/form/DWFormField";
import DWSubmitButton from "../../components/form/DWSubmitButton";
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
            {({ values, errors, handleChange, setFieldTouched, touched }) => (
              <View style={styles.formView}>
                <View style={styles.inputsSection}>
                  <DWFormField
                    field={"username"}
                    placeholder={"Your email"}
                    iconName={"email"}
                    errors={errors}
                    value={values.username}
                    isSecure={false}
                    touched={touched}
                    keyboardType={"email-address"}
                    handleChange={handleChange}
                    setFieldTouched={setFieldTouched}
                  />
                  <DWFormField
                    field={"password"}
                    placeholder={"Password"}
                    iconName={"key"}
                    errors={errors}
                    value={values.password}
                    isSecure={true}
                    touched={touched}
                    keyboardType={"default"}
                    handleChange={handleChange}
                    setFieldTouched={setFieldTouched}
                  />
                </View>
                <DWSubmitButton title="Login" />
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
  },
  formView: {
    height: "60%",
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
  loginText: {},
  textLogo: {
    color: color.primary,
  },
});
