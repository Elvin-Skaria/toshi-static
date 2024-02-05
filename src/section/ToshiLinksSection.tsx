import { Box, Button, Flex, Image, HStack, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import TextWrapper from '../components/TextWrapper'

import sushiswap from '../assets/images/partners/sushiswap.svg'
import Poloniex from '../assets/images/partners/Poloniex.svg'
import bitmart from '../assets/images/partners/bitmart.svg'
import bitrue from '../assets/images/partners/bitrue.svg'
import bing from '../assets/images/partners/bing.svg'
import uniswap from '../assets/images/partners/uniswap.svg'

import coingecko from '../assets/images/partners/coingecko.svg'
import coinmarketcap from '../assets/images/partners/coinmarketcap.svg'
import basescan from '../assets/images/partners/basescan.svg'
import dextools from '../assets/images/partners/dextool.svg'
import dexscreener from '../assets/images/partners/dexscreener.svg'


const toshiLinks = [
    {
        image: sushiswap,
        title: 'sushiswap',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ',
        redirect: 'https://www.sushi.com/swap?token1=0xAC1Bd2486aAf3B5C0fc3Fd868558b082a531B2B4&chainId=8453&token0=',
    },
    {
        image: Poloniex,
        title: 'Poloniex',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ',
        redirect: 'https://poloniex.com/trade/TOSHI_USDT?type=spot ',
    },
    {
        image: bitmart,
        title: 'bitmart',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ',
        redirect: 'https://www.bitmart.com/trade/en-US?symbol=TOSHI_USDT&layout=pro',
    },
    {
        image: bitrue,
        title: 'bitrue',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ',
        redirect: 'https://www.bitrue.com/trade/toshi_usdt ',
    },
    {
        image: bing,
        title: 'bing',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ',
        redirect: 'https://bingx.com/en-us/spot/TOSHIUSDT/ ',
    },
    {
        image: uniswap,
        title: 'uniswap',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ',
        redirect: '/',
    },

]

const toshiLinks2 = [
    {
        image: coingecko,
        title: 'coingecko',
        redirect: 'https://www.coingecko.com/en/coins/toshi',
    },
    {
        image: coinmarketcap,
        title: 'coinmarketcap',
        redirect: 'https://coinmarketcap.com/currencies/toshithecat/',
    },
    {
        image: basescan,
        title: 'basescan',
        redirect: 'https://basescan.org/token/0xAC1Bd2486aAf3B5C0fc3Fd868558b082a531B2B4',
    },
    {
        image: dextools,
        title: 'dextools',
        redirect: 'https://www.dextools.io/app/en/base/pair-explorer/0xbfc74e1de81e81b0a807469502f6662cc238795e',
    },
    {
        image: dexscreener,
        title: 'dexscreener',
        redirect: 'https://dexscreener.com/base/0xbfc74e1de81e81b0a807469502f6662cc238795e',
    },

]


const ToshiLinksSection = () => {
    const [isLargerThan720] = useMediaQuery("(min-width: 720px)");

    return (
        <Flex flexDirection={'column'} minH={'125vh'} justifyContent={isLargerThan720 ? 'center' : 'initial'}>
            <TextWrapper text='Toshi’s favourite LINKS' fontFamily='Prototype' fontSize={isLargerThan720 ? 60 : 42} Fcolor='#FFFFFF' align='center' />
            <Flex p={5} mt={5} overflow={'scroll'} className='scroll' mb={isLargerThan720 ? 20 : 0}>
                {toshiLinks.map((item, index) => (
                    <Flex
                        key={index}
                        flexDirection={'column'}
                        alignItems={'center'}
                        minW={isLargerThan720 ? 300 : 200}
                        minH={isLargerThan720 ? 200 : 100}
                        p={4}
                        background='linear-gradient(180deg, #0052FE 63%, #2C70FE 100%)'
                        boxShadow={'0px 4px 20px #FFFFFF inset'}
                        borderRadius={'10px'}
                        opacity={0.9}
                        mr={5}
                        cursor={'pointer'}
                        _hover={{
                            boxShadow: '0px 4px 20px #FFFFFF inset, 0px 0px 8px 4px #27D2E9',
                        }}
                        onClick={() => window.open(item.redirect, '_blank')}
                    >
                        <Image src={item.image} alt={item.image} aspectRatio={'3/2'} objectFit={'contain'} width={'150px'} />
                        <TextWrapper
                            text={item.title}
                            fontFamily='Prototype'
                            fontSize={20}
                            Fcolor='#FFFFFF'
                            align='center'
                            className='m-b-4'
                        />
                        <TextWrapper
                            text={item.desc}
                            fontSize={12}
                            Fcolor='#FFFFFF'
                            align='center' />
                    </Flex>
                ))}
            </Flex>
            <Flex justifyContent={'center'} mb={10} flexDirection={isLargerThan720 ? 'row' : 'column'} alignItems={'center'}>
                <Button
                    border={'1px solid #FFFFFF'}
                    background={'none'}
                    borderRadius={'30px'}
                    w={200}
                    mr={isLargerThan720 ? 5 : 0}
                    mb={isLargerThan720 ? 0 : 5}
                    _hover={{
                        background: 'linear-gradient(180deg, #0052FE 0%, #2C70FE 100%)',
                    }}>
                    <TextWrapper text='Toshi’s stickerpack' fontFamily='Prototype' Fcolor='#FFFFFF' />
                </Button>
                <Button
                    border={'1px solid #FFFFFF'}
                    background={'none'}
                    borderRadius={'30px'}
                    w={200}
                    _hover={{
                        background: 'linear-gradient(180deg, #0052FE 0%, #2C70FE 100%)',
                    }}>
                    <TextWrapper text='Toshi’s stickerpack' fontFamily='Prototype' Fcolor='#FFFFFF' />
                </Button>
            </Flex>
            {isLargerThan720 ?
                (
                    <Flex justifyContent={'center'}>
                        <HStack spacing={10}>
                            {toshiLinks2.map((item, index) => (
                                <Flex
                                    key={index}
                                    flexDirection={'column'}
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                    cursor={'pointer'}
                                    onClick={() => window.open(item.redirect, '_blank')}
                                    _hover={{
                                        transform: 'scale(1.1)',
                                        transition: 'all 0.3s ease',
                                    }}
                                >
                                    <Image src={item.image} alt={item.image} objectFit={'contain'} mb={5} />
                                    <TextWrapper text={item.title} fontSize={16} Fcolor='#FFFFFF' align='center' />
                                </Flex>
                            ))}
                        </HStack>
                    </Flex>
                ) : (

                    <Flex justifyContent={'center'} flexDirection={'column'} alignItems={'center'}>
                        <HStack spacing={20} pb={2}>
                            {toshiLinks2
                                .filter((item, index) => index < 3)
                                .map((item, index) => (
                                    <Flex
                                        key={index}
                                        flexDirection={'column'}
                                        justifyContent={'center'}
                                        alignItems={'center'}
                                        cursor={'pointer'}
                                        maxW={30}
                                        onClick={() => window.open(item.redirect, '_blank')}>
                                        <Image src={item.image} alt={item.image} objectFit={'contain'} mb={5} />
                                        <TextWrapper text={item.title} fontSize={12} Fcolor='#FFFFFF' align='center' />
                                    </Flex>
                                ))}
                        </HStack>
                        <HStack spacing={20} >
                            {toshiLinks2
                                .filter((item, index) => index >= 3)
                                .map((item, index) => (
                                    <Flex
                                        key={index}
                                        flexDirection={'column'}
                                        justifyContent={'center'}
                                        alignItems={'center'}
                                        cursor={'pointer'}
                                        maxW={20}
                                        onClick={() => window.open(item.redirect, '_blank')}>
                                        <Image src={item.image} alt={item.image} objectFit={'contain'} mb={5} />
                                        <TextWrapper text={item.title} fontSize={12} Fcolor='#FFFFFF' align='center' />
                                    </Flex>
                                ))}
                        </HStack>
                    </Flex>
                )}

        </Flex >
    )
}

export default ToshiLinksSection