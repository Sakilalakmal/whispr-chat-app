import { colors } from "@/constants/theme";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace("/(auth)/welcome");
    }, 2000);
  });

  return (
    <View style={style.container}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={colors.neutral900}
      />
      <Animated.Image
        style={style.logo}
        source={require("../assets/images/logo.png")}
        entering={FadeInDown.duration(700).springify()}
        resizeMode={"contain"}
      />
      <Text>Splash Screen</Text>
    </View>
  );
}

export default SplashScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.neutral900,
  },
  logo: {
    height: "25%",
    aspectRatio: 1,
  },
});
