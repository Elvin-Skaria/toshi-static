import TextWrapper from "../components/TextWrapper"
import {
    Box,
    Flex,
} from "@chakra-ui/react"

const HeroSection = () => {
    return (
        <Flex justifyContent={'center'} minH={'100vh'}>
            <Box w={'500px'} mt={'17vh'} ml={'10vh'} >
                <TextWrapper
                    text="Welcome to toshi town!"
                    fontFamily='Prototype'
                    fontSize={60}
                    Fcolor="#FFFFFF"
                    shadow='9px 4px 11px #00000080'
                />
            </Box>
        </Flex>
    )
}

export default HeroSection