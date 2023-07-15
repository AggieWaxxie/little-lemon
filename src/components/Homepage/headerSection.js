import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, HStack } from '@chakra-ui/react';
import logo3 from 'C:/Users/Aggiey Ness/Projects/little-lemon-web-app/src/images/logo3.png';

const Header = () => {
        /**const handleClick = (anchor) => (e) => {
          e.prventDefault ();
          const id = `${anchor}-section`;
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        };**/
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
                <Link to="/">
                <img src={logo3}
                alt="Little Lemon Logo"
                width='200rem'
                height='auto' />
                </Link>
                <Link to="/">Home</Link>
                <Link to="/aboutPage">About</Link>
                <Link to="/menuPage">Menu</Link>
                <Link to="/reservationsPage">Reservations</Link>
                <Link to="/orderOnlinePage">Order Online</Link>
                <Link to="/loginPage">Login</Link>
            </HStack>
            </nav>
            </Box>
        </header>
    );
} 

export default Header;