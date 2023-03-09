import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import { MaterialIcons, AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { Icon } from 'native-base';

const NavigationDrawerHeader = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={toggleDrawer}>
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{width: 25, height: 25, marginRight: 5}}
        />
      </TouchableOpacity>
    </View>
  );
};
export default NavigationDrawerHeader;