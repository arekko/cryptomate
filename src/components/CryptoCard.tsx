import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { theme } from "../constants";

interface ICryptoCardProps {
  item: any;
}

export const CryptoCard: React.FC<ICryptoCardProps> = ({ item }) => {
  const change24 = (change: string) => {
    const cStyle =
      Number(change) > 0 ? styles.positiveChange : styles.negativeChange;
    const icon =
      Number(change) > 0 ? (
        <Icon name="arrow-up" size={12} color="#3FB757" />
      ) : (
        <Icon name="arrow-down" size={12} color="#E4415C" />
      );
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end"
        }}
      >
        {icon}
        <Text style={[styles.changep, cStyle]}>{`${change}%`}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.titleContainer}>
          <Image
            source={{
              uri: `https://www.cryptocompare.com${item.CoinInfo.ImageUrl}`
            }}
            style={styles.img}
          />
          <Text style={styles.title}>{item.CoinInfo.FullName}</Text>
        </View>
        <View style={{ flexDirection: "column" }}>
          <Text style={styles.price}>{item.DISPLAY.USD.PRICE}</Text>
          {change24(item.DISPLAY.USD.CHANGEPCT24HOUR)}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    borderRadius: 15,
    marginBottom: 15
    // paddingBottom: 10
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  img: { width: 30, height: 30, borderRadius: 50 },
  title: {
    fontWeight: "bold",
    fontSize: theme.sizes.font,
    color: theme.colors.titleGray,
    marginLeft: 8
  },
  price: {
    fontSize: 25,
    color: theme.colors.titleGray
  },
  changep: {
    fontSize: theme.sizes.body,
    marginLeft: 3
  },
  positiveChange: {
    color: "#3FB757"
  },
  negativeChange: {
    color: "#E4415C"
  }
});
