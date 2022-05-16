import { Text } from "react-native";
import React from "react";
import { View } from "react-native";

const Untitled1 = () => {
  return <View style={{
    backgroundColor: '#f0f0f1',
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
      <View style={{
      left: 21,
      top: 45,
      position: "absolute",
      height: 60,
      width: 140,
      backgroundColor: "#c32a2a",
      borderRadius: 0,
      color: "#777777"
    }}></View><Text style={{
      left: 52,
      top: 170,
      position: "absolute",
      width: 100,
      height: 50,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0
    }}>Lor test works </Text></View>;
};

export default Untitled1;