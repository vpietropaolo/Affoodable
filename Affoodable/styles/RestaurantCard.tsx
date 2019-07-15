import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cardContainer: {
    flex: 0.5,
    backgroundColor: "#fff"
  },
  title: {
    color: "#f64801",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 5
  },
  images: {
    height: 96,
    width: 100,
    resizeMode: "cover",
    position: "absolute",
    right: 0
  }
});

export default styles;
