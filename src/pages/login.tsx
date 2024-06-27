import { Box, Button, Flex, FormControl, FormLabel, Input, Spacer, Text, useBreakpoint } from "@chakra-ui/react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login(){
    
    const [darkMode, setDarkMode] = useState(true);
    const [passwordVisible, setPasswordVisible] = useState(false);

    const currentBreakPoint = useBreakpoint();

    //for the password toggle
    function togglePasswordVisibility(){
        setPasswordVisible(!passwordVisible);
    }

    let isPhone = false;
    
    if(currentBreakPoint === "base"){
        isPhone = true;
    }
    
    console.log(currentBreakPoint, typeof currentBreakPoint, "| Is Phone:" ,isPhone);

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
                    {isPhone ? <Spacer/> : null}
                    <Text fontSize="3xl" ms={isPhone ? "0" : "5"}> Simple POS</Text>
                    {isPhone ? <Spacer/> : null}
                </Flex>

                <Spacer/>

                {/* Main */}
                <Box bgColor="white" textColor="black" px="10" py="10" mx={isPhone ? "8" : "auto"} borderRadius="10">
                    <Text fontSize="2xl" width="100%" align="center" mb="10"> Login</Text>
                    <FormControl>
                        
                        <FormLabel>Username</FormLabel>
                        <Input type="text" placeholder="Username"/>
                        
                        <Spacer my="3"/>

                        <FormLabel>Password</FormLabel>
                        <Flex>
                            <Input type={passwordVisible ? "password" : "text"} placeholder="Password"/>
                            <Button onClick={togglePasswordVisibility} p="0"> 
                                {passwordVisible ? <FaEye/> : <FaEyeSlash/> }
                            </Button>

                        </Flex>
                    </FormControl>

                    <Flex width="100%" alignItems="center" mt="5">
                        <Spacer/>
                        <Button bgColor="green" textColor="white" fontWeight="bold">Login</Button>
                        <Spacer/>
                    </Flex>
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