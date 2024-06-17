import { Entypo } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import DWButton from "../../components/button/DWButton";
import DWTextInput from "../../components/input/DWTextInput";
import DWAppLogo from "../../components/logo/DWAppLogo";
import DWText from "../../components/text/DWText";
import color from "../../config/color";
import RootContainer from "../RootContainer";

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
          {/* <DWText customStyle={styles.loginText}>Login</DWText> */}
          <View style={styles.inputsSection}>
            <DWTextInput
              placeholder="Username"
              defaultValue="Hello"
              inputType="default"
              isSecure={false}
              keyboardType="email-address"
              getText={(text) => console.log(text)}
              Icon={<Entypo name="email" color={color.gray} size={20} />}
            />
            <DWTextInput
              placeholder="Password"
              defaultValue="Password"
              inputType="secure-secret"
              isSecure={true}
              keyboardType="default"
              getText={(text) => console.log(text)}
              Icon={<Entypo name="key" color={color.gray} size={20} />}
            />
          </View>
        </View>
        <DWButton
          btnText={"Login"}
          handleSignInPressed={() => console.log("Login btn pressed!")}
          customStyle={{}}
        />
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
    justifyContent: 'space-between'
    // backgroundColor: color.primary,
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
