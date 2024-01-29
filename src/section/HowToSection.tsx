import React from 'react'
import { Button, Flex, HStack } from '@chakra-ui/react'
import TextWrapper from '../components/TextWrapper';

import addBase from '../assets/images/HowTo/addBase.svg';
import bridgeBase from '../assets/images/HowTo/bridgeBase.svg';
import buyToshi from '../assets/images/HowTo/buyToshi.svg';
import VideoModal from '../modules/VideoModal';

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
    const [openModal, setOpenModal] = React.useState(false);
    return (
        <Flex minH={'110vh'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} border={'1px solid red'}>
            <VideoModal openModal={openModal} closeModal={() => setOpenModal(false)} videoSrc='' />
            <TextWrapper text='how to' fontFamily='Prototype' fontSize={60} Fcolor='#2C70FE' align='center' className='m-b-8' />
            <TextWrapper text='CLICK ON THE BUTTON AND DISCOVER MORE...' Fcolor='#FF7802' align='center' className='m-b-16' />
            <HStack spacing={5}>
                {dataArray.map((data, index) => (
                    <Flex
                        key={index}
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
                            onClick={() => setOpenModal(true)}
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