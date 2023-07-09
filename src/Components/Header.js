import React from "react";
import { Box, HStack } from "@chakra-ui/react";

function Header() {
    return (
        <header>
            <nav>
            <HStack spacing={100}>
                <img src=".\images\Logo.svg" alt="Little Lemon Logo" />
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/menu">Menu</a>
                <a href="/reservations">Reservations</a>
                <a href="/orderonline">Order Online</a>
                <a href="/login">Login</a>
            </HStack>
            </nav>
        </header>
    );
}

export default Header;