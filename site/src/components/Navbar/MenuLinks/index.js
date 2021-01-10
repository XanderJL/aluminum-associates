import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"
import { Box, Icon, Stack } from "@chakra-ui/react"
import MenuItem from "./MenuItem"
import { AiFillPhone } from "react-icons/ai"
import MenuDropdown from "./MenuDropdown"

const MenuLinks = ({ isOpen }) => {
  const currentPath = useLocation().pathname
  const data = useStaticQuery(graphql`
    {
      allTabs: sanityFaq {
        title
        metaDescription
        slug {
          current
        }
        tabs {
          title
          slug {
            current
          }
        }
      }
    }
  `)
  const { tabs } = data.allTabs
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align={{ base: "flex-start", md: "center" }}
        justify={["flex-start", "space-between", "flex-end", "flex-end"]}
        direction={{ base: "column", md: "row" }}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/about">About</MenuItem>
        <MenuDropdown>Products</MenuDropdown>
        <MenuItem to="/services">Services</MenuItem>
        <MenuItem to={`/faq/${tabs[0].slug.current}`}>FAQ</MenuItem>
        <MenuItem to="/contact">Contact</MenuItem>
        <MenuItem to="tel:519-453-6400" internal={false}>
          <Icon as={AiFillPhone} /> 519-453-61400
        </MenuItem>
      </Stack>
    </Box>
  )
}
export default MenuLinks
