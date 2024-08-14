import { View, ImageBackground, Text, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@rneui/base";
import { useFonts } from "expo-font";
import React, { useEffect } from "react";

export default function WelcomeScreen() {
  const navigation = useNavigation();
  getFont();
  async function getFont() {
    const [loaded, error] = await useFonts({
      "PressStart2P-Regular": require("../../assets/fonts/PressStart2P-Regular.ttf"),
      "AvenirNext-Regular": require("../../assets/fonts/AvenirNext-Regular.ttf"),
    });
  }

  return (
    <View style={{ width: "100%", aspectRatio: 9 / 19.5 }}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../../assets/welcome-background.png")}
      >
        <Text style={styles.heading}>Welcome to</Text>
        <Text style={styles.text1}>Brain</Text>
        <Text style={styles.text2}>Bites!</Text>
        <Text style={styles.subheading}>Take a bite anywhere, anytime</Text>
        <Button
          title="Learn more"
          titleStyle={styles.buttonTitle}
          buttonStyle={styles.button}
          containerStyle={styles.buttonContainer}
          onPress={() => navigation.navigate("Game")}
          accessibilityLabel="Navigate to Topics screen"
        />
      </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create({
  backgroundImage: {
      flex: 1,
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
  },
  heading: {
      color: "#FFFFFF",
      fontFamily: "AvenirNext-Regular",
      fontSize: 30,
      fontWeight: "700",
      marginTop: Platform.OS === "ios" ? 260 : 210,                                                  
      marginRight: Platform.OS === "ios" ? 220 : 210,
  },
  text1: {
      marginTop: Platform.OS === "ios" ? 5 : 20,
      fontFamily: "PressStart2P-Regular",
      fontSize: 50,
      fontWeight: "400",
      color: "gold",
      marginRight: Platform.OS === "ios" ? 140 : 120,
  },
  text2: {
      fontFamily: "PressStart2P-Regular",
      fontSize: 50,
      fontWeight: "400",
      color: "gold",
      marginLeft: Platform.OS === "ios" ? 130 : 110,
      marginBottom: Platform.OS === "ios" ? 5 : 0,
  },
  subheading: {
      color: "#FFFFFF",
      fontFamily: "AvenirNext-Regular",
      fontSize: 20,
      fontWeight: "600",
  },
  buttonContainer: {
      width: 200,
      marginTop: 220,
      marginTop: Platform.OS === "ios" ? 260 : 200,
      borderRadius: 10,
  }, 
  buttonTitle: {
      fontFamily: "AvenirNext-Regular",
      fontWeight: "500",  
      color: "#FFFFFF",
  }, 
})