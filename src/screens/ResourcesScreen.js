import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  Image,
  StyleSheet,
  Linking,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@rneui/themed";
import { useCallback } from "react";
import { useFonts } from "expo-font";

export default function ResourcesScreen() {
  const navigation = useNavigation();

  getFont();
  async function getFont() {
    const [loaded, error] = await useFonts({
      "AvenirNext-Regular": require("../../assets/fonts/AvenirNext-Regular.ttf"),
    });
  }

  const resources = [
    {
      name: "Codetalk",
      snippet:
        "Empowers women from underserved communities through intensive coding education and career support in the tech industry.",
      link: "https://www.stjosephctr.org/codetalk/",
    },
    {
      name: "Snap Engineering Academy",
      snippet:
        "A fast-paced program that teaches technical interview skills, app development, and cross-functional teamwork.",
      link: "https://www.snapacademies.com/sea",
    },
    {
      name: "Harvard CS50x",
      snippet:
        "A crash course on various computer science topics built to provide a robust foundation. Enrollement is free through OpenCourseWare.",
      link: "https://cs50.harvard.edu/x/2024/",
    },
  ];
  const Item = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.paragraph}>{item.snippet}</Text>
      <OpenUrlButton url={item.link} />
    </View>
  );
  const renderItem = ({ item }) => {
    return <Item item={item} />;
  };
  const OpenUrlButton = ({ url }) => {
    const handlePress = useCallback(async () => {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);

    return (
      <Button
        title="Visit Website"
        titleStyle={styles.buttonTitle}
        icon={{
          name: "chevron-right",
        }}
        iconRight
        buttonStyle={styles.button}
        onPress={handlePress}
        accessibilityLabel="Navigate to website"
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Swipe to explore a
        <Text
          style={{
            fontFamily: "Silkscreen-Regular",
            color: "gold",
          }}
        >
          {" "}
          Resource
        </Text>{" "}
        you think eats!
      </Text>
      <FlatList
        data={resources}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        horizontal={true}
      />
      <Image
        style={styles.bitmoji}
        source={require("../../assets/education-ed.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    weight: "100%",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#000000",
  },
  itemContainer: {
    height: 450,
    width: 375,
    margin: 10,
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 10,
    borderColor: "#FFFFFF",
    borderWidth: 4,
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading: {
    marginTop: 110,
    paddingHorizontal: 70,
    fontFamily: "AvenirNext-Regular",
    fontSize: 35,
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 30,
  },
  title: {
    color: "gold",
    fontFamily: "AvenirNext-Regular",
    fontSize: 40,
    fontWeight: "600",
    textAlign: "center",
  },
  paragraph: {
    color: "#FFFFFF",
    fontFamily: "AvenirNext-Regular",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
    padding: 20,
  },
  buttonTitle: {
    color: "#000000",
    fontFamily: "AvenirNext-Regular",
    fontSize: 16,
    fontWeight: "600",
  },
  button: {
    backgroundColor: "gold",
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
  },
  bitmoji: {
    position: "absolute",
    top: 640,
    left: 30,
    width: 126,
    height: 248,
  },
});
