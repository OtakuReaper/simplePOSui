import {Flex, Spacer, Spinner, Stack, Text } from "@chakra-ui/react"

const Loading = () => {
    return (
        <Flex height="100vh" width="100w" top="0" left="0" zIndex="9999" bgColor="black" textColor="white">
            <Spacer/>
                <Stack my="auto" align="center">
                    <Spinner  size="xl" speed="0.7s" thickness="5px"/>
                    <Text fontSize="2xl" mt="10">Loading...</Text>
                </Stack>
            <Spacer/>
        </Flex>
    )
}

export default Loading;