import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import HomeView from "../views/HomeView";
import SearchView from "../views/SearchView";
import ProfileView from "../views/ProfileView";

const TabsNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeView,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarIcon: ({ tintColor }) => (
        <MaterialCommunityIcons
          name="home-outline"
          size={20}
          color={tintColor}
        />
      )
    }
  },
  Search: {
    screen: SearchView,
    navigationOptions: {
      tabBarLabel: "Search",
      tabBarIcon: ({ tintColor }) => (
        <MaterialCommunityIcons
          name="map-search-outline"
          size={20}
          color={tintColor}
        />
      )
    }
  },
  Profile: {
    screen: ProfileView,
    navigationOptions: {
      tabBarLabel: "Profile",
      tabBarIcon: ({ tintColor }) => (
        <MaterialCommunityIcons
          name="account-star-outline"
          size={20}
          color={tintColor}
        />
      ),
      headerVisible: false
    }
  }
});

export default TabsNavigator;
