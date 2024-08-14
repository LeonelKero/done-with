import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { object, string } from "yup";

const signupValidationSchema = object({
  name: string().min(2).required().label("Name"),
  email: string().email().required().label("Email"),
  password: string().min(8).required().label("Password"),
});

const SignUpScreen = () => {
  return (
    <View>
      <Text>SignUpScreen</Text>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});
