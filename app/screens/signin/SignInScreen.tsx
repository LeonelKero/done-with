import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import DWButton from "../../components/button/DWButton";
import DWTextInput from "../../components/input/DWTextInput";
import DWAppLogo from "../../components/logo/DWAppLogo";
import color from "../../config/color";
import RootContainer from "../RootContainer";

interface LoginCredentials {
  username: string;
  password: string;
}

const SignInScreen = () => {
  // const [credentials, setCredentials] = useState<LoginCredentials>(
  //   {} as LoginCredentials
  // );
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
              value={username}
              inputType="default"
              isSecure={false}
              keyboardType="email-address"
              getText={(text) => setUsername(text)}
              Icon={<Entypo name="email" color={color.gray} size={20} />}
            />
            <DWTextInput
              placeholder="Password"
              value={password}
              inputType="secure-secret"
              isSecure={true}
              keyboardType="default"
              getText={(text) => setPassword(text)}
              Icon={<Entypo name="key" color={color.gray} size={20} />}
            />
          </View>
        </View>
        <DWButton
          btnText={"Login"}
          handleSignInPressed={() =>
            console.log("Credentials", { username, password })
          }
          customStyle={{}}
          disabled={false}
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
    justifyContent: "space-between",
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
