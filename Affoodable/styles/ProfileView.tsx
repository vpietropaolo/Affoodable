import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f64801"
  },
  header: {
    backgroundColor: "#f64801",
    padding: 50
  },
  title: {
    marginLeft: 20,
    marginTop: 150,
    fontSize: 32,
    fontWeight: "800",
    color: "#fff"
  },
  restaurantTitle: {
    marginLeft: 5,
    fontSize: 32,
    fontWeight: "800"
  },
  section: {
    marginTop: 10,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "600",
    color: "#000000"
  },
  rating: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  stars: {
    paddingLeft: 15
  },
  subtitle: {
    marginLeft: 20,
    fontSize: 18,
    fontWeight: "500",
    color: "#fff"
  },
  cardContainer: {
    flex: 0.5
  },
  images: {
    height: 60,
    width: 80,
    resizeMode: "cover",
    position: "absolute",
    right: 0,
    top: 30
  },
  centered: {
    flexDirection: "row",
    justifyContent: "center"
  },
  account: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  settings: {
    backgroundColor: "#fff",
    height: 500
  }
});

export default styles;
