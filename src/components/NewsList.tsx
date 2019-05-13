import React from "react";
import { View } from "react-native";
import {
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native-gesture-handler";
import { HeadlightNewsCard } from "./HeadlightNewsCard";
import { NewsItem } from "./NewsItem";

interface INewsListProps {
  data: [any];
}

export const NewsList: React.FC<INewsListProps> = ({ data }) => {
  const renderHeadlineNews = () => {
    return (
      <View>
        <FlatList
          horizontal
          pagingEnabled
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          snapToAlignment="center"
          data={data}
          keyExtractor={(item, index) => `${index}`}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback>
              <HeadlightNewsCard
                title={item.title as string}
                url={item.urlToImage}
              />
            </TouchableWithoutFeedback>
          )}
        />
      </View>
    );
  };
  return (
    <View>
      <FlatList
        ListHeaderComponent={renderHeadlineNews()}
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <NewsItem
              title={item.title as string}
              url={item.urlToImage}
              text={item.content}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
