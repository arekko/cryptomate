import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { FlatList } from "react-navigation";
import { useNavigation } from "react-navigation-hooks";
import { HeadlightNewsCard } from "./HeadlightNewsCard";
import { NewsItem } from "./NewsItem";

interface INewsListProps {
  data: [any];
  refreshing: boolean;
  onRefresh: () => void;
}

export const NewsList: React.FC<INewsListProps> = ({ data, refreshing, onRefresh }) => {

  const { navigate } = useNavigation();
  const headerData = data.slice(0, 3);
  const bodyData = data.slice(3);


  const onPress = (item: any) => {
    navigate("NewsDetail", {
      item: item
    });
  };

  const renderHeadlineNews = () => {
    return (
      <View style={{ marginBottom: 15 }}>
        <FlatList
          horizontal
          pagingEnabled
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          snapToAlignment="center"
          data={headerData}
          keyExtractor={(item, index) => `${index}`}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => onPress(item)}>
              <HeadlightNewsCard
                title={item.title as string}
                url={item.urlToImage}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    );
  };
  return (
    <View>
      <FlatList
        ListHeaderComponent={renderHeadlineNews()}
        data={bodyData}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onPress(item)}>
            <NewsItem
              title={item.title as string}
              url={item.urlToImage}
              text={item.content}
            />
          </TouchableOpacity>
        )}
        refreshing={refreshing}
        onRefresh={() => onRefresh()}
      />
    </View>
  );
};

// export const NewsList = withNavigation(NL);
