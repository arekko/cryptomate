import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { fetchCryptoData } from "../actions/cryptoActions";
import { theme } from "../constants";
import { withCryptoService } from "../hocs/withCryptoService";

interface IMarketProps {
  fetchCrypto: Function;
  crypto: any;
  loading: boolean;
}

const M: React.FC<IMarketProps> = ({ fetchCrypto, crypto, loading }) => {
  useEffect(() => {
    fetchCrypto();
  }, []);

  console.log(crypto);

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
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.gray,
        padding: 25,
        paddingBottom: 0
      }}
    >
      <FlatList
        data={crypto}
        keyExtractor={(_, index) => `${index}`}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }: any) => {
          console.log(item);

          return (
            <View style={styles.container}>
              <View style={styles.titleContainer}>
                <Image
                  source={{
                    uri: `https://www.cryptocompare.com${
                      item.CoinInfo.ImageUrl
                    }`
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
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    borderRadius: 15,
    marginBottom: 15
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

const mapDispatchToProps = (dispatch: any, { cryptoService }: any) =>
  bindActionCreators(
    {
      fetchCrypto: fetchCryptoData(cryptoService)
    },
    dispatch
  );

const mapStateToProps = ({ crypto: { loading, crypto } }: any) => ({
  crypto,
  loading
});

export const Market = compose(
  withCryptoService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(M);
