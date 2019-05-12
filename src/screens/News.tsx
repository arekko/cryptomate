import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { HeadlightNewsCard } from "../components/HeadlightNewsCard";
import { theme } from "../constants";
import { btcNews } from "../constants/mock";
import { NewsList } from "../components/NewsList";

interface INewsProps {}

interface INewsStates {}

export const News: React.FC<INewsProps> = () => {
  const renderHeadlineNews = () => {
    return (
      <View>
        <FlatList
          horizontal
          pagingEnabled
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          snapToAlignment="center"
          data={btcNews}
          keyExtractor={(item, index) => `${index}`}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback>
              <HeadlightNewsCard title={item.title as string} url={item.url} />
            </TouchableWithoutFeedback>
          )}
        />
      </View>
    );
  };

  const renderNews = () => {
    return (
      <View>
        <Text>Crypto News</Text>
        <NewsList data={btcNews as any}/>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView />
      {renderHeadlineNews()}
      {renderNews()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray,
    flex: 1
  }
});
