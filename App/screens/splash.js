import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});

class Splash extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <Text style={styles.container}>Splash screen</Text>
      </SafeAreaView>
    );
  }
}

export default Splash();
