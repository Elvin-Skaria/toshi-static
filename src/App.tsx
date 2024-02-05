import {
  Box,
  ChakraProvider,
  theme,
  useMediaQuery,
} from "@chakra-ui/react"
import Header from "./modules/Header"
import HeroSection from "./section/HeroSection"
import ToshiLinksSection from "./section/ToshiLinksSection"
import HowToSection from "./section/HowToSection"

import FullBackground from "./assets/images/full_background.svg"
import ToolBoxSection from "./section/ToolBoxSection"
import ToshiNFT from "./section/ToshiNFT"
import Footer from "./modules/Footer"


export const App = () => {
  const [isLargerThan720] = useMediaQuery("(min-width: 720px)");
  return (
    <ChakraProvider theme={theme}>
      <Box
        backgroundImage={FullBackground}
        backgroundSize={'cover'}
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
}
