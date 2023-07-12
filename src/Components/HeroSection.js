import React from 'react';
import FullScreenSection from './FullScreenSection';
import { Image, Stack, Text } from '@chakra-ui/react';
import restaurantFood from '../images/restaurantFood.jpg';

const HeroSection = () => (
    <FullScreenSection
    isDarkBackground
    backgroundColor="#495E57"
    >
        <Stack direction='row' >
            <Stack direction='column' spacing={0} >
            <Text as='h1' color='#F4CE14' fontSize='64pt' fontFamily='Markezi Text' >
                Little Lemon
            </Text>
            <Text as='h2' fontSize='40pt' fontWeight='400' >
                Chicago
            </Text>
            <Text as='p' fontSize='16pt' noOfLines={3} >
                We are a family owned Mediterranean
                restaurant, focused on traditional
                recipes served with a modern twist.
            </Text>
            </Stack>

            <Image
            boxSize='500px'
            borderRadius='16px'
            src={restaurantFood}
            alt='image of waiter carrying food'
            align=''
            />
        </Stack>
        </FullScreenSection>
);

export default HeroSection;