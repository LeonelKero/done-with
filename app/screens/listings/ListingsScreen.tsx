import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import RootContainer from "../RootContainer";
import DWCard from "../../components/card/DWCard";

const FakeListing = [
  {
    id: 1,
    title: "Visit tour of Bafoussam",
    price: 50,
    image: require("../../assets/nature.jpeg"),
  },
  {
    id: 2,
    title: "Visit tour of Mont Ngaoundere",
    price: 80,
    image: require("../../assets/nature.jpeg"),
  },
  {
    id: 3,
    title: "Visit tour of PP",
    price: 540,
    image: require("../../assets/nature.jpeg"),
  },
  {
    id: 4,
    title: "Simple tour of the community",
    price: 5,
    image: require("../../assets/nature.jpeg"),
  },
];

const ListingsScreen = () => {
  return (
    <RootContainer>
      <View style={styles.constainer}>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={FakeListing}
          renderItem={({ item }) => (
            <DWCard
              title={item.title}
              subTitle={`$ ${item.price}`}
              image={item.image}
            />
          )}
        />
      </View>
    </RootContainer>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  constainer: {
    paddingHorizontal: 8,
  },
});
