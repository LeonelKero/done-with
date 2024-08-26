import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import listingsApi from "../../api/listings";
import DWCard from "../../components/card/DWCard";
import RootContainer from "../RootContainer";

const ListingsScreen = ({ navigation }) => {
  const [listings, setListings] = useState([]);

  const loadListings = async () => {
    const response = await listingsApi.fetchListings();
    setListings(response.data);
  };

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <RootContainer>
      <View style={styles.constainer}>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={listings}
          renderItem={({ item }) => (
            <DWCard
              onPress={() => navigation.navigate("Feed Details", item)}
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
