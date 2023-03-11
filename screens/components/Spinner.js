import React from 'react';
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
    Spinner
} from "native-base";

const LoadingSpinner = () => {
    return (
        <HStack space={2} justifyContent="center" alignItems={"center"}>
            <Spinner accessibilityLabel="Loading " />
            <Heading color="primary.500" fontSize="md">
                Loading...
            </Heading>
        </HStack>
    )
}

export default LoadingSpinner