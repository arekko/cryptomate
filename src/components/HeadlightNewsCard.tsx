import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const screenWidth = Dimensions.get("screen").width;

interface ICardProps {
  url: string;
  title: string;
}

export const HeadlightNewsCard: React.FC<ICardProps> = ({ url, title }) => (
  <View style={styles.card}>
    <Image source={{ uri: url }} style={styles.img} />
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: "center",
    position: "relative",
    height: 180
  },
  img: {
    borderRadius: 15,
    height: 180,
    width: screenWidth - 30
  },

  title: {
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "100%",
    backgroundColor: "rgba(0,0,0,.3)",
    color: "#fff",
    padding: 15,
    borderRadius: 15,
    overflow: "hidden",
    textAlign: "center"
  }
});
