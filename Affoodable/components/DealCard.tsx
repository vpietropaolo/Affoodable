import styles from "../styles/DealCard";
import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Card } from "react-native-elements";

const DealCard = ({ title, img, description, updated, original }) => {
  return (
    <View>
      <Card>
        <Image source={img} style={styles.images} />
        <View style={styles.text}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <View style={styles.prices}>
            <Text style={{ fontSize: 18, fontWeight: 700, color: "#f64801" }}>
              ${updated}
            </Text>
            <Text
              style={{
                textDecorationLine: "line-through",
                fontSize: 12,
                marginLeft: 10,
                marginTop: 4
              }}
            >
              ${original}
            </Text>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default DealCard;
