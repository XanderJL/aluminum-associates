import React from "react"
import PropTypes from "prop-types"
import BackgroundImage from "gatsby-background-image"
import HeroOverlay from "./HeroOverlay"
import { Box } from "@chakra-ui/react"
import Container from "../components/Layout/Container"

const Hero = ({ size, fluid, fixed, children }) => {
  return fixed || fluid ? (
    <BackgroundImage
      fixed={fixed ? fixed : null}
      fluid={fluid ? fluid : null}
      className={`hero ${size} is-primary`}
    >
      <HeroOverlay>
        <Box className="hero-body">
          <Box flex={1} minH="100px">
            <Container>{children}</Container>
          </Box>
        </Box>
      </HeroOverlay>
    </BackgroundImage>
  ) : (
    <Box className={`hero ${size} is-primary`}>
      <Box className="hero-body">
        <Box flex={1} minH="100px">
          <Container>{children}</Container>
        </Box>
      </Box>
    </Box>
  )
}

Hero.propTypes = {
  size: PropTypes.string.isRequired,
  fluid: PropTypes.object,
  fixed: PropTypes.object,
}

export default Hero
