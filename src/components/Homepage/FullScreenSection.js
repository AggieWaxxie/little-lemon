import * as React from "react";
import { VStack } from "@chakra-ui/react";
import HeroSection from '../components/HeroSection';

/**
 * Illustrates the use of children prop and spread operator
 */
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
    >
      <VStack maxWidth="1280px" minHeight="100vh" {...boxProps}>
        {children}
        <HeroSection 
        backgroundColor="#495E57" />
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
