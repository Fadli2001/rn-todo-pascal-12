import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TabBarItem from "../../../shared/components/TabBarItem";

export default function TabBar() {
  return (
    <View style={styles.container}>
      <TabBarItem title={"All"} />
      <TabBarItem title={"Active"} />
      <TabBarItem title={"Complete"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "white",
  },
});
