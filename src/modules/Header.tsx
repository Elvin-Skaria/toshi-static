import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Box, Flex, Link, Button, Image, useMediaQuery, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerFooter, DrawerBody, VStack } from '@chakra-ui/react';
import TextWrapper from '../components/TextWrapper';

import ToshiLogo from '../assets/images/Toshi_Text.png';
import Twitter from '../assets/icons/socials/social-twitter.svg';
import Telegram from '../assets/icons/socials/social-telegram.svg';
import Medium from '../assets/icons/socials/social-medium.svg';
import HamburgerIcon from '../assets/icons/misc/hamburger.svg';



const Header: React.FC = () => {
    const [isLargerThan1240] = useMediaQuery("(min-width: 1240px)");
    const { isOpen, onOpen, onClose } = useDisclosure()


    if (isLargerThan1240) {
        return (
            <Flex
                position="fixed"
                width={'100%'}
                background="#FFFFFF78"
                minHeight="50px"
                backdropFilter="blur(5px)"
                shadow={'0px 4px 4px rgba(0, 0, 0, 0.25)'}
            >
                <Flex alignItems="center" justifyContent="space-between" padding="0 20px"
                    width={'100%'}
                >
                    <Box flex={0.4}>
                        <Image
                            src={ToshiLogo}
                            alt="toshi"
                            //   onClick={() => ('/')}
                            width={250}
                            ml={-14}
                        />
                    </Box>

                    {/* Links */}
                    <Flex justifyContent="space-between" flex={0.3} mr={10}>
                        <HashLink smooth to="#toolbox">
                            <TextWrapper text='toshi tools' fontFamily='Prototype' />
                        </HashLink>
                        <HashLink smooth to="#how-to">
                            <TextWrapper text='how to' fontFamily='Prototype' />
                        </HashLink>
                        <HashLink smooth to="#nfts">
                            <TextWrapper text='nfts' fontFamily='Prototype' />
                        </HashLink>
                        <HashLink smooth to="#links">
                            <TextWrapper text='links' fontFamily='Prototype' />
                        </HashLink>
                        <HashLink smooth to="#">
                            <TextWrapper text='team' fontFamily='Prototype' />
                        </HashLink>
                    </Flex>

                    <Flex justifyContent="space-between" flex={0.1}>
                        <Image
                            src={Twitter}
                            alt="twitter"
                            w={6}
                            onClick={() => window.open('https://twitter.com/TOSHI_BASE', '_blank')}
                            cursor={'pointer'}
                        />
                        <Image
                            src={Telegram}
                            alt="telegram"
                            w={6}
                            onClick={() => window.open('https://t.me/toshibase', '_blank')}
                            cursor={'pointer'}
                        />
                        <Image
                            src={Medium}
                            alt="medium"
                            w={6}
                            onClick={() => window.open('https://medium.com/@ToshiBase', '_blank')}
                            cursor={'pointer'}
                        />
                    </Flex>

                    <Button
                        background='linear-gradient(180deg, #0052FE 0%, #2C70FE 100%)'
                        borderRadius={'30px'}
                        minW={'150px'}
                        _hover={{
                            border: '1px solid #FFFFFF',
                        }}
                    >
                        <TextWrapper text='trade now' fontFamily='Prototype' Fcolor='#FFFFFF' />
                    </Button>
                </Flex>
            </Flex>
        );
    } else {
        return (
            <Box
                top={0}
                background="#FFFFFF78"
                minHeight="50px"
                shadow={'0px 4px 4px rgba(0, 0, 0, 0.25)'}
                px={4}
            >
                <Flex justifyContent={'space-between'}>
                    <Image
                        src={HamburgerIcon}
                        alt="toshi"
                        className="pointer"
                        onClick={onOpen}
                        justifySelf={'flex-start'}
                    />
                    <Image
                        src={ToshiLogo}
                        alt="toshi"
                        //   onClick={() => ('/')}
                        width={200}
                    />
                    <Box />
                </Flex>

                <Drawer
                    isOpen={isOpen}
                    placement='left'
                    onClose={onClose}
                    size={'xs'}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerBody>
                            <VStack spacing={5} mt={14}>
                                <Link href="#">
                                    <TextWrapper text='toshi tools' fontFamily='Prototype' fontSize={16} />
                                </Link>
                                <Link href="#">
                                    <TextWrapper text='how to' fontFamily='Prototype' fontSize={16} />
                                </Link>
                                <Link href="#">
                                    <TextWrapper text='nfts' fontFamily='Prototype' fontSize={16} />
                                </Link>
                                <Link href="#">
                                    <TextWrapper text='links' fontFamily='Prototype' fontSize={16} />
                                </Link>
                                <Link href="#">
                                    <TextWrapper text='team' fontFamily='Prototype' fontSize={16} />
                                </Link>
                                <Button
                                    background='linear-gradient(180deg, #0052FE 0%, #2C70FE 100%)'
                                    borderRadius={'30px'}
                                    minW={'150px'}
                                    _hover={{
                                        border: '1px solid #FFFFFF',
                                    }}
                                >
                                    <TextWrapper text='trade now' fontFamily='Prototype' Fcolor='#FFFFFF' />
                                </Button>
                            </VStack>
                        </DrawerBody>

                        <DrawerFooter justifyContent={'space-around'} pb={8}>
                            <Image
                                src={Twitter}
                                alt="twitter"
                                w={6}
                                onClick={() => window.open('https://twitter.com/TOSHI_BASE', '_blank')}
                                cursor={'pointer'}
                            />
                            <Image
                                src={Telegram}
                                alt="telegram"
                                w={6}
                                onClick={() => window.open('https://t.me/toshibase', '_blank')}
                                cursor={'pointer'}
                            />
                            <Image
                                src={Medium}
                                alt="medium"
                                w={6}
                                onClick={() => window.open('https://medium.com/@ToshiBase', '_blank')}
                                cursor={'pointer'}
                            />
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </Box>
        )
    }
};

export default Header;
