import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#f64801",
    flex: 0.25,
    paddingBottom: 10
  },
  title: {
    marginLeft: 20,
    marginTop: 20,
    fontSize: 32,
    fontWeight: "800",
    color: "#fff"
  },
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  restaurantTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#f64801"
  },
  sectionTitle: {
    marginTop: 30,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "700",
    color: "#000000"
  },
  rating: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  reviews: {
    paddingLeft: 10
  },
  input: {
    margin: 20
  }
});

export default styles;
