import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTwitter,
  faLinkedin,
  faYoutube,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { HStack, VStack} from "@chakra-ui/react";

const navigation = [
    {
        href: "/",
        label: `Home`
    },
    {
        href: "/about",
        label: `About`
    },
    {
        href: "/menu",
        label: `Menu`
    },
    {
        href: "/reservations",
        label: `Reservations`
    },
    {
        href: "/orderonline",
        label: `Order Online`
    },
    {   href: "./login",
        label: `Login`
    },
];

const contact = [
    {
        icon: faMapLocationDot,
        label: `123 Food St, Chicago IL`,
    },
    {
        icon: faPhone,
        label: `0800 123 456`,
    },
    {
        icon: faEnvelope,
        url: "mailto: hello@example.com",
        label: `email@example.com`,
    },
];

const socials = [
    {
        icon: faFacebook,
        url: "https://www.facebook.com",
        alt: "Facebook"
    },
    {
        icon: faInstagram,
        url: "https://www.instagram.com",
        alt: "Instagram"
    },
    {
        icon: faTwitter,
        url: "https://www.twitter.com",
        alt: "Twitter",
    },
    {
        icon: faLinkedin,
        url: "https://www.linkedin.com",
        alt: "Linkedin"
    },
    {
        icon: faYoutube,
        url: "https://www.youtube.com",
        alt: "Youtube",
    },
];

const hours = [
    {
        day: `Mon`,
        openHours: `Closed`
    },
    {
        day: `Tue`,
        openHours: `Closed`
    },
    {
        day: `Wed`,
        openHours: `5pm - 10pm`
    },
    {
        day: `Thu`,
        openHours: `5pm - 10pm`
    },
    {
        day: `Fri`,
        openHours: `4.30pm - 11pm`
    },
    {
        day: `Sat`,
        openHours: `12.30pm - midnight`
    },
    {
        day: `Sun`,
        openHours: `12.30pm - 10pm`
    },
];

function Footer() {
    return (
        <footer>
            <nav>
                <HStack spacing={100}>
                <img src="../images/logo2.png" alt="Little Lemon Logo" />
                <VStack spacing={4}>
                {navigation.map((navigation) => (
                <a key={navigation.index} href={navigation.href}>
                    {navigation.label}
                </a>))}
                </VStack>
                <VStack>
                    {contact.map((contact) =>(
                        <a key={contact.index} href={contact.url}>
                            <HStack>
                            <FontAwesomeIcon icon={contact.icon} size="1x" />
                           <a href={contact.url}>{contact.label}</a>
                           </HStack>
                        </a>
                    ))}
                </VStack>
                <VStack spacing={6}>
                {socials.map((social, index) => (
                <a key={social.index} href={social.url}>
                    <FontAwesomeIcon icon={social.icon} size="1x" />
                </a>))};
                </VStack>
                <VStack spacing={2}>
                {hours.map((hour) => (
                <div key={hour.day}>
                    <p>{hour.day}: {hour.openHours}</p>
                </div>))}
                </VStack>

                </HStack>
            </nav>
        </footer>
    )
}

export default Footer;