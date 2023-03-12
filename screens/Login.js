import React, { useState, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { Input, Icon, Stack, NativeBaseProvider, Center, Button,} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
} from "react-native";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useQuery, useMutation } from "@tanstack/react-query";
import { UserContext } from "../context/UserContext";

const Base_url = process.env.Base_url;
console.log(Base_url)

const Login = ({ navigation }) => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const { userData, setUserData } = useContext(UserContext);
    const [submitting, setSubmitting] = useState(false);


    const mutation = useMutation(
        (data) => axios.post(`${Base_url}/login`, data),
        {
            onSuccess: (res) => {
                const user = res.data;
                AsyncStorage.setItem('userToken', user.token);
                setUserData(user);
                setSubmitting(false);
                navigation.replace('NavigatorRoutes');
            },
            onError: (error) => {
                console.log(error);
                setSubmitting(false);
            },
        }
    );

    const handleSubmit = () => {
        setSubmitting(true),
        mutation.mutate({
            username: userName,
            password: password,
        });
    };

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Stack space={4} w="75%" maxW="300px" mx="auto">
                <Input
                    variant="underlined"
                    placeholder="Username"
                    placeholderTextColor={"#70B5F9"}
                    onChangeText={(userName) => setUserName(userName)}
                    InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} mr="2" color="muted.400" />}
                />
                <Input
                    variant="underlined"
                    placeholder="Password"
                    placeholderTextColor={"#70B5F9"}
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                    InputLeftElement={<Icon as={<MaterialIcons name="lock" />} size={5} mr="2" color="muted.400" />}
                />
                <Button isLoading={submitting} spinnerPlacement="end" isLoadingText="Submitting"
                    onPress={handleSubmit}
                    style={styles.loginBtn}>
                    <Text
                        // onPress={()=> navigation.replace('NavigatorRoutes')}
                        style={styles.loginText}
                    >LOGIN
                    </Text>
                </Button>
            </Stack>
        </View>
    );
};

export default Login;

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
    logoutText: {
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
    }
});