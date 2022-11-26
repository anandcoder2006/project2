import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'


const Videos = () => {
    const videosArr = [
        'https://www.youtube.com/watch?v=T_PRaYZEyTE&list=RDmVtb_tpYxug&index=3',
        'https://www.youtube.com/watch?v=b50zSyLiCYQ',
        'https://www.youtube.com/watch?v=T_PRaYZEyTE&list=RDmVtb_tpYxug&index=2',
    ];
    const [videoSrc, setVideoSrc] = useState(videosArr[0])
    return (
        <Stack direction={["column", "row"]} h={"100vh"}>
        {
            console.log(videoSrc)
        }
            <VStack w={"full"}>
                <video
                    controls
                    controlsList='nodownload'
                    src={videoSrc}
                    style={{ width: '100%' }}
                     typeof>
                </video>
                <VStack alignItems={'flex-start'} p={"8"} w={"w"} overflowY={"auto"}>
                    <Heading>Simple List</Heading>
                    <Text>This is a simple video for testing and demo. This is called description.
                        This is a simple video for testing and demo. This is called description.
                        This is a simple video for testing and demo. This is called description.
                        This is a simple video for testing and demo. This is called description.
                        videov. This is a simple video for testing and demo. This is called description.
                        This is a simple video for testing and demo. This is called description.
                        This is a simple video for testing and demo. This is called description.
                        This is a simple video for testing and demo. This is called description.
                    </Text>
                </VStack>
            </VStack>

            <VStack w={["full", "xl"]}
                alignItems={"stretch"}
                p={"8"}
                spacing={"8"}
                overflowY={"auto"}>
                {
                    videosArr.map((item, index) => (
                        <Button key={index} variant={"ghost"}
                            colorScheme={"purple"}
                            onClick={() => setVideoSrc(item)}>
                            Lecture {index + 1}</Button>
                    )
                    )
                }

            </VStack>
        </Stack>
    )
}

export default Videos