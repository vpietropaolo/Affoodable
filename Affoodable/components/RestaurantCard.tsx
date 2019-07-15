import styles from "../styles/RestaurantCard";
import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Card } from "react-native-elements";

const RestaurantCard = ({ title, img, hours, timestamp, clicking }) => {
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity onPress={clicking}>
        <Card>
          <Text style={styles.title}>
            {"\n"}
            {title}
          </Text>
          <Image source={img} style={styles.images} />
          <Text>Open until {hours}</Text>
          <Text>
            Posted {timestamp}
            {"\n"}
          </Text>
        </Card>
      </TouchableOpacity>
    </View>
  );
};

export default RestaurantCard;
