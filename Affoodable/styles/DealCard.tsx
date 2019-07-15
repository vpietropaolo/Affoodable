import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cardContainer: {
    flex: 0.5,
    backgroundColor: "#fff"
  },
  title: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 5
  },
  images: {
    height: 96,
    width: 100,
    resizeMode: "cover"
  },
  text: {
    position: "absolute",
    top: 14,
    left: 120
  },
  description: {
    fontSize: 12
  },
  prices: {
    flexDirection: "row"
  }
});

export default styles;
