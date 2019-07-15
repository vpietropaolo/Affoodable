import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import MainNavigator from "./components/MainNavigator";
const axios = require('axios');

const AppNavigator = createAppContainer(MainNavigator);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [
        {
          title: "Kendall House of Pizza",
          img: require("./img/kendall.png"),
          hours: "9:00PM",
          timestamp: "5 minutes ago"
        },
        {
          title: "Aceituna Grill",
          img: require("./img/aceituna.png"),
          hours: "8:00PM",
          timestamp: "10 minutes ago"
        },
        {
          title: "Tatte Bakery & Cafe",
          img: require("./img/tatte.png"),
          hours: "8:00PM",
          timestamp: "15 minutes ago"
        },
        {
          title: "Panda Express",
          img: require("./img/panda.png"),
          hours: "9:00PM",
          timestamp: "20 minutes ago"
        }
      ],
      deals: [
        {
          title: "Meatlovers Pizza",
          img: require("./img/meat.png"),
          description: "Pepperoni, sausage, ham, chicken",
          updated: 3,
          original: 11
        },
        {
          title: "Veggie Pizza",
          img: require("./img/veggie.png"),
          description: "Tomatoes, carrots, broccoli",
          updated: 3,
          original: 11
        }
      ]
    };
    this.componentDidMount = this.componentDidMount.bind(this)
    this.func = this.func.bind(this)
  }

  componentDidMount(){
    this.func()
  }

  func(){
    var restaurants = ["Bon Me", "Kendall House of Pizza", "Aceituna Grill", "Tatte Bakery & Cafe", "Panda Express"]
    var restaurant_data = []
    var restaurant
    this.setState({restaurants:[]})
    for(var i=0; i<restaurants.length; i++){
      axios.get("http://localhost:8000/place_details/").then(function(response){
        restaurant_data.push({title:response.place_details.result.name, img:response.place_details.result.photos[0], timestamp:moment(), hours: String(moment(response.place_details.result.opening_hours.periods[0].open.time))+"-"+String(moment(response.place_details.result.opening_hours.periods[0].close.time))})
      }).then(this.setState({restaurants:this.state.restaurants.concat(restaurant_data)}))
    }
  }

  render() {
    return (
      <AppNavigator
        screenProps={{
          restaurants: this.state.restaurants,
          deals: this.state.deals
        }}
      />
    );
  }
}
