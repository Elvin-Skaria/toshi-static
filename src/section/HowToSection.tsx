import React from 'react'
import { Box, Button, Flex, HStack } from '@chakra-ui/react'
import TextWrapper from '../components/TextWrapper';

import addBase from '../assets/images/HowTo/addBase.svg';
import bridgeBase from '../assets/images/HowTo/bridgeBase.svg';
import buyToshi from '../assets/images/HowTo/buyToshi.svg';

const dataArray = [
    {
        image: addBase,
        buttonText: 'add base chain',
        redirectLink: '',
    },
    {
        image: bridgeBase,
        buttonText: 'bridge to base',
        redirectLink: '',
    },
    {
        image: buyToshi,
        buttonText: 'Buy toshi',
        redirectLink: '',
    },
]

const HowToSection = () => {
    return (
        <Flex minH={'110vh'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
            <TextWrapper text='how to' fontFamily='Prototype' fontSize={42} Fcolor='#2C70FE' align='center' className='m-b-8' />
            <TextWrapper text='CLICK ON THE BUTTON AND DISCOVER MORE...' Fcolor='#FF7802' align='center' className='m-b-16' />
            <HStack spacing={5}>
                {dataArray.map((data, index) => (
                    <Flex
                        justifyContent={'center'}
                        alignItems={'flex-end'}
                        backgroundImage={data.image}
                        backgroundSize="cover"
                        backgroundRepeat="no-repeat"
                        minH={'500px'}
                        minW={'400px'}
                        borderRadius={16}
                        pb={3}
                        cursor={'pointer'}
                    >
                        <Button
                            background='linear-gradient(180deg, #0052FE 0%, #2C70FE 100%)'
                            borderRadius={'30px'}
                            minW={'150px'}
                            _hover={{
                                border: '1px solid #FFFFFF',
                            }}
                        >
                            <TextWrapper text={data.buttonText} Fcolor='#FFFFFF' align='center' />
                        </Button>
                    </Flex>
                ))
                }

            </HStack >

        </Flex >
    )
}

export default HowToSection;