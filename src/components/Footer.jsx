import React from 'react'
import { Box, Button, Heading, HStack, Input, Stack, VStack,Text } from '@chakra-ui/react';
import { AiOutlineSend } from 'react-icons/ai'

const Footer = () => {
    return <Box bgColor={"blackAlpha.900"} minH={"40"} p={16} color="white">
        <Stack direction={["column", "row"]}>
            <VStack alignItems={"stretch"} w={"full"} p={"4"}>
                <Heading size="md" textTransform={"uppercase"} textAlign={["center","left"]}>
                    Subscribe to get updates
                </Heading>

                <HStack
                    borderBottom={"2px solid white"}
                    py={"2"}
                    colorScheme={"white"}>
                    <Input
                        placeholder='Enter Email Id'
                        border={"none"}
                        borderRadius={"none"}
                        outline={"none"}
                        focusBorderColor={"none"}
                        color="white" />
                    <Button
                        p={"0"}
                        colorScheme="purple" variant={"ghost"} borderRadius={"0px 20px 20px 0"}>
                        <AiOutlineSend />
                    </Button>
                </HStack>
            </VStack>
            <VStack alignItems={"stretch"}
                w={"full"}
                borderLeft={["none", "1px solid white"]}
                borderRight={["none", "1px solid white"]}>
                <Heading textTransform={"uppercase"} 
                textAlign={"center"}>
                Video Hub
                <Text fontSize={"12px"}>AllRight recieved 2022</Text>
                </Heading>
            </VStack>
            <VStack 
                w={"full"}
                borderRight={["none", "1px solid white"]}>
                <Heading size={"md"} textTransform={"uppercase"} alignItems={"center"}>
                Socail Media
                </Heading>
                <Button variant={"link"} colorScheme={"white"}>
                <a target={"blank"} href='https://facebook.com'>FaceBook</a>
                </Button>
                <Button variant={"link"} colorScheme={"white"}>
                <a target={"blank"} href='https://instagram.com'>Instagram</a>
                </Button>
                <Button variant={"link"} colorScheme={"white"}>
                <a target={"blank"} href='https://youtube.com'>Youtube</a>
                </Button>
                </VStack>
        </Stack>
    </Box>

}

export default Footer