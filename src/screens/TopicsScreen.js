import { SafeAreaView, View, Text, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuthentication } from "../utils/hooks/useAuthentication";
import { Button } from '@rneui/themed';
import { useFonts } from "expo-font";
import { useState } from "react";

export default function TopicsScreen() {
    const navigation = useNavigation();
    const { user } = useAuthentication();
    const [loaded, error] = useFonts({
        'Silkscreen-Regular': require('../../assets/fonts/Silkscreen-Regular.ttf'),
      });
    const [topicDropdown, setTopicDropdown] = useState(null);
    const topics = [
        {
            title: "Coding",
            content: "Coding allows people to understand technology, its functionalities, and its purposes. Here, you will learn critical-thinking and problem-solving skills that apply to daily life.",
        },
        {
            title: "Design", 
            content: "Information about Design.",
        }, 
        {
            title: "Education",
            content: "Information about Education.",
        },
        {
            title: "Law", 
            content: "Information about Law.",
        },
        {
            title: "Medicine", 
            content: "Information about Medicine.", 
        }, 
        {
            title: "Storytelling", 
            content: "Information about Storytelling.",
        },
    ]
    
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.welcomeHeading}>
                    Welcome
                    <Text style={styles.name}> {user &&
                        user.user_metadata &&
                        user.user_metadata.email.slice(0,user.user_metadata.email.indexOf("@"), // gets part before @ of email address, should use profile username instead
                    )}
                    </Text>,
                </Text>
                <Text style={styles.welcomeParagraph}>
                    Choose a topic to take a bite of!
                </Text>
                <ScrollView>
                    {topics.map((topic, index) => (
                        <View key={index}>
                            <Button
                                style={styles.topicButtonContainer}
                                title={topic.title}
                                titleStyle={styles.topicTitle}
                                icon={{
                                    name: topicDropdown === topic.title ? 'minus' : 'plus',
                                    type: 'font-awesome',
                                    size: 15,
                                    color: '#FFFFFF',
                                }}
                                iconRight
                                buttonStyle={styles.topicButton}
                                onPress={() => topicDropdown === topic.title ? setTopicDropdown(null) : setTopicDropdown(topic.title)}
                                accessibilityLabel="Navigate to Levels screen"
                            />
                            {topicDropdown === topic.title && (
                                <View style={styles.topicDropdownContainer}>
                                    <Text style={{
                                        fontFamily: "Avenir Next",
                                        fontSize: 16,
                                        fontWeight: "500",
                                        color: "#FFFFFF",
                                    }}
                                    >
                                        {topic.content}
                                    </Text>
                                    <View style={styles.tryButtonWrapper}>
                                        <Button
                                        style={styles.tryButtonContainer}
                                        title="Try it!"
                                        titleStyle={styles.tryTitle}
                                        icon={{
                                            name: "chevron-right",
                                            color: "#000000"
                                        }}
                                        iconRight
                                        buttonStyle={styles.tryButton}
                                        onPress={() => {
                                            if (topic.title === "Coding") {navigation.navigate("Levels")}
                                        }}
                                        />
                                    </View>
                                </View>
                            )}
                        </View>
                    ))}
                    {/* <Button 
                        style={styles.topicButtonContainer}
                        onPress={() => {
                            navigation.navigate("Levels");
                        }}
                        title="Coding"
                        titleStyle={styles.topicTitle}
                        accessibilityLabel="Navigate to Levels page"
                        buttonStyle={styles.topicButton}
                        icon={styles.topicIcon}
                        iconRight
                    />
                    <Button 
                        style={styles.topicButtonContainer}
                        title="Design"
                        titleStyle={styles.topicTitle}
                        buttonStyle={styles.topicButton}
                        icon={styles.topicIcon}
                        iconRight
                    />
                    <Button 
                        style={styles.topicButtonContainer}
                        title="Education"
                        titleStyle={styles.topicTitle}
                        buttonStyle={styles.topicButton}
                        icon={styles.topicIcon}
                        iconRight
                    />
                    <Button 
                        style={styles.topicButtonContainer}
                        title="Law"
                        titleStyle={styles.topicTitle}
                        buttonStyle={styles.topicButton}
                        icon={styles.topicIcon}
                        iconRight
                    />
                    <Button 
                        style={styles.topicButtonContainer}
                        title="Medicine"
                        titleStyle={styles.topicTitle}
                        buttonStyle={styles.topicButton}
                        icon={styles.topicIcon}
                        iconRight
                    />
                    <Button 
                        style={styles.topicButtonContainer}
                        title="Storytelling"
                        titleStyle={styles.topicTitle}
                        buttonStyle={styles.topicButton}
                        icon={styles.topicIcon}
                        iconRight
                    /> */}
                </ScrollView>
                <Button 
                    style={styles.resourceButtonContainer}
                    onPress={() => navigation.navigate("Resources")}
                    title="Next steps?"
                    titleStyle={styles.resourceTitle}
                    buttonStyle={styles.resourceButton}
                    accessibilityLabel="Navigate to Resources screen"
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: '100%',
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: '#000000',
    }, 
    welcomeHeading: {
        marginTop: 50,
        fontFamily: "Avenir Next",
        fontSize: 40,
        fontWeight: "bold",
        color: '#FFFFFF',
    },
    name: {
        color: '#FFFC00',
        fontFamily: "Silkscreen-Regular",
        textTransform: "capitalize"
    },
    welcomeParagraph: {
        marginTop: 15,
        fontFamily: "Avenir Next",
        fontSize: 25,
        color: '#FFFFFF',
        marginBottom: 15,
    },
    topicButtonContainer: {
        height: 70,
        width: 300,
        marginTop: 25,
        // marginBottom: 25,
        borderWidth: 4,
        borderRadius: 10,
        borderColor: "#FFFFFF",
    },
    topicTitle: {
        fontFamily: "Avenir Next", 
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 8,
        marginBottom: 12,
    },
    topicButton: {
        backgroundColor: "rgba(255, 255, 255, 0.12)",
        borderRadius: 5,
        justifyContent: "space-between",
    },
    // topicIcon: {
    //     name: topicDropdown === topic.title ? 'minus' : 'plus',
    //     type: 'font-awesome',
    //     size: 15,
    //     color: 'white',
    // },
    topicDropdownContainer: {
        width: 300,
        backgroundColor: "rgba(255, 255, 255, 0.12)",
        padding: 15,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    // topicDropdown: {
    //     fontFamily: "Avenir Next",
    //     fontSize: 16,
    //     color: #FFFFFF",
    // },
    tryButtonWrapper: {
        flexDirection: "row", 
        justifyContent: "flex-end"
    },
    tryButtonContainer: {
        width: 100,
        marginTop: 15, 
    },
    tryTitle: {
        fontFamily: "Avenir Next",
        fontWeight: "500",
        color: "#000000",
        marginLeft: 20,
    },
    tryButton: {
        backgroundColor: "#FFFC00",
        borderRadius: 20,
    },
    resourceButtonContainer: {
        height: 70,
        width: 300,
        marginTop: 25,
        marginBottom: 50,
        borderWidth: 4,
        borderRadius: 10,
        borderColor: "#FFFFFF",
    },
    resourceTitle: {
        fontFamily: "Avenir Next", 
        fontSize: 20,
        fontWeight: "bold",
        color: "#000000",
        marginTop: 8,
        marginBottom: 12,
    },
    resourceButton: {
        borderRadius: 5,
        backgroundColor: "#FFFC00",
    }
})