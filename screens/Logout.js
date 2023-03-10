import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Input, Icon, Stack, NativeBaseProvider, Center, HStack } from "native-base";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
    Alert
} from "react-native";

const Logout = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Stack space={4} w="75%" maxW="300px" >
                <Center>
                    <Text style={styles.logoutText}>
                        Proceed to Sign-out?
                    </Text>
                </Center>
                <HStack space={4} w="100%" maxW="300px" mx="auto" justifyContent="space-between">
                    <TouchableOpacity
                        onPress={() => {
                            Alert.alert(
                                'Logout',
                                'Are you sure? You want to logout?',
                                [
                                    {
                                        text: 'Cancel',
                                        onPress: () => {
                                            return null;
                                        },
                                    },
                                    {
                                        text: 'Confirm',
                                        onPress: () => {
                                            AsyncStorage.clear();
                                            navigation.replace('Auth');
                                        },
                                    },
                                ],
                                { cancelable: false },
                            );
                        }}
                        style={styles.logoutBtn}>
                        <Text style={styles.loginText}>Yes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={navigation.goBack}
                        style={styles.logoutBtn}>
                        <Text style={styles.loginText}>Cancel</Text>
                    </TouchableOpacity>
                </HStack>
            </Stack>
        </View>
    );
};

export default Logout;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
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
    },
    loginText: {
        color: "#fff",
    },
});