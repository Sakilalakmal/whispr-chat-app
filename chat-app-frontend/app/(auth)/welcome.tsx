import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { ScreenContentWrapper } from "react-native-screens";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { colors, spacingX, spacingY } from "@/constants/theme";
import Animated, { FadeInDown } from "react-native-reanimated";
import { verticalScale } from "@/utils/styling";
import Button from "@/components/Button";
import { useRouter } from "expo-router";

export default function Welcome() {
  const router = useRouter();

  return (
    <ScreenWrapper showPattern={true} bgOpacity={0.2}>
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <Typo color={colors.white} size={40} fontWeight={900}>
            Whispr
          </Typo>
        </View>
        <Animated.Image
          entering={FadeInDown}
          source={require("../../assets/images/logo.png")}
          resizeMode={"contain"}
          style={styles.welcomeImage}
        />

        <View>
          <Typo color={colors.white} size={30} fontWeight={800}>
            stay whispering
          </Typo>
          <Typo color={colors.white} size={30} fontWeight={800}>
            with your freinds
          </Typo>
          <Typo color={colors.white} size={30} fontWeight={800}>
            and family...
          </Typo>
        </View>

        <Button onPress={() => router.push("/(auth)/register")}>
          <Typo size={23} fontWeight={"bold"}>
            Get Start
          </Typo>
        </Button>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    paddingHorizontal: spacingX._20,
    marginVertical: spacingY._10,
  },
  welcomeImage: {
    height: verticalScale(300),
    aspectRatio: 1,
    alignSelf: "center",
  },
  background: {
    flex: 1,
    backgroundColor: colors.neutral900,
  },
});
