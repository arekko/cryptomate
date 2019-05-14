import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { fetchNews } from "../actions";
import { NewsList } from "../components/NewsList";
import { Spinner } from "../components/Spinner";
import { theme } from "../constants";
import { withNewsService } from "../hocs";
import { NewsApiService } from "../services";
interface INewsProps {
  newsApiService: NewsApiService;
  news: any;
  newsLoaded: any;
  newsRequested: any;
  loading: boolean;
  fetchNews: any;
}

const N: React.FC<INewsProps> = ({ news, loading, fetchNews }) => {
  useEffect(() => {
    fetchNews();
  }, []);

  console.log(news);

  const data = news.filter((item: any) => item.urlToImage);

  const renderNews = () => {
    return (
      <View style={styles.newsContainer}>
        <NewsList data={data as any} />
      </View>
    );
  };

  return loading ? (
    <Spinner size={70} color={theme.colors.accent} />
  ) : (
    <View style={styles.container}>
      <SafeAreaView />
      {renderNews()}
    </View>
  );
};

const mapStateToProps = ({ news, loading }: any) => {
  return { news, loading };
};

// const mapDispatchToProps = (dispatch: any, { newsApiService }: any) => {
//   return {
//     fetchNews: fetchNews(newsApiService, dispatch)
//   };
// };

const mapDispatchToProps = (dispatch: any, { newsApiService }: any) =>
  bindActionCreators({ fetchNews: fetchNews(newsApiService) }, dispatch);

export const News = compose(
  withNewsService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(N);

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray,
    flex: 1
  },
  newsLabel: {
    fontSize: theme.sizes.header,
    color: theme.colors.textGray,
    marginBottom: 20
  },
  newsContainer: {
    marginTop: 5,
    padding: 15,
    paddingBottom: 0
  }
});
