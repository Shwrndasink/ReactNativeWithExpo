import React from "react";
import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";

const ListItems = [
  {
    key: "1",
    name: "Learning to build a react native application",
  },
  {
    key: "2",
    name: "Learn to implement styles",
  },
  {
    key: "3",
    name: "Make a FlatList",
  },
  {
    key: "4",
    name: "Come back later...",
  },
];

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.header}>
          Here are some boxes of different colors
        </Text>
        <View style={styles.blackBoxWrapper}>
          <Text style={styles.blackBox}>Black box with white text</Text>
          <FlatList
            style={{ marginTop: 20 }}
            data={ListItems}
            keyExtractor={(item) => {
              return item.key;
            }}
            renderItem={({ item }) => <Text>{item.name}</Text>}
          ></FlatList>
        </View>
      </View>
    </SafeAreaView>
  );
}
// Should be refactored, to be more dry
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
