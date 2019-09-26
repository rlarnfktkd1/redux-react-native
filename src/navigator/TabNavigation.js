import React from 'react';
import {Platform} from "react-native";
import {createAppContainer} from "react-navigation"
import {createBottomTabNavigator} from "react-navigation-tabs";
import {BG_COLOR} from "../constants/Colors";
import MoviesScreen from "../screens/Movies"
import SearchScreen from "../screens/Search"
import TVScreen from "../screens/TV"

import TabBarIcon from "../components/TabBarIcon";

const TabNavigation = createBottomTabNavigator(
  {
    Movies: {
      screen: MoviesScreen,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-film" : "md-film"}
          />
        )
      }
    },
    TV: {
      screen: TVScreen,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-tv" : "md-tv"}
           />
        )
      }
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-search" : "md-search"}
           />
        )
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: true,
      style: {
        color: "white",
        backgroundColor: BG_COLOR
      }
    }
  }
)

export default createAppContainer(TabNavigation);