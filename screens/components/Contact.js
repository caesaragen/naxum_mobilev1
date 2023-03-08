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
        <VStack space={2} mt={5}>
            <VStack space={2} mt={2} width={300}>
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