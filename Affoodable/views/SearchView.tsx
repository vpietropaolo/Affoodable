import React, { Component, Fragment } from "react";
import { View, SafeAreaView, TextInput, Text, Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { Card, Rating, Image } from "react-native-elements";
import styles from "../styles/SearchView";
import rpv_styles from "../styles/RestaurantProfileView";

class SearchView extends Component {
  state: {
    search: string;
    markers: Array<object>;
    show: boolean;
  };

  constructor(props: Readonly<{}>) {
    super(props);

    this.handleChangeText = this.handleChangeText.bind(this);
    this.handlePress = this.handlePress.bind(this);

    this.state = {
      search: "",
      markers: [
        {
          latlng: {
            latitude: 37.78825,
            longitude: -122.4324
          },
          title: "Marker1",
          description: "This is marker 1"
        }
      ],
      show: false
    };
  }

  handlePress(): void {
    this.setState(currState => ({
      show: !currState.show
    }));
  }

  handleChangeText(search: string): void {
    this.setState({
      search
    });
  }

  render(): JSX.Element {
    const { markers, show } = this.state;

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          <TextInput
            placeholder="Search..."
            style={styles.searchBar}
            onChangeText={this.handleChangeText}
          />
          {markers.map((marker: object) => (
            <Marker
              onPress={this.handlePress}
              onCalloutPress={this.handlePress}
              coordinate={marker.latlng}
              title={marker.title}
              description={marker.description}
            />
          ))}
        </MapView>
        {show && (
          <Card image={require("../img/kendall.png")}>
            <Text style={rpv_styles.restaurantTitle}>
              Kendall House of Pizza
            </Text>
            <View style={rpv_styles.rating}>
              <Rating
                ratingCount={5}
                readonly={true}
                startingValue={5}
                imageSize={15}
              />
              <Text style={rpv_styles.reviews}>22 reviews</Text>
            </View>
            <Text>
              American&nbsp;&nbsp;•&nbsp;&nbsp;$&nbsp;&nbsp;•&nbsp;&nbsp;1.0
              miles
            </Text>
            <Text>Open until 9:00PM</Text>
          </Card>
        )}
      </SafeAreaView>
    );
  }
}

export default SearchView;
