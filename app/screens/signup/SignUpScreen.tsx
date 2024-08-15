import { Formik } from "formik";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { object, string } from "yup";
import DWFormField from "../../components/form/DWFormField";
import DWSubmitButton from "../../components/form/DWSubmitButton";
import DWAppLogo from "../../components/logo/DWAppLogo";
import DWText from "../../components/text/DWText";
import color from "../../config/color";
import RootContainer from "../RootContainer";

const signupValidationSchema = object({
  name: string().min(2).required().label("Name"),
  email: string().email().required().label("Email"),
  password: string().min(8).required().label("Password"),
  confirmPassword: string().min(8).required().label("Confirm password"),
});

// const example = (txt: any) => console.log("TEXT", txt);


const SignUpScreen = () => {
  return (
    <RootContainer>
      <View style={styles.container}>
        <DWAppLogo
          logo={styles.logo}
          text={styles.textLogo}
          done={styles.done}
        />
        <DWText customStyle={styles.textMsg}>
          Create your account by filling this form.
        </DWText>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={(values) => console.log("Sign Up", values)}
          validationSchema={signupValidationSchema}
        >
          {({ values, errors, handleChange, touched, setFieldTouched }) => (
            <View style={styles.form}>
              <DWFormField
                field={"name"}
                placeholder={"Your name"}
                iconName={"key"}
                errors={errors}
                value={values.name}
                touched={touched}
                isSecure={false}
                keyboardType={"default"}
                handleChange={handleChange}
                setFieldTouched={setFieldTouched}
              />
              <DWFormField
                field={"email"}
                placeholder={"Your email"}
                iconName={"email"}
                errors={errors}
                value={values.email}
                touched={touched}
                isSecure={false}
                keyboardType={"email-address"}
                handleChange={handleChange}
                setFieldTouched={setFieldTouched}
              />
              <DWFormField
                field={"password"}
                placeholder={"Your password"}
                iconName={"key"}
                errors={errors}
                value={values.password}
                touched={touched}
                isSecure={true}
                keyboardType={"default"}
                handleChange={handleChange}
                setFieldTouched={setFieldTouched}
              />
              <DWFormField
                field={"confirmPassword"}
                placeholder={"Confirm password"}
                iconName={"key"}
                errors={errors}
                value={values.confirmPassword}
                touched={touched}
                isSecure={true}
                keyboardType={"default"}
                handleChange={handleChange}
                setFieldTouched={setFieldTouched}
              />
              {/* <TextInput placeholder="Example if text input"/> */}
              {values.confirmPassword !== values.password && (
                <DWText customStyle={styles.confirmPass}>
                  Confirm password does not match the password
                </DWText>
              )}
              <DWSubmitButton
                disabled={values.confirmPassword !== values.password}
                title="Sign Up"
              />
            </View>
          )}
        </Formik>
      </View>
    </RootContainer>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    position: "relative",
    top: 32,
    start: 0,
    alignSelf: "center",
  },
  done: {
    borderColor: color.primary,
    borderWidth: 2,
  },
  textLogo: {
    color: color.primary,
  },
  textMsg: {
    marginTop: 32,
    textAlign: "center",
    fontSize: 16,
    color: color.lightBlue,
  },
  form: {
    paddingHorizontal: 32,
    marginTop: 24,
  },
  confirmPass: {
    fontSize: 14,
    color: color.gray,
    textAlign: "center",
  },
});
