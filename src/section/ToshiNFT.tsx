import { Box, Button, ButtonGroup, Flex } from '@chakra-ui/react'
import React from 'react'
import TextWrapper from '../components/TextWrapper'

const ToshiNFT = () => {
    return (
        <Flex minH={'115vh'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} pt={'20vh'}>
            <TextWrapper text='Toshi’s NFTs' fontFamily='Prototype' fontSize={60} Fcolor='#FFFFFF' align='center' />
            <TextWrapper text='Collections' fontFamily='Prototype' fontSize={100} Fcolor='#FF9B00' align='center' />
            <Box
                maxW={'600px'}>
                <TextWrapper
                    text='Meet Toshi’s cute and fun free nft collections. Sold out withing 2 minutes but you can still trade and buy at open sea'
                    fontSize={16}
                    Fcolor='#FFFFFF'
                    align='center'
                    className='m-b-32'
                />
            </Box>

            <ButtonGroup spacing={3}>
                <Button
                    background='linear-gradient(180deg, #FF7802 0%, #FFB949 100%)'
                    borderRadius={'30px'}
                    minW={'150px'}
                    _hover={{
                        border: '1px solid #FFFFFF',
                    }}
                >
                    <TextWrapper text='open sea' fontFamily='Prototype' Fcolor='#FFFFFF' />
                </Button>
                <Button
                    background='linear-gradient(180deg, #0052FE 0%, #2C70FE 100%)'
                    borderRadius={'30px'}
                    minW={'150px'}
                    _hover={{
                        border: '1px solid #FFFFFF',
                    }}
                >
                    <TextWrapper text='open sea' fontFamily='Prototype' Fcolor='#FFFFFF' />
                </Button>
            </ButtonGroup>

        </Flex>
    )
}

export default ToshiNFT