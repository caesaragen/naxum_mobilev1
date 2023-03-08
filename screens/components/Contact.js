import React from 'react';
import {
    Text,
    HStack,
    VStack,
    Divider,
    Avatar
} from "native-base";

const Contact = ({ name, avatarUrl }) => {
    return (
        <VStack space={1} mt={1}>
            <VStack space={1} mt={1} width={300}>
                <HStack space={5} width={"100%"} justifyContent="flex-start" alignItems={"center"}>
                    <Avatar
                        source={{
                            uri: avatarUrl,
                        }}
                    />
                    <Text>{name}</Text>
                </HStack>
                <Divider my={2} />
            </VStack>
        </VStack>
    );
};

export default Contact