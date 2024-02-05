import {
  Box,
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import { HashRouter as Router, Routes, Route } from "react-router-dom"

import Header from "./modules/Header"
import HeroSection from "./section/HeroSection"
import ToshiLinksSection from "./section/ToshiLinksSection"
import HowToSection from "./section/HowToSection"
import ToshiNFT from "./section/ToshiNFT"
import ToolBoxSection from "./section/ToolBoxSection"
import Footer from "./modules/Footer"

import FullBackground from "./assets/images/full_background.svg"


export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={mainContent()} />
        </Routes>
      </Router>
    </ChakraProvider>
  )
}

const mainContent = () => (
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
)
