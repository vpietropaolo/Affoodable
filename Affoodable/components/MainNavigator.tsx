import { createStackNavigator } from "react-navigation";
import TabsNavigator from "./TabsNavigator";
import RestaurantProfileView from "./RestaurantProfileView";
import MyDealsView from "./MyDealsView";

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: TabsNavigator
    },
    RestaurantProfileView: {
      screen: RestaurantProfileView
    },
    MyDealsView: {
      screen: MyDealsView
    }
  },
  {
    mode: "modal",
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default MainNavigator;
