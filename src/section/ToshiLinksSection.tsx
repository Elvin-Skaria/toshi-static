import { Box, Button, Flex, Image, HStack } from '@chakra-ui/react'
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
    return (
        <Box minH={'125vh'} pt={'10vh'}>
            <TextWrapper text='Toshi’s favourite LINKS' fontFamily='Prototype' fontSize={60} Fcolor='#FFFFFF' align='center' />
            <Flex p={5} mt={10} overflow={'scroll'} className='scroll' mb={5}>
                {toshiLinks.map((item, index) => (
                    <Flex
                        key={index}
                        flexDirection={'column'}
                        alignItems={'center'}
                        minW={300}
                        minH={200}
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
            <Flex justifyContent={'center'} mb={10}>
                <Button
                    border={'1px solid #FFFFFF'}
                    background={'none'}
                    borderRadius={'30px'}
                    w={200}
                    mr={5}
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
            <Flex justifyContent={'center'}>
                <HStack spacing={10}>
                    {toshiLinks2.map((item, index) => (
                        <Flex
                            key={index}
                            flexDirection={'column'}
                            justifyContent={'center'}
                            alignItems={'center'}
                            cursor={'pointer'}
                            onClick={() => window.open(item.redirect, '_blank')}>
                            <Image src={item.image} alt={item.image} objectFit={'contain'} mb={5} />
                            <TextWrapper text={item.title} fontSize={16} Fcolor='#FFFFFF' align='center' />
                        </Flex>
                    ))}
                </HStack>
            </Flex>

        </Box >
    )
}

export default ToshiLinksSection