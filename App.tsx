import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.header}>
          Here are some boxes of different colors
        </Text>
        <View style={styles.blackBoxWrapper}>
          <Text style={styles.blackBox}>Black box with white text</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "white",
    paddingVertical: 10,
    paddingHorizontal: 25,
    backgroundColor: "lightblue",
    borderWidth: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontWeight: "bold",
    fontSize: 16,
  },
  blackBoxWrapper: {
    flex: 1,
  },
  blackBox: {
    color: "white",
    backgroundColor: "black",
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
