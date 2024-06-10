import React from "react";
import { StyleSheet, View } from "react-native";
import DWListItem from "../../components/list/DWListItem";
import RootContainer from "../RootContainer";

const AccountScreen = () => {
  return (
    <RootContainer>
      <View style={styles.container}>
        <DWListItem
          toucheble={false}
          image={require("../../assets/necher.jpeg")}
          title={"Leonel Kanmogne"}
          subtitle={"waboleonel@gmail.com"}
        />
      </View>
    </RootContainer>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
