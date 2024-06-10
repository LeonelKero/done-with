import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import DWItemAction from "../../components/list/DWItemAction";
import DWListItem from "../../components/list/DWListItem";
import HorizontalSerparator from "../../components/separetor/HorizontalSerparator";
import color from "../../config/color";
import RootContainer from "../RootContainer";
import DWEmptyItem from "../../components/list/DWEmptyItem";
import DWSwipebableListItem from "../../components/list/DWSwipebableListItem";

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
  const [messages, setMessages] = useState(fakeData);

  const handleDelete = (messageId: number) => {
    // Delete element
    const remainingMessages = messages.filter((msg) => msg.id !== messageId);
    setMessages(remainingMessages);
    // Update on server
  };

  return (
    <RootContainer custonStyle={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item: message }) => (
          <DWSwipebableListItem
            onPress={() => console.log("press for ", message)}
            image={require("../../assets/nature.jpeg")}
            title={message.name}
            subtitle={message.content}
            renderRightActions={() => (
              <>
                <DWItemAction
                  actionName="Delete"
                  iconName={"trash-can"}
                  iconColor={color.white}
                  iconSize={30}
                  onPress={() => handleDelete(message.id)}
                />
                {/* <View style={{ backgroundColor: color.lightBlue, width: 80 }} /> */}
              </>
            )}
            renderLeftActions={() => (
              <DWItemAction
                actionName="Archive"
                iconName={"archive"}
                iconColor={color.white}
                iconSize={30}
                onPress={() => console.log("Action archive ", message)}
              />
            )}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <HorizontalSerparator />}
        ListEmptyComponent={() => <DWEmptyItem />}
      />
    </RootContainer>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 16
    flex: 1
  },
});
