import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { ReactNode } from "react";
import { SectionList, StyleSheet, View } from "react-native";
import DWIcon from "../../components/icon/DWIcon";
import DWBasicItem from "../../components/list/DWBasicItem";
import DWListItem from "../../components/list/DWListItem";
import DWText from "../../components/text/DWText";
import color from "../../config/color";
import RootContainer from "../RootContainer";

const Menus: MenuItem[] = [
  {
    sectionTitle: "Personal",
    data: [
      {
        name: "My Listing",
        iconObject: (
          <MaterialCommunityIcons
            name="format-list-bulleted"
            size={24}
            color={color.softDark}
          />
        ),
        targetScreen: "My Listings",
      },
      {
        name: "My Messages",
        iconObject: (
          <MaterialCommunityIcons
            name="email"
            size={24}
            color={color.softDark}
          />
        ),
        targetScreen: "My Messages",
      },
    ],
  },
  {
    sectionTitle: "Configuration",
    data: [
      {
        name: "Settings",
        iconObject: (
          <MaterialCommunityIcons name="cog" size={24} color={color.softDark} />
        ),
        targetScreen: "Settings",
      },
    ],
  },
];

interface MenuItem {
  sectionTitle: string;
  data: Data[];
}

interface Data {
  name: string;
  iconObject: ReactNode;
  targetScreen: string;
}

const AccountScreen = ({ navigation }) => {
  return (
    <RootContainer>
      <View style={styles.container}>
        <DWListItem
          toucheble={false}
          image={require("../../assets/necher.jpeg")}
          title={"Leonel Kanmogne"}
          subtitle={"waboleonel@gmail.com"}
        />
        <SectionList
          style={styles.listStyle}
          sections={Menus}
          keyExtractor={(item, index) => item.name + index}
          renderSectionHeader={({ section: { sectionTitle } }) => (
            <DWText customStyle={styles.sectionStyle}>{sectionTitle}</DWText>
          )}
          renderItem={({ item: menu, index }) => (
            <DWBasicItem
              key={index}
              title={menu.name}
              onPress={() => navigation.navigate(menu.targetScreen)}
            >
              <DWIcon Icon={menu.iconObject} />
            </DWBasicItem>
          )}
        />
        <DWBasicItem
          title="Log Out"
          customStyle={styles.itemMenu}
          customTextStyle={styles.iconText}
          onPress={() => console.log("Press on -> Log Out")}
        >
          <DWIcon
            Icon={<AntDesign name="logout" color={color.deepRed} size={24} />}
          />
        </DWBasicItem>
      </View>
    </RootContainer>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  iconStyle: {},
  listStyle: {
    marginTop: 8,
  },
  itemMenu: {
    marginTop: 24,
  },
  sectionStyle: {
    paddingHorizontal: 24,
    marginTop: 16,
    paddingVertical: 4,
    fontSize: 18,
    color: color.primary,
  },
  iconText: { color: color.deepRed },
  top: {
    flexDirection: "row",
    width: "100%",
  },
});
