import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { ButtonProps } from "@/utils/types";
import { colors, radius } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import Loading from "./Loading";

const Button = ({ style, onPress, children, loading = false }: ButtonProps) => {
  if (loading) {
    return (
      <View style={[style, styles.button,{backgroundColor:"transparent"}]}>
        <Loading/>
      </View>
    );
  }

  return (
    <TouchableOpacity onPress={onPress} style={[style, styles.button]}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: radius.full,
    borderCurve: "continuous",
    height: verticalScale(56),
    justifyContent: "center",
    alignItems: "center",
  },
});
