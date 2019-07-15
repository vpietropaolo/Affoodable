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
import styles from "../styles/MyDealsView";

class MyDealsView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#f64801" }}>
        <ScrollView style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              {/* <MaterialCommunityIcons name="window-close" size={30} /> */}
              <Text style={{ color: "#fff", marginTop: 10 }}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Back
              </Text>
            </TouchableOpacity>
            <Text style={styles.title}>My Deals</Text>
          </View>

          {/* Section for Saved Deals */}
          <Text style={styles.sectionTitle}>Saved Deals</Text>
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
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default MyDealsView;
