import React from 'react'
import { Box, Flex, HStack, Image } from '@chakra-ui/react'

import ToshiLogo from '../assets/images/Toshi_Text.png';

import Twitter from '../assets/icons/socials/social-twitter.svg';
import Telegram from '../assets/icons/socials/social-telegram.svg';
import Medium from '../assets/icons/socials/social-medium.svg';

const Footer = () => {
    return (
        <Flex alignItems="center" justifyContent="space-between">
            <Flex flex={0.3}>

            </Flex>
            <HStack spacing={5}>
                <Flex p={1} borderRadius={'40px'} border={'1px solid #0052FE'} justifyContent={'center'} alignItems={'center'}>
                    <Image
                        src={Twitter}
                        alt="twitter"
                        w={6}
                        onClick={() => window.open('https://twitter.com/TOSHI_BASE', '_blank')}
                        cursor={'pointer'}
                    />
                </Flex>
                <Flex p={1} borderRadius={'40px'} border={'1px solid #0052FE'} justifyContent={'center'} alignItems={'center'}>
                    <Image
                        src={Telegram}
                        alt="telegram"
                        w={6}
                        onClick={() => window.open('https://t.me/toshibase', '_blank')}
                        cursor={'pointer'}
                    />
                </Flex>
                <Flex p={1} borderRadius={'40px'} border={'1px solid #0052FE'} justifyContent={'center'} alignItems={'center'}>
                    <Image
                        src={Medium}
                        alt="medium"
                        w={6}
                        onClick={() => window.open('https://medium.com/@ToshiBase', '_blank')}
                        cursor={'pointer'}
                    />
                </Flex>
            </HStack>
            <Box >
                <Image
                    src={ToshiLogo}
                    alt="toshi"
                    width={250}
                />
            </Box>
        </Flex>
    )
}

export default Footer