import React from 'react';
import { Box, Flex, Link, Button, Image } from '@chakra-ui/react';
import TextWrapper from '../components/TextWrapper';

import ToshiLogo from '../assets/images/Toshi_Text.png';
import Twitter from '../assets/icons/socials/social-twitter.svg';
import Telegram from '../assets/icons/socials/social-telegram.svg';
import Medium from '../assets/icons/socials/social-medium.svg';

const Header: React.FC = () => {
    return (
        <Box
            position="sticky"
            top={0}
            background="#FFFFFF78"
            minHeight="50px"
            backdropFilter="blur(5px)"
            shadow={'0px 4px 4px rgba(0, 0, 0, 0.25)'}
        >
            <Flex alignItems="center" justifyContent="space-between" padding="0 20px">
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
                <Flex justifyContent="space-between" flex={0.3}>
                    <Link href="#">
                        <TextWrapper text='toshi tools' fontFamily='Prototype' />
                    </Link>
                    <Link href="#">
                        <TextWrapper text='how to' fontFamily='Prototype' />
                    </Link>
                    <Link href="#">
                        <TextWrapper text='nfts' fontFamily='Prototype' />
                    </Link>
                    <Link href="#">
                        <TextWrapper text='links' fontFamily='Prototype' />
                    </Link>
                    <Link href="#">
                        <TextWrapper text='team' fontFamily='Prototype' />
                    </Link>
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
        </Box>
    );
};

export default Header;
