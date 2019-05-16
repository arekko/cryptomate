import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { fetchCryptoData } from "../actions/cryptoActions";
import { CryptoCard } from "../components/CryptoCard";
import { Spinner } from "../components/Spinner";
import { theme } from "../constants";
import { withCryptoService } from "../hocs/withCryptoService";

interface IMarketProps {
  fetchCrypto: Function;
  crypto: any;
  loading: boolean;
}

const M: React.FC<IMarketProps> = ({ fetchCrypto, crypto, loading }) => {
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchCrypto();
  }, []);
  console.log(crypto);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchCrypto();
    setRefreshing(false);
  };

  const renderCryptoList = () => (
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
        refreshing={refreshing}
        onRefresh={() => onRefresh()}
        keyExtractor={(_, index) => `${index}`}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }: any) => <CryptoCard item={item} />}
      />
    </View>
  );

  return loading ? (
    <Spinner size={30} color={theme.colors.accent} />
  ) : (
    renderCryptoList()
  );
};

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
