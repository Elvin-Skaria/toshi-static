import React, { useMemo } from 'react'
import { Box, Button, ButtonGroup, Flex, HStack, Image, useMediaQuery } from '@chakra-ui/react'
import TextWrapper from '../components/TextWrapper'

import Multisender from '../assets/images/Tools/tools-multisender.svg';
import TokenLauncher from '../assets/images/Tools/tools-token-launcher.svg';
import TokenLocker from '../assets/images/Tools/tools-token-locker.svg';
import Launchpad from '../assets/images/Tools/tools-launchpad.svg';
import Swap from '../assets/images/Tools/tools-swap.svg';

import Default from '../assets/images/Tools/tools-default.svg';


const toolboxData = [
    {
        type: 'tokenLocker',
        buttonText: 'Token Locker',
        image: TokenLocker,
        subTitle: 'Multisender 2.0 the best ever made',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut lab Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        subDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut lab Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        redirect: ''
    },
    {
        type: 'liquidityLocker',
        buttonText: 'Liquidity Locker',
        image: TokenLocker,
        subTitle: 'Multisender 2.0 the best ever made',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut lab Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        subDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut lab Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        redirect: ''
    },
    {
        type: 'multisender',
        buttonText: 'Multisender',
        image: Multisender,
        subTitle: 'Multisender 2.0 the best ever made',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut lab Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        subDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut lab Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        redirect: ''
    },
    {
        type: 'swap',
        buttonText: 'Swap',
        image: Swap,
        subTitle: 'Multisender 2.0 the best ever made',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut lab Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        subDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut lab Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        redirect: ''
    },
    {
        type: 'tokenLauncher',
        buttonText: 'Token Launcher',
        image: TokenLauncher,
        subTitle: 'Multisender 2.0 the best ever made',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut lab Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        subDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut lab Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        redirect: ''
    },
    {
        type: 'launchpad',
        buttonText: 'Launchpad',
        image: Launchpad,
        subTitle: 'Multisender 2.0 the best ever made',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut lab Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        subDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut lab Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        redirect: ''
    },
]

const ToolBoxSection = () => {
    const [toolSelected, setToolSelected] = React.useState('')
    const [isLargerThan720] = useMediaQuery("(min-width: 720px)");


    const selectedTool = useMemo(() => {
        return toolboxData.find(tool => tool.type === toolSelected)
    }, [toolSelected])

    const onNextTool = () => {
        const currentIndex = toolboxData.findIndex(tool => tool.type === toolSelected)
        if (currentIndex === toolboxData.length - 1) {
            setToolSelected(toolboxData[0].type)
        } else {
            setToolSelected(toolboxData[currentIndex + 1].type)
        }
    }

    return (
        <Flex minH={'100vh'} flexDirection={'column'} id='toolbox'>
            <TextWrapper text='Toshi’s toolbox' fontFamily='Prototype' fontSize={isLargerThan720 ? 60 : 42} Fcolor='#FFFFFF' align='center' className='m-b-8' />
            <TextWrapper text='CLICK ON THE BUTTON AND DISCOVER MORE...' fontSize={16} Fcolor='#FFFFFF' align='center' className='m-b-16' fontWeight={'bold'} />

            <Flex overflow={'auto'} w={'100%'} mb={5} justifyContent={isLargerThan720 ? 'center' : 'none'} className='scroll'>
                <HStack spacing={5} p={2}>
                    {toolboxData.map((data, index) => (
                        <Button
                            key={index}
                            border={data.type === toolSelected ? '1px solid #FFFFFF' : 'none'}
                            background='linear-gradient(180deg, #0052FE 0%, #2C70FE 100%)'
                            borderRadius={'30px'}
                            minW={'150px'}
                            _hover={{
                                border: '1px solid #FFFFFF',
                            }}
                            onClick={() => setToolSelected(data.type)}>
                            <TextWrapper text={data.buttonText} Fcolor='#FFFFFF' align='center' fontFamily='Prototype' />
                        </Button>
                    ))}
                </HStack>
            </Flex>

            <Flex justifyContent={'center'}>
                {toolSelected === '' ?
                    <Image src={Default} w={700} className='reveal' />
                    :
                    <Flex maxW={'900px'} maxH={'400px'} background={'white'} borderRadius={10} p={4}>
                        <Flex flex={0.4}>
                            <Image src={selectedTool?.image} alt='multisender' />
                        </Flex>
                        <Flex flex={0.6} px={4} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                            <TextWrapper
                                text={`Toshi's ${selectedTool?.buttonText}`}
                                fontFamily='Prototype'
                                fontSize={32}
                                Fcolor='#2C70FE'
                                className='m-b-8' />
                            <TextWrapper
                                text={selectedTool?.desc || ''}
                                className='m-b-16' />
                            <TextWrapper
                                text={selectedTool?.subTitle || ''}
                                fontFamily='Prototype'
                                fontSize={16}
                                Fcolor='#2C70FE'
                                className='m-b-16' />
                            <TextWrapper
                                text={selectedTool?.subDesc || ''}
                                className='m-b-32' />
                            <ButtonGroup spacing={3}>
                                <Button
                                    background='linear-gradient(180deg, #0052FE 0%, #2C70FE 100%)'
                                    borderRadius={'30px'}
                                    minW={'150px'}
                                    _hover={{
                                        border: '1px solid #FFFFFF',
                                    }}
                                >
                                    <TextWrapper text='See tool live' fontFamily='Prototype' Fcolor='#FFFFFF' />
                                </Button>
                                <Button
                                    border={'1px solid #0052FE'}
                                    background='none'
                                    borderRadius={'30px'}
                                    minW={'150px'}
                                    _hover={{
                                        border: '1px solid #FFFFFF',
                                    }}
                                    onClick={() => onNextTool()}
                                >
                                    <TextWrapper text='Next tool' fontFamily='Prototype' Fcolor='#0052FE' />
                                </Button>
                            </ButtonGroup>
                        </Flex>
                    </Flex>
                }
            </Flex>



        </Flex>
    )
}

export default ToolBoxSection