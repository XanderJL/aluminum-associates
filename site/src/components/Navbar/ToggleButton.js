import React from "react"
import { Box, Icon } from "@chakra-ui/react"
import { IoClose } from "react-icons/io5"
import { FiMenu } from "react-icons/fi"

const ToggleButton = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "display", md: "none" }} onClick={toggle}>
      {isOpen ? <Icon as={IoClose} boxSize="1.15rem"/> : <Icon as={FiMenu} />}
    </Box>
  )
}

export default ToggleButton
