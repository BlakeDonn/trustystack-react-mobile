import customColors from "@/assets/theme/customColors";
import { View } from "@/components/theme/Themed";
import { StyleSheet } from "react-native";
import { Button, useTheme, Text as Text } from "react-native-paper";
import { Image } from "react-native";
import Header from "@/components/layout/Header";
import Banner from "@/components/layout/Banner";
import { useRouter } from "expo-router";

const { background, buttonSecondary } = customColors.colors;
export default function WelcomeScreen() {
  const router = useRouter();
  return (
    <View style={styles.page} lightColor={background}>
      <Header />
      <View style={styles.bannerContainer} lightColor={background}>
        <Banner />
      </View>

      <View style={styles.container} lightColor={background}>
        <Button
          mode="contained"
          dark={false}
          onPress={() => router.push("/(views)/GetStartedView")}
        >
          <Text>Get Started</Text>
        </Button>
        <Button
          mode="contained"
          dark={false}
          onPress={() => console.log("hi")}
          buttonColor={buttonSecondary}
        >
          <Text>Learn More</Text>
        </Button>
      </View>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bannerContainer: {
    width: "100%",
    marginTop: "auto",
  },
  container: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 25,
    padding: 30,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
