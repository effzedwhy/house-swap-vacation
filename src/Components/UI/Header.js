import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'

import {
  Box,
  Text,
  Menu,
  MenuButton,
  MenuItem,
  MenuGroup,
  MenuList,
  Button,
  MenuDivider,
  Flex,
  Spacer
} from '@chakra-ui/react'
import Login from '../Profile/Login'

// isLogged in? show logout else show login button
//login button shows modal with login/sign up options

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <Fragment>
      <header>
        <Flex
          bg='teal.300'
          w='100%'
          h='60px'
          color='white'
          pr={4}
          pl={4}
          align='center'
        >
          <Box>
            <Text fontSize='2xl'>
              <Link to='/home'>SwapHouse</Link>
            </Text>
          </Box>
          <Spacer />
          <Box>
            <Menu>
              {!isLoggedIn && (
                <Link to='/account'>
                  <MenuButton as={Button} colorScheme='teal'>
                    Login
                  </MenuButton>
                </Link>
              )}

              {isLoggedIn && (
                <>
                  <MenuButton as={Button} colorScheme='teal'>
                    <Link to='/my-account'>Profile</Link>
                  </MenuButton>
                  <MenuList bg='teal.700' color='white' border='0'>
                    <MenuGroup title='Profile'>
                       <Link to='/my-account'><MenuItem>
                       My Account
                      </MenuItem></Link>
                      <MenuItem>My Favourites</MenuItem>
                      <MenuItem>
                        <Link to='/submit-listing'>List Your Home</Link>
                      </MenuItem>
                    </MenuGroup>
                    <MenuDivider />
                    <MenuGroup>
                      <MenuItem>FAQ</MenuItem>
                      <MenuItem>Logout</MenuItem>
                    </MenuGroup>
                  </MenuList>
                </>
              )}
            </Menu>
          </Box>
        </Flex>
      </header>
    </Fragment>
  )
}

export default Header
