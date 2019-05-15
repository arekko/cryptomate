import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import { theme } from "../constants";
import { History } from "../screens/History";
import { News } from "../screens/News";
import NewsDetail from "../screens/NewsDetail";
import { Wallet } from "../screens/Wallet";
import { Market } from "./../screens/Market";

const newsStack = createStackNavigator(
  {
    News: {
      screen: News,
      navigationOptions: {
        header: null // hide header
      }
    },
    NewsDetail: NewsDetail
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        height: theme.sizes.base * 4,
        backgroundColor: theme.colors.accent, // or 'white
        borderBottomColor: "transparent",
        elevation: 0 // for android,
      },
      headerBackTitle: null,
      headerTintColor: theme.colors.white // back arrow color
    }
  }
);

const tabsBar = createBottomTabNavigator(
  {
    Market: {
      screen: Market,
      navigationOptions: {
        tabBarLabel: "Market",
        tabBarIcon: ({ tintColor }: any) => (
          <Icon name="chart-areaspline" size={25} color={tintColor} />
        )
      }
    },
    News: {
      screen: newsStack,
      navigationOptions: {
        tabBarLabel: "News",
        tabBarIcon: ({ tintColor }: any) => (
          <Icon name="newspaper" size={24} color={tintColor} />
        )
      }
    },
    History: {
      screen: History,
      navigationOptions: {
        tabBarLabel: "History",
        tabBarIcon: ({ tintColor }: any) => (
          <Icon name="history" size={25} color={tintColor} />
        )
      }
    },
    Wallet: {
      screen: Wallet,
      navigationOptions: {
        tabBarLabel: "Wallet",
        tabBarIcon: ({ tintColor }: any) => (
          <Icon name="wallet" size={25} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: theme.colors.accent,
      inactiveTintColor: theme.colors.iconGray,
      showLabel: true,
      labelStyle: {
        fontSize: theme.sizes.caption
      },
      style: {
        backgroundColor: "#fff",
        height: 55,
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: "black",
        shadowOpacity: 0.5,
        elevation: 5
      }
    }
  }
);

export default createAppContainer(tabsBar);
