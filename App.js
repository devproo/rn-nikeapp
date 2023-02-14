import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import ProductsScreen from "./src/screens/ProductsScreen";
import products from "./src/data/products";

export default function App() {
  return (
    <View style={styles.container}>
      <ProductsScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});