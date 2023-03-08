import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Input, Icon, Stack, NativeBaseProvider, Center, HStack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
} from "react-native";

const Login = ({navigation}) => {
    const [userName , setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = React.useState(false);

    const handleSubmit = () => {
        setTimeout(() => {
        navigation.replace('NavigatorRoutes');
        }, 3000);
    }
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
            <TouchableOpacity
            onPress={handleSubmit}
            style={styles.loginBtn}>
                <Text 
                    // onPress={()=> navigation.replace('NavigatorRoutes')}
                style={styles.loginText}
                >LOGIN
                </Text>
            </TouchableOpacity>
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