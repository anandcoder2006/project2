import { Box, Container, Heading, Image, Stack,Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assests/1.jpg';
import img2 from '../assests/2.jpg';
import img3 from '../assests/3.webp';
const headingOption = {
    pos: 'absolute',
    left: '50%',
    top: '50%',
    trasform: "translate(-50%,-50%)",
    textTransform: "uppercase",
    p: "4",
    size: '4xl'
}

const Home = () => {
    return (
        <Box>
            <MyCarousel />
            <Container maxW={"container.xl"} minH={"100vh"} p="16">
                <Heading
                    textTransform={"uppercase"}
                    py="2"
                    w={"fit-content"}
                    borderBottom={"2px solid #ccc"}
                    m={"auto"}>Services
                </Heading>
                <Stack
                h={"full"}
                p={"4"}
                alignItems={'center'}
                direction={['column','row']} >
                <Image w="400px" src={img1} h={["30","400"]} filter={"hue-rotate(-130deg)"} borderRadius={"50%"}/>
               <Text letterSpacing={"widest"} 
               lineHeight={"190%"} 
               p={["4","16"]}
               textAlign="center">
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
               </Text>
                </Stack>
            </Container>
        </Box>
    )
}
const MyCarousel = () => (
    <Carousel
        autoPlay
        infiniteLoop
        interval={1000}
        showStatus={false}
        showArrows={false}
        showThumbs={false}>

        <Box w="full" h={"100vh"}>
            <Image src={img1} alt="img" />
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOption}>
                Watch  video
            </Heading>
        </Box>
        <Box w="full" h={"100vh"} >
            <Image src={img2} alt="img" />
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOption}>
                Watch  Now
            </Heading>
        </Box>
        <Box w="full" h={"100vh"}  >
            <Image src={img3} alt="img" />
            <Heading bgColor={"whiteAlpha.900"} color={"black"} {...headingOption}>
                Watch  Future
            </Heading>
        </Box>
    </Carousel>
)

export default Home