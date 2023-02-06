import { Box, HStack, Image, Link, Text } from '@chakra-ui/react';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Stack } from '@chakra-ui/react';


const handleDragStart = (e) => e.preventDefault();

const items = [
    <img src="https://cdn.dribbble.com/users/434324/screenshots/16703759/media/262567cd857de138946da270cf1a804a.png?compress=1&resize=1200x900&vertical=top" onDragStart={handleDragStart} alt="presentation" />,
    <img src="https://cdn.dribbble.com/users/434324/screenshots/16703759/media/069463cd38d158c7a006e6043768cfac.png?compress=1&resize=1200x900&vertical=top" onDragStart={handleDragStart} alt="presentation" />
];

const Slider = () => {
    return (

        <>
            <Box>
                <Box paddingLeft={'20%'} paddingRight={'20%'} >
                    <AliceCarousel  mouseTracking items={items} />
                </Box>
                <Box textAlign='inherit' paddingLeft={'20%'} >
                    <Text fontSize={'xl'}>ESTUDEE Student App Landing Page Dark Mode</Text>
                    <Text fontSize={'xl'}>_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ </Text>
                </Box><br />
                <Box paddingLeft={'20%'} paddingRight={'20%'}>
                    <Text fontSize={'xl'}>
                        Want to collaborate? Email Us: hellosansbrothers@gmail.com | Contact Us Get in touch :Behance | Instagram | UI8
                    </Text>
                </Box>
            </Box>


            <Box padding={'0 20%'}>
                <Stack p="6" m="6" borderRadius="md" boxShadow={'md'} bg='#f3f3f4'>
                    <HStack direction="row" alignItems="center" spacing='24px'>
                       <Box>
                       <Link href='https://dribbble.com/shots/16695819-Exploration-ESTUDEE-Student-App-Landing-Page' isExternal>
                            <Image
                                boxSize='70px'
                                objectFit='cover'
                                src='https://cdn.dribbble.com/users/434324/screenshots/16695819/media/fde6942c3cb126578142a77c555a8b9d.png?compress=1&resize=160x120&vertical=top'
                                alt='Dan Abramov'
                            />
                        </Link>
                       </Box>
                       <Box>
                       <Text fontSize={{ base: 'm' }} textAlign={'left'} color={'grey'}>
                            Rebound of
                        </Text>
                        <Text as={'b'}>
                            Exploration : ESTUDEE Student App Landing Page
                        </Text>
                        <Text>
                            By Triyandi Saputra
                        </Text>
                       </Box>
                    </HStack>
                </Stack>
            </Box>
        </>


    );
}
export default Slider;