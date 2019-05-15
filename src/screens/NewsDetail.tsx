import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { NavigationScreenProp, ScrollView } from "react-navigation";
import { useNavigationParam } from "react-navigation-hooks";
import { theme } from "../constants";

interface INewsDetailProps {
  navigation: NavigationScreenProp<any, any>;
}

const screenWidth = Dimensions.get("screen").width;

const NewsDetail: React.FC<INewsDetailProps> = () => {
  const item = useNavigationParam("item");

  const renderNew = () => (
    <ScrollView>
      <View style={styles.newsContainer}>
        <View style={styles.newsHeader} />
        <Image source={{ uri: item.urlToImage }} style={styles.newsImg} />
        <View style={styles.textWrapper}>
          <Text style={styles.newsTitle}>{item.title}</Text>
          <Text style={styles.newsText}>{item.content}</Text>
        </View>
      </View>
    </ScrollView>
  );

  return <View style={{ flex: 1 }}>{renderNew()}</View>;
};

const styles = StyleSheet.create({
  newsContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  newsHeader: {
    width: screenWidth,
    height: 85,
    backgroundColor: theme.colors.accent
  },
  newsLabel: {
    color: theme.colors.white,
    fontSize: 40
  },
  newsImg: {
    borderRadius: 15,
    height: 200,
    width: "85%",
    marginTop: -85
  },
  textWrapper: {
    padding: 20
  },
  newsTitle: {
    fontSize: 30,
    color: "#454F63"
  },
  newsText: {
    fontSize: 16,
    color: "#78849E",
    marginTop: 15
  }
});

export default NewsDetail;
