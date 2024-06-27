import { Box, Button, Flex, FormControl, FormLabel, Input, Spacer, Text, useBreakpoint } from "@chakra-ui/react";
import { useState } from "react";
import { FaEye } from "react-icons/fa";

function Login(){
    
    const [darkMode, setDarkMode] = useState(true);

    const currentBreakPoint = useBreakpoint();

    return (
        <>
            <Flex 
            width="100%" 
            height="100vh" 
            bgColor={darkMode ? "black" : "white"} 
            textColor={darkMode ? "white" : "black"}
            flexDirection="column"
            justifyItems="space-between"
            >
                {/* Header */}
                <Flex width="100%" p="2" border="1px" borderColor="white">
                    <Spacer/>
                    <Text fontSize="3xl"> Simple POS</Text>
                    <Spacer/>
                </Flex>

                <Spacer/>

                {/* Main */}
                <Box bgColor="white" textColor="black" px="10" py="10" mx="8" borderRadius="10">
                    <Text fontSize="2xl" width="100%" align="center" mb="10"> Login</Text>
                    <FormControl>
                        
                        <FormLabel>Username</FormLabel>
                        <Input type="text" placeholder="Username"/>
                        
                        <FormLabel>Password</FormLabel>
                        <Flex>
                            <Input type="password" placeholder="Password"/>
                            <Button> <FaEye/></Button>

                        </Flex>
                    </FormControl>

                    <Box alignContent="end" width="100%" bgColor="red">
                        <Button mt="10"> Login</Button>
                    </Box>
                </Box>

                <Spacer/>

                {/* Footer */}
                <Box height="40px" border="1px" borderColor="white">

                </Box>
            </Flex>
        </>
    )
}

export default Login;