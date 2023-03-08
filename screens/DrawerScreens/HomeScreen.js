import React from "react";
import { View,  SafeAreaView, StyleSheet } from "react-native";
import { Heading,Text, HStack, VStack, Icon,IconButton, Box } from "native-base";
import { MaterialIcons, AntDesign, SimpleLineIcons } from "@expo/vector-icons";

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Heading size="lg" color={"#70B5F9"} mt={9}>
                Add Contacts
            </Heading>

            <HStack space={10} mt={5}>
                <VStack space={2}>
                <Box alignItems="center">
                <IconButton icon={<Icon as={MaterialIcons} name="library-add" />} borderRadius="full" p={3} color="#70B5F9" variant={"solid"} />
                <Text
                color="muted.500"
                >
                    New
                    </Text>
                </Box>
                </VStack>
                <VStack space={2}>
                <Box alignItems="center">
                <IconButton icon={<Icon as={AntDesign} name="contacts" />} borderRadius="full" p={3} color="#70B5F9" variant={"solid"} />
                <Text
                color="muted.500"
                >
                    Phone Book
                    </Text>
                </Box>
                </VStack>
                <VStack space={2}>
                <Box alignItems="center">
                <IconButton icon={<Icon as={SimpleLineIcons} name="envelope" />} borderRadius="full" p={3} color="#70B5F9" variant={"solid"} />
                <Text
                color="muted.500"
                >
                    Email
                    </Text>
                </Box>
                </VStack>
            </HStack>
            <View style={{ flex: 1, padding: 16 }}>
                <View
                    style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            textAlign: "center",
                            marginBottom: 16,
                        }}
                    >
                        Example of Splash, Login and Sign Up in React Native
                        {"\n\n"}
                        This is the Home Screen
                    </Text>
                </View>
                <Text
                    style={{
                        fontSize: 18,
                        textAlign: "center",
                        color: "grey",
                    }}
                >
                    Splash, Login and Register Example{"\n"}React Native
                </Text>
                <Text
                    style={{
                        fontSize: 16,
                        textAlign: "center",
                        color: "grey",
                    }}
                >
                    www.aboutreact.com
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        marginBottom: 40,
    },
    loginBtn: {
        maxWidth: 300,
        borderRadius: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#70B5F9",
        color: "#fff",
    },
    loginText: {
        color: "#fff",
    },
    Heading: {
        color: "#70B5F9",
        fontSize: 20,
        marginTop: 20,
        fontWeight: "bold",
    },
    logoutBtn: {
        width: 140,
        borderRadius: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#70B5F9",
        color: "#fff",
    },
});
