import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView
} from "react-native";
import { Card, Rating, Input, Button } from "react-native-elements";
import DealCard from "../components/DealCard";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import styles from "../styles/RestaurantProfileView";

class RestaurantProfileView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            {/* <MaterialCommunityIcons name="window-close" size={30} /> */}
            <Text>&nbsp;&nbsp;&nbsp;Close</Text>
          </TouchableOpacity>
          {/* Main card for restuarants page */}
          <Card image={require("../img/kendall.png")}>
            <Text style={styles.restaurantTitle}>Kendall House of Pizza</Text>
            <View style={styles.rating}>
              <Rating
                ratingCount={5}
                readonly={true}
                startingValue={5}
                imageSize={15}
              />
              <Text style={styles.reviews}>22 reviews</Text>
            </View>
            <Text>
              American&nbsp;&nbsp;•&nbsp;&nbsp;$&nbsp;&nbsp;•&nbsp;&nbsp;1.0
              miles
            </Text>
            <Text>Open until 9:00PM</Text>
          </Card>

          {/* Section for Current Deals */}
          <Text style={styles.sectionTitle}>Current Deals</Text>
          {this.props.screenProps.deals.map((deal, index) => (
            <DealCard
              key={index}
              title={deal.title}
              img={deal.img}
              description={deal.description}
              updated={deal.updated}
              original={deal.original}
            />
          ))}

          {/* Section for Past Deals */}
          <Text style={styles.sectionTitle}>Past Deals</Text>
          {this.props.screenProps.deals.map((deal, index) => (
            <DealCard
              key={index}
              title={deal.title}
              img={deal.img}
              description={deal.description}
              updated={deal.updated}
              original={deal.original}
              styles={styles.past}
            />
          ))}

          {/* Section for Reviews */}
          <Text style={styles.sectionTitle}>Reviews</Text>
          <View style={{ marginHorizontal: 20 }}>
            <Input
              inputStyle={{ fontSize: 14 }}
              placeholder="Type your review here..."
            />
            <Rating
              style={{ marginVertical: 10 }}
              ratingCount={5}
              imageSize={15}
            />
            <Button title="Submit Review" />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default RestaurantProfileView;
