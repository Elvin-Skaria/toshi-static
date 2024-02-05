import React from 'react'
import { Button, Flex, HStack, useMediaQuery } from '@chakra-ui/react'
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
    const [isLargerThan720] = useMediaQuery("(min-width: 720px)");

    return (
        <Flex minH={'110vh'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} id='how-to'>
            <VideoModal openModal={openModal} closeModal={() => setOpenModal(false)} videoSrc='' />
            <TextWrapper text='how to' fontFamily='Prototype' fontSize={isLargerThan720 ? 60 : 42} Fcolor='#2C70FE' align='center' className='m-b-8' />
            {!isLargerThan720 ? (
                <>
                    <HStack spacing={5} mb={3}>
                        {dataArray
                            .filter((data, index) => index < 2)
                            .map((data, index) => (
                                <Flex
                                    key={index}
                                    justifyContent={'center'}
                                    alignItems={'flex-end'}
                                    backgroundImage={data.image}
                                    backgroundSize="cover"
                                    backgroundRepeat="no-repeat"
                                    minH={'300px'}
                                    minW={'150px'}
                                    borderRadius={16}
                                    pb={3}
                                    cursor={'pointer'}
                                >
                                    <Button
                                        background='linear-gradient(180deg, #0052FE 0%, #2C70FE 100%)'
                                        borderRadius={'30px'}
                                        minW={'50px'}
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
                    {dataArray
                        .filter((data, index) => index === 2)
                        .map((data, index) => (
                            <Flex
                                key={index}
                                justifyContent={'center'}
                                alignItems={'flex-end'}
                                backgroundImage={data.image}
                                backgroundSize="cover"
                                backgroundRepeat="no-repeat"
                                minH={'300px'}
                                minW={'150px'}
                                borderRadius={16}
                                pb={3}
                                cursor={'pointer'}
                            >
                                <Button
                                    background='linear-gradient(180deg, #0052FE 0%, #2C70FE 100%)'
                                    borderRadius={'30px'}
                                    minW={'50px'}
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
                </>
            ) : (
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
                            _hover={{
                                transform: 'scale(1.05)',
                                transition: 'transform 0.5s',
                            }}
                            onClick={() => setOpenModal(true)}
                        >
                            <Button
                                background='linear-gradient(180deg, #0052FE 0%, #2C70FE 100%)'
                                borderRadius={'30px'}
                                minW={'50px'}
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
            )}

        </Flex >
    )
}

export default HowToSection;