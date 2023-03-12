import React, { useState, useContext, useEffect } from "react";
import { View, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
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
import { UserContext } from "../../context/UserContext";
import { Base_url } from '@env';
import axios from 'axios';
import { useQuery, useMutation } from "@tanstack/react-query";
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingSpinner from "../components/Spinner";

const HomeScreen = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const { userData } = useContext(UserContext);
    const [show, setShow] = useState(true);
    const [firstName, setFirstName] = useState("Sodiq");
    const [lastName, setLastName] = useState("ddd");
    const [mobile, setMobile] = useState("08012355678");
    const [contacts, setContacts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filteredContacts, setFilteredContacts] = useState(contacts);
    const [inputValue, setInputValue] = useState("");
    const [selectedTab, setSelectedTab] = useState("new");
    const [submitting, setSubmitting] = useState(false);

    // console.log(Base_url)
    const handleSubmit = async () => {
        setSubmitting(true);
        try {
            const token = await AsyncStorage.getItem('userToken');
            console.log(token)
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            const data = {
                first_name: firstName,
                last_name: lastName,
                phone: mobile
            };
            const response = await axios.post(`${Base_url}/contacts`, data, config);
            if (response.status === 201) {
                setSubmitting(false);
                setFirstName("");
                setLastName("");
                setMobile("");
            }
            // Show success message or navigate to contacts list screen
        } catch (error) {
            console.error(error);
            setError(error);
            setSubmitting(false);
        }
    };

    const fetchContacts = async () => {
        try {
            const token = await AsyncStorage.getItem('userToken');
            const response = await axios.get(`${Base_url}/contacts`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setContacts(response.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchContacts();
    }, []);

    const handleRefresh = () => {
        setIsLoading(true);
        fetchContacts();
    };

    useEffect(() => {
        setContacts(contacts); // assume data is the original contacts list from the API
        setFilteredContacts(contacts);
    }, []);

    const handleSearch = (value) => {
        setInputValue(value);
        if (!value) {
            setFilteredContacts(contacts);
        } else {
            const filtered = contacts.filter(contact => {
                const name = `${contact.name}`.toLowerCase();
                const term = value.toLowerCase();
                return name.includes(term);
            });
            setFilteredContacts(filtered);
        }
    };

    // console.log(contacts)

    if (isLoading) {
        return <View>
            <LoadingSpinner />
        </View>;
    }

    if (error) {
        return <View>
            <Text>Error: {error.message}</Text>
        </View>;
    }
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
                                    variant={selectedTab === "new" ? "solid" : "outline"}
                                    onPress={() => {
                                        setShow(true);
                                        // setFilteredContacts([]);
                                        setSelectedTab("new");
                                    }}
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
                                    variant={selectedTab === "phonebook" ? "solid" : "outline"}
                                    onPress={() => {
                                        setShow(false);
                                        setSelectedTab("phonebook");
                                    }}
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
                                    variant={selectedTab === "email" ? "solid" : "outline"}
                                />
                                <Text color="muted.500">Email</Text>
                            </Box>
                        </VStack>
                    </HStack>
                    {show ? (
                        <VStack space={2} mt={5} w="100%" maxW="300px">
                            <Input
                                variant="underlined"
                                placeholder="First Name"
                                placeholderTextColor={"#70B5F9"}
                                onChangeText={(firstName) => setFirstName(firstName)}
                                InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} mr="2" color="muted.400" />}
                            />
                            <Input
                                variant="underlined"
                                placeholder="Last Name"
                                placeholderTextColor={"#70B5F9"}
                                onChangeText={(lastName) => setLastName(lastName)}
                                InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} mr="2" color="muted.400" />}
                            />
                            <Input
                                variant="underlined"
                                placeholder="Phone Number"
                                placeholderTextColor={"#70B5F9"}
                                keyboardType="phone-pad"
                                onChangeText={(mobile) => setMobile(mobile)}
                                InputLeftElement={<Icon as={<MaterialIcons name="phone" />} size={5} mr="2" color="muted.400" />}
                            />
                            <Button isLoading={submitting} spinnerPlacement="end" isLoadingText="Submitting"
                                onPress={handleSubmit}
                                style={styles.loginBtn}>
                                <Text

                                    style={styles.loginText}
                                >Add Contact
                                </Text>
                            </Button>
                        </VStack>
                    ) : null}
                    <Divider my={10} />
                    {selectedTab === "phonebook" && (
                        <>
                            <Input
                                value={inputValue}
                                variant="outline"
                                placeholder="Search Contact"
                                placeholderTextColor={"#70B5F9"}
                                onChangeText={(value) => handleSearch(value)}
                            />
                            <Button
                                onPress={() => handleSearch(searchTerm)}
                                color="#70B5F9"
                                variant="solid"
                                mt={5}
                                _text={{ color: "#fff" }}
                                width={"100%"}
                            >
                                Search
                            </Button>
                            {inputValue !== "" ? (
                                filteredContacts.map((contact) => (
                                    <Contact
                                        key={contact.id}
                                        name={contact.name}
                                        avatarUrl={
                                            "https://as2.ftcdn.net/v2/jpg/00/65/77/27/1000_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
                                        }
                                    />
                                ))
                            ) : (
                                contacts.map((contact) => (
                                    <Contact
                                        key={contact.id}
                                        name={contact.name}
                                        avatarUrl={contact.avatarUrl || "https://as2.ftcdn.net/v2/jpg/00/65/77/27/1000_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"}
                                    />
                                ))
                            )}
                        </>
                    )}



                </Stack>

            </ScrollView>
            <Box bg="white" safeAreaTop width="100%" maxW="100%" alignSelf="center">
                <VStack bg="#307ecc" alignItems="flex-start" safeAreaBottom shadow={6} justifyContent="center" >
                    <Box p={2} alignItems={"center"}>
                        <IconButton
                            icon={<Icon as={AntDesign} name="contacts" color="#70B5F9" />}
                            onPress={handleRefresh}
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
