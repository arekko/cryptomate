import React from "react";
import { View } from "react-native";
import {
  FlatList,
  TouchableWithoutFeedback
} from "react-native-gesture-handler";
import { NewsItem } from "./NewsItem";

interface INewsListProps {
  data: [any];
}

export const NewsList: React.FC<INewsListProps> = ({ data }) => {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback>
            <NewsItem
              title={item.title as string}
              url={item.url}
              text={item.text}
            />
          </TouchableWithoutFeedback>
        )}
      />
    </View>
  );
};
