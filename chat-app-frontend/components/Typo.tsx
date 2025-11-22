import { View, Text, TextStyle } from "react-native";
import React from "react";
import { TypoProps } from "@/utils/types";
import { colors } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";

const Typo = ({
  children,
  style,
  color = colors.text,
  fontWeight = 400,
  size = 16,
  textProps,
}: TypoProps) => {
  const textStyle: TextStyle = {
    fontSize: verticalScale(size),
    color: color,
    fontWeight: fontWeight,
  };

  return (
    <Text style={[textStyle, style]} {...textProps}>
      {children}
    </Text>
  );
};

export default Typo;
