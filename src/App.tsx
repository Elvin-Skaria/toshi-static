import {
  Box,
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import Header from "./modules/Header"
import HeroSection from "./section/HeroSection"
import ToshiLinksSection from "./section/ToshiLinksSection"
import HowToSection from "./section/HowToSection"

import FullBackground from "./assets/images/full_background.svg"
import ToolBoxSection from "./section/ToolBoxSection"
import ToshiNFT from "./section/ToshiNFT"
import Footer from "./modules/Footer"


export const App = () => (
  <ChakraProvider theme={theme}>
    <Box
      backgroundImage={FullBackground}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      minHeight="550vh"
      flexDirection={'column'}
    >
      <Header />
      <HeroSection />
      <ToshiLinksSection />
      <HowToSection />
      <ToolBoxSection />
      <ToshiNFT />
      <Footer />
    </Box>
  </ChakraProvider>
)
