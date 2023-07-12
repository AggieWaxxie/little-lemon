 import React, { useEffect, useRef, useState } from "react";
import { Box, HStack } from "@chakra-ui/react";
import logo3 from '../images/logo3.png';

const Header = () => {
        const handleClick = (anchor) => (e) => {
          e.prventDefault ();
          const id = `${anchor}-section`;
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        };
          const [isHeaderVisible, setIsHeaderVisible] = useState(true);
          const prevScrollY = useRef(0);
      
          useEffect(() => {
            const handleScroll = () => {
              const currentScrollY = window.scrollY;
        
              if (currentScrollY > prevScrollY.current && isHeaderVisible) {
                setIsHeaderVisible(false);
              } else if (currentScrollY < prevScrollY.current && !isHeaderVisible) {
                setIsHeaderVisible(true);
              }
        
              prevScrollY.current = currentScrollY;
            };
        
            window.addEventListener('scroll', handleScroll);
        
            return () => {
              window.removeEventListener('scroll', handleScroll);
            };
          }, [isHeaderVisible]);
        
          const headerStyle = {
            transform: isHeaderVisible ? 'translateY(0)' : 'translateY(-200px)',
            transition: 'transform 0.3s ease-in-out',
          };
    return (
        <header>
            <Box
                as="header"
                backgroundColor="white"
                transform={headerStyle.transform}
                transition={headerStyle.transition}
                position='fixed'>
            <nav>
            <HStack spacing={85}>
                <a href="/">
                <img src={logo3}
                alt="Little Lemon Logo"
                width='200rem'
                height='auto' />
                </a>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/menu">Menu</a>
                <a href="/reservations">Reservations</a>
                <a href="/orderonline">Order Online</a>
                <a href="/login">Login</a>
            </HStack>
            </nav>
            </Box>
        </header>
    );
} 

export default Header;