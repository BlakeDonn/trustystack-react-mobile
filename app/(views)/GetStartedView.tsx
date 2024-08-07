import customColors from "@/assets/theme/customColors";
import { View } from "@/components/theme/Themed";
import { StyleSheet } from "react-native";
import { Button, useTheme, Text as Text } from "react-native-paper";
import { Image } from "react-native";
import Header from "@/components/layout/Header";
import Banner from "@/components/layout/Banner";
import { useRouter } from "expo-router";

const { background, buttonSecondary } = customColors.colors;
export default function GetStartedView() {
  const router = useRouter();
  return (
    <View style={styles.page} lightColor={background}>
      <Header />
      <Banner size={100} />
      <View style={styles.separator} lightColor="#eee" darkColor="#eee" />
      <View style={styles.textContainer} lightColor={background}>
        <Text style={{ color: "#B3B3B3", textAlign: "center", fontSize: 16 }}>
          We provide the highest quality computer hardware consultation and
          configuration. In addition to crafting bespoke systems for remote
          sensing, modeling, rendering, training and simulation; we serve the
          needs of content creators, commercial businesses, and gamers alike.
        </Text>
      </View>

      <View style={styles.container} lightColor={background}>
        <Button
          mode="contained"
          dark={false}
          onPress={() => router.push("/(views)/SignupView")}
        >
          <Text>Create Account</Text>
        </Button>
        <Button
          mode="contained"
          dark={false}
          onPress={() => console.log("hi")}
          buttonColor={buttonSecondary}
        >
          <Text>Continue as Guest</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    width: 275,
    marginTop: "auto",
  },
  container: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: "auto",
    gap: 25,
    padding: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    color: "white",
    height: 1,
    width: "80%",
    zIndex: 1,
  },
});
