import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import DWEmptyItem from "../../components/list/DWEmptyItem";
import DWItemAction from "../../components/list/DWItemAction";
import DWSwipebableListItem from "../../components/list/DWSwipebableListItem";
import HorizontalSerparator from "../../components/separetor/HorizontalSerparator";
import color from "../../config/color";
import RootContainer from "../RootContainer";

const fakeData = [
  {
    id: 1,
    name: "Leonel ka",
    content:
      "leonel ka drop a document for ka drop a document for ka drop a document for ka drop a document for ka drop a document for ka drop a document for you.",
  },
  {
    id: 2,
    name: "Mensah",
    content: "Mensah is on the meeting with Boss.",
  },
  {
    id: 3,
    name: "Santa",
    content:
      "Said: Santa is not far from here!Santa is not far from here!Santa is not far from here!Santa is not far from here!Santa is not far from here!Santa is not far from here!Santa is not far from here!",
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState(fakeData);
  const [isRefreshing, setIsRefreshing] = useState(false);

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
            subtitleNumberOfLines={3}
            renderRightActions={
              <DWItemAction
                actionName="Delete"
                iconName={"trash-can"}
                iconColor={color.white}
                iconSize={30}
                onPress={() => handleDelete(message.id)}
              />
            }
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <HorizontalSerparator />}
        ListEmptyComponent={() => <DWEmptyItem />}
        refreshing={isRefreshing}
        onRefresh={() =>
          setMessages([
            ...messages,
            {
              id: messages.length + 100,
              name: "Message " + messages.length + 100,
              content: "Message content " + messages.length + 100,
            },
          ])
        }
      />
    </RootContainer>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 16
    flex: 1,
  },
});
