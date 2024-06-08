import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import DWListItem from "../../components/list/DWListItem";
import HorizontalSerparator from "../../components/separetor/HorizontalSerparator";
import color from "../../config/color";
import RootContainer from "../RootContainer";

const fakeData = [
  {
    id: 1,
    name: "Leonel ka",
    content: "leonel ka drop a document for you.",
  },
  {
    id: 2,
    name: "Mensah",
    content: "Mensah is on the meeting with Boss.",
  },
  {
    id: 3,
    name: "Santa",
    content: "Santa is not far from here!",
  },
];

const MessagesScreen = () => {
  return (
    <RootContainer custonStyle={styles.container}>
      <FlatList
        data={fakeData}
        renderItem={({ item }) => (
          <DWListItem
            onPress={() => console.log("press for ", item)}
            image={require("../../assets/nature.jpeg")}
            title={item.name}
            subtitle={item.content}
            renderRightActions={() => (
              <>
                <View style={{ backgroundColor: color.secondary, width: 80 }} />
                <View style={{ backgroundColor: color.lightBlue, width: 80 }} />
              </>
            )}
            renderLeftActions={() => (
              <>
                <View style={{ backgroundColor: color.third, width: 80 }} />
              </>
            )}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <HorizontalSerparator />}
      />
    </RootContainer>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 16
  },
});
