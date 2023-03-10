import React, { useState } from "react";
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
import { MaterialIcons } from "@expo/vector-icons";

const ProfileScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [selectedTab, setSelectedTab] = useState("profile");

  return (
    <View style={styles.container}>
      <Box
        bg="#307ecc"
        width="100%"
        height={180}
        alignItems="center"
        justifyContent="center"
      >
        <Avatar
          source={{
            uri:
              "https://images.unsplash.com/photo-1608726138476-433c5e7e1661?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGNvbnRhY3QlMjBkZWZhdWx0JTIwaW1hZ2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          }}
          size="2xl"
        >
          <Badge
            position="absolute"
            size={8}
            borderRadius={999}
            bg="#70B5F9"
            borderWidth={1}
            borderColor="#fff"
          />
        </Avatar>
        <Button
          variant="outline"
          mt={4}
          size="sm"
          onPress={() => console.log("Top Badges")}
        >
          Top Badges
        </Button>
      </Box>
      <Stack direction="row" bg="#f5f5f5" p={4}>
        <Button
          variant={selectedTab === "profile" ? "solid" : "outline"}
          onPress={() => setSelectedTab("profile")}
        >
          Profile
        </Button>
        <Button
          variant={selectedTab === "social" ? "solid" : "outline"}
          onPress={() => setSelectedTab("social")}
        >
          Social
        </Button>
        <Button
          variant={selectedTab === "links" ? "solid" : "outline"}
          onPress={() => setSelectedTab("links")}
        >
          Links
        </Button>
      </Stack>
      <Box p={4}>
        {selectedTab === "profile" && (
          <Stack space={4}>
            <FormControl>
              <FormControl.Label>First Name</FormControl.Label>
              <Input
                value={firstName}
                onChangeText={(value) => setFirstName(value)}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Last Name</FormControl.Label>
              <Input
                value={lastName}
                onChangeText={(value) => setLastName(value)}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Mobile</FormControl.Label>
              <Input
                value={mobile}
                onChangeText={(value) => setMobile(value)}
                keyboardType="phone-pad"
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input
                value={email}
                onChangeText={(value) => setEmail(value)}
                keyboardType="email-address"
              />
            </FormControl>
          </Stack>
        )}
      </Box>
    </View>
  );
};
export default ProfileScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});


