import React from 'react';
import { Alert, StyleSheet } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Icon,
  IconButton,
  Input,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from 'native-base';

const SideMenu = (props) => {
  return (
    <VStack space={0} flex={1}>
      <Box style={stylesSidebar.profileHeader}>
        <Avatar
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          size="lg"
        />
      </Box>
      <Divider />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label={({ color }) => (
            <Text color={useColorModeValue('gray.800', 'white')}>
              Logout
            </Text>
          )}
          onPress={() => {
            props.navigation.toggleDrawer();
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
                    props.navigation.replace('Auth');
                  },
                },
              ],
              { cancelable: false },
            );
          }}
        />
      </DrawerContentScrollView>
    </VStack>
  );
};

const stylesSidebar = StyleSheet.create({
  profileHeader: {
    backgroundColor: 'white',
    padding: 15,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
});

export default SideMenu;



