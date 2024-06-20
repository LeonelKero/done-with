import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RootContainer from "../RootContainer";

const PostListingScreen = () => {
  return (
    <RootContainer>
      <View style={styles.container}>
        <Text>PostListingScreen</Text>
      </View>
    </RootContainer>
  );
};

export default PostListingScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    paddingVertical: 16
  },
});
