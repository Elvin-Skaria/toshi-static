import TextWrapper from "../components/TextWrapper"
import {
    Box,
    Flex,
    useMediaQuery,
} from "@chakra-ui/react"

const HeroSection = () => {
    const [isLargerThan720] = useMediaQuery("(min-width: 720px)");

    return (
        <Flex justifyContent={'center'} minH={'100vh'} id="hero">
            <Box w={isLargerThan720 ? '500px' : '300px'} pt={'17vh'} pl={isLargerThan720 ? '10vh' : '0vh'} >
                <TextWrapper
                    text="Welcome to toshi town!"
                    fontFamily='Prototype'
                    fontSize={60}
                    Fcolor="#FFFFFF"
                    shadow='9px 4px 11px #00000080'
                    align={isLargerThan720 ? 'left' : 'center'}
                />
            </Box>
        </Flex>
    )
}

export default HeroSection