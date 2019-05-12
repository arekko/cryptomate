import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { theme } from "../constants";

interface INewsItemProps {
  title: string;
  url: string;
  text: string;
}

const screenWidth = Dimensions.get("screen").width;

export const NewsItem: React.FC<INewsItemProps> = ({ title, url, text }) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.innerContainer}>
        <Image source={{ uri: url }} style={styles.itemImg} />
        <View style={styles.textWrapper}>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.text}>
            {title}
          </Text>
          <Text numberOfLines={2} ellipsizeMode="tail">
            {text}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    width: screenWidth * 0.95,
    // backgroundColor: theme.colors.gray2,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginBottom: 20
  },
  innerContainer: {
    backgroundColor: theme.colors.white,
    width: "90%",
    borderRadius: 15,
    height: 145,
    flexDirection: "row",
    alignItems: "center"
  },
  textWrapper: {
    flexDirection: "column",
    width: 0,
    flexGrow: 1
  },
  text: {
    flexWrap: "wrap"
  },
  itemImg: {
    width: 110,
    height: 110,
    borderRadius: 15,
    marginLeft: -30
  }
});
