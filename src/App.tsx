import {
  Box,
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import Header from "./modules/Header"
import HeroSection from "./section/HeroSection"
import ToshiLinksSection from "./section/ToshiLinksSection"

import FullBackground from "./assets/images/full_background.svg"


export const App = () => (
  <ChakraProvider theme={theme}>
    <Box
      backgroundImage={FullBackground}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      minHeight="600vh"
      flexDirection={'column'}>
      <Header />
      <HeroSection />
      <ToshiLinksSection />
    </Box>
  </ChakraProvider>
)
