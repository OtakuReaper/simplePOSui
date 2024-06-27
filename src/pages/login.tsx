import { Box, Button, Flex, FormControl, FormLabel, Input, Spacer, Text, useBreakpoint } from "@chakra-ui/react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useLogin } from "../services/mutations";
import { SubmitHandler, useForm } from "react-hook-form";
import { loginData } from "../types/loginData";


function Login(){
    
    //Hooks
    const [darkMode, setDarkMode] = useState(true);
    const [passwordVisible, setPasswordVisible] = useState(false);

    const currentBreakPoint = useBreakpoint();

    //query stuff

    const {handleSubmit, register} = useForm<loginData>();
    const loginMutation = useLogin();

    const handleLoginSubmit: SubmitHandler<loginData> = (data) => {
        loginMutation.mutate(data);
    }


    //for the password toggle
    function togglePasswordVisibility(){
        setPasswordVisible(!passwordVisible);
    }

    const isPhone = currentBreakPoint === "base";

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
                    <form onSubmit={handleSubmit(handleLoginSubmit)}>
                    <FormControl>
                        
                        <FormLabel>Username</FormLabel>
                        <Input type="text" placeholder="Username" {...register("username")} id="username"/>
                        
                        <Spacer my="3"/>

                        <FormLabel>Password</FormLabel>
                        <Flex>
                            <Input type={passwordVisible ? "text" : "password"} placeholder="Password" {...register("password")} id="password"/>
                            <Button 
                            onClick={togglePasswordVisibility} p="0" 
                            > 
                                {passwordVisible ? <FaEyeSlash/> : <FaEye/> }
                            </Button>

                        </Flex>
                    </FormControl>

                    <Flex width="100%" alignItems="center" mt="5">
                        <Spacer/>
                        <Button bgColor="green" textColor="white" fontWeight="bold" 
                        disabled={loginMutation.isPending}
                        value={loginMutation.isPending ? "Logging in..." : "Login"}
                        type="submit" onSubmit={handleSubmit(handleLoginSubmit)}
                        >Login</Button>
                        <Spacer/>
                    </Flex>
                    </form>
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