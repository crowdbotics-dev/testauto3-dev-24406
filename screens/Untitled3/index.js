import { Text } from "react-native";
import React from "react";
import { View } from "react-native";

const Untitled3 = () => {
  return <View style={{
    backgroundColor: '#f0f0f1',
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
      <Text style={{
      left: 65,
      top: 16,
      position: "absolute",
      width: 100,
      height: 50,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0
    }}>Testing World </Text><View style={{
      left: 51,
      top: 110,
      position: "absolute",
      width: 121,
      height: 151,
      backgroundColor: "#E4E4E4",
      borderRadius: "50%"
    }}></View></View>;
};

export default Untitled3;