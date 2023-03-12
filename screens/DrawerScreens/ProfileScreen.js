import React, { useState, useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import {
  Avatar,
  Badge,
  Box,
  Button,
  FormControl,
  HStack,
  Icon,
  Input,
  Select,
  Stack,
  Text,
} from "native-base";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { UserContext } from "../../context/UserContext";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useQuery, useMutation } from "@tanstack/react-query";
import { Base_url } from '@env';


// console.log(Base_url)

const ProfileScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [selectedTab, setSelectedTab] = useState("profile");
  const { userData, setUserData } = useContext(UserContext);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);


  useEffect(() => {
    if (!firstName || !lastName || !mobile) {
      setError("Please fill in all fields");
    }
    setError("");
  }, [firstName, lastName, mobile]);

  const handleSubmit = async () => {
    if (error) {
      return;
    }
    setSubmitting(true);
    const data = {
      first_name: firstName,
      last_name: lastName,
      phone: mobile,
      email: email
    };

 
    const token = await AsyncStorage.getItem('userToken');

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    try {
      const response = await axios.put(`${Base_url}/profile`, data, config);

      if (response.status === 200) {
        setSubmitting(false);
        alert('Profile updated successfully')
        setUserData({
          ...userData,
          first_name: response.data.first_name,
          last_name: response.data.last_name,
          phone: response.data.phone,
          email: response.data.email
        });
        setFirstName("");
        setLastName("");
        setMobile("");
        setEmail("");

      }
    } catch (error) {
      // Handle error
      console.log(error);
      setSubmitting(false);
    }
  };



  console.log(userData.user);
  return (
    <View style={styles.container}>
      <Stack space={4} w="100%" maxW="300px" mx="auto" alignItems="center">
        <Box
          bg="#fff"
          width="100%"
          // height={180}
          my={4}
          alignItems="center"
          justifyContent="center"
        >
          <Avatar
            source={{
              uri:
                "https://as2.ftcdn.net/v2/jpg/00/65/77/27/1000_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg",
            }}
            size="2xl"
            style={styles.avatar}
          >
            <Avatar.Badge style={styles.badge}>
              <Icon
                as={<Ionicons name="md-pencil" />}
                color="#fff"
                size={5}
              />
            </Avatar.Badge>
          </Avatar>
          <Button
            variant="solid"
            mt={4}
            size="md"
            width={"99%"}
            onPress={() => console.log("Top Badges")}
          >
            Top Badges
          </Button>
        </Box>
        <Button.Group width={"100%"} isAttached mx={{
          base: "auto",
          md: 0
        }} size="sm">
          <Button
            variant={selectedTab === "profile" ? "solid" : "outline"}
            onPress={() => setSelectedTab("profile")}
            width={"33%"}
          >
            Profile
          </Button>
          <Button
            variant={selectedTab === "social" ? "solid" : "outline"}
            onPress={() => setSelectedTab("social")}
            width={"33%"}
          >
            Social
          </Button>
          <Button
            variant={selectedTab === "links" ? "solid" : "outline"}
            onPress={() => setSelectedTab("links")}
            width={"33%"}
          >
            Links
          </Button>
        </Button.Group>

        <Box p={4} width={"100%"}>
          {selectedTab === "profile" && (
            <Stack space={4} width={"100%"}>
              <FormControl isInvalid={!!error}>
                <Input
                  variant="underlined"
                  placeholder={"First Name"}
                  isRequired
                  value={firstName}
                  onChangeText={(value) => setFirstName(value)}
                />

                <Input
                  variant={"underlined"}
                  placeholder={"Last Name"}
                  isRequired
                  value={lastName}
                  onChangeText={(value) => setLastName(value)}
                />

                <Input
                  variant={"underlined"}
                  placeholder={"Mobile"}
                  isRequired
                  value={mobile}
                  onChangeText={(value) => setMobile(value)}
                  keyboardType="phone-pad"
                />

                <Input
                  variant={"underlined"}
                  placeholder={"Email"}
                  value={email}
                  onChangeText={(value) => setEmail(value)}
                  keyboardType="email-address"
                />
              </FormControl>
              <Button isLoading={submitting} spinnerPlacement="end" isLoadingText="Submitting"
                variant="solid"
                mt={4}
                size="md"
                width={"100%"}
                onPress={handleSubmit}
              >
                Submit
              </Button>
            </Stack>
          )}
        </Box>
      </Stack>
    </View>
  );
};
export default ProfileScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  avatar: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  badge: {
    backgroundColor: "grey",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});


