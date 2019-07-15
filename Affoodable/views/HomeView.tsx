import styles from "../styles/HomeView";
import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import RestaurantCard from "../components/RestaurantCard";

class Home extends Component {
  constructor(props) {
    super(props);
    this.clicking = this.clicking.bind(this);
  }

  clicking() {
    this.props.navigation.push("RestaurantProfileView");
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome back!</Text>
          <Text style={styles.subtitle}>
            These restaurants are offering {"\n"}
            affoodable deals:{"\n"}
          </Text>
        </View>

        <View style={styles.restaurantCards}>
          {this.props.screenProps.restaurants.map((restaurant, index) => (
            <RestaurantCard
              key={index}
              title={restaurant.title}
              img={restaurant.img}
              hours={restaurant.hours}
              timestamp={restaurant.timestamp}
              clicking={this.clicking}
            />
          ))}
        </View>
      </ScrollView>
    );
  }
}

export default Home;
