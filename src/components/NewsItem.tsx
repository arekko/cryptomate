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
          <Text numberOfLines={3} ellipsizeMode="tail" style={styles.title}>
            {title}
          </Text>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.text}>
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
    // backgroundColor: theme.colors.gray2,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginBottom: 10
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
    flexGrow: 1,
    padding: 15
  },
  title: {
    flexWrap: "wrap",
    color: theme.colors.titleGray,
    fontSize: theme.sizes.header,
    marginBottom: 8
  },
  text: {
    color: theme.colors.textGray,
    fontSize: theme.sizes.body
  },
  itemImg: {
    width: 115,
    height: 115,
    borderRadius: 15,
    marginLeft: -30
  }
});
