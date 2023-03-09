import React, { useState } from "react";
import { View, SafeAreaView, StyleSheet, ScrollView, SectionList } from "react-native";
import {
    Heading,
    Text,
    HStack,
    VStack,
    Icon,
    IconButton,
    Box,
    Divider,
    Input,
    Stack,
    Button,
    Avatar
} from "native-base";
import { MaterialIcons, AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import Contact from "../components/Contact";

const HomeScreen = () => {
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <View style={styles.container}>
            <ScrollView>
                <Stack space={4} w="100%" maxW="300px" mx="auto" alignItems="center">
                    <Heading size="lg" color={"#70B5F9"} mt={9}>
                        Add Contacts
                    </Heading>

                    <HStack space={10} mt={5}>
                        <VStack space={2}>
                            <Box alignItems="center">
                                <IconButton
                                    icon={<Icon as={MaterialIcons} name="library-add" />}
                                    borderRadius="full"
                                    p={3}
                                    color="#70B5F9"
                                    variant={"solid"}
                                />
                                <Text color="muted.500">New</Text>
                            </Box>
                        </VStack>
                        <VStack space={2}>
                            <Box alignItems="center">
                                <IconButton
                                    icon={<Icon as={AntDesign} name="contacts" />}
                                    borderRadius="full"
                                    p={3}
                                    color="#70B5F9"
                                    variant={"solid"}
                                />
                                <Text color="muted.500">Phone Book</Text>
                            </Box>
                        </VStack>
                        <VStack space={2}>
                            <Box alignItems="center">
                                <IconButton
                                    icon={<Icon as={SimpleLineIcons} name="envelope" />}
                                    borderRadius="full"
                                    p={3}
                                    color="#70B5F9"
                                    variant={"solid"}
                                />
                                <Text color="muted.500">Email</Text>
                            </Box>
                        </VStack>
                    </HStack>
                    <Divider my={10} />
                    <Input
                        variant="outline"
                        placeholder="Search Contact"
                        placeholderTextColor={"#70B5F9"}
                        onChangeText={(searchTerm) => setSearchTerm(searchTerm)}
                    />
                    <Button
                        color="#70B5F9"
                        variant="solid"
                        mt={5}
                        _text={{ color: "#fff" }}
                        width={"100%"}
                    >
                        Search
                    </Button>
                    <Contact name="John Doe" avatarUrl={"https://as2.ftcdn.net/v2/jpg/00/65/77/27/1000_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"} />
                    <Contact name="John Doe" avatarUrl={"https://as2.ftcdn.net/v2/jpg/00/65/77/27/1000_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"} />
                </Stack>
            </ScrollView>
            <Box bg="white" safeAreaTop width="100%" maxW="100%" alignSelf="center">
                <VStack bg="#307ecc" alignItems="flex-start" safeAreaBottom shadow={6} justifyContent="center" >
                    <Box p={2} alignItems={"center"}>
                        <IconButton
                            icon={<Icon as={AntDesign} name="contacts" color="#70B5F9" />}
                            borderRadius="full"
                            width={10} height={10}
                            color="#70B5F9"
                            bg={"#fff"}
                            variant={"solid"}
                        />
                        <Text color="white">Refresh Contacts</Text>
                    </Box>
                </VStack>
            </Box>
        </View>
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
