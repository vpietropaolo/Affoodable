import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  ScrollView,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import styles from "../styles/ProfileView";

class ProfileView extends Component {
  constructor(props) {
    super(props);
    this.clicking = this.clicking.bind(this);
  }

  clicking() {
    this.props.navigation.push("MyDealsView");
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#f64801" }}>
        <ScrollView style={styles.container}>
          <View style={styles.header}>
            <View style={styles.centered}>
              <Avatar rounded size="large" title="AF" />
            </View>
            <View>
              <View style={styles.account}>
                <Text style={{ fontSize: 30, fontWeight: 700, color: "#fff" }}>
                  30
                </Text>
                <Text style={{ fontSize: 30, fontWeight: 700, color: "#fff" }}>
                  50
                </Text>
              </View>
              <View style={styles.account}>
                <Text style={{ color: "#fff" }}>Reviews</Text>
                <Text style={{ color: "#fff" }}>Following</Text>
              </View>
            </View>
          </View>
          <View style={styles.settings}>
            <FlatList
              data={[
                { key: "My Deals" },
                { key: "Notification Settings" },
                { key: "Privacy Settings" },
                { key: "Logout" }
              ]}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={this.clicking}>
                  <ListItem title={item.key} bottomDivider />
                </TouchableOpacity>
              )}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default ProfileView;
