import React, { Fragment } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../../Store/authContext'

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

const Header = () => {
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  const logoutHandler = () => {
    logout()
    history.push('/')
  }

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
              <Link to='/home'>HouseSwap</Link>
            </Text>
          </Box>
          <Spacer />
          <Box>
            <Menu>
              {currentUser && (
                <>
                  <MenuButton as={Button} colorScheme='teal'>
                    Profile
                  </MenuButton>

                  <MenuList bg='teal.700' border='0'>
                    <MenuGroup title='Profile'>
                      <Link to='/my-account'>
                        <MenuItem>My Account</MenuItem>
                      </Link>

                      <MenuItem>My Favourites</MenuItem>

                      <Link to='/submit-listing'>
                        <MenuItem>List Your Home</MenuItem>
                      </Link>
                    </MenuGroup>
                    <MenuDivider />

                    <MenuGroup>
                      <MenuItem>FAQ</MenuItem>

                      <MenuItem onClick={logoutHandler}>Logout</MenuItem>
                    </MenuGroup>
                  </MenuList>
                </>
              )}
              {!currentUser ? (
                <Link to='/authentication'>
                  <MenuButton as={Button} colorScheme='teal'>
                    Login
                  </MenuButton>
                </Link>
              ) : (
                <Link to='/home'>
                  <MenuButton
                    as={Button}
                    ml='10px'
                    colorScheme='teal'
                    onClick={logoutHandler}
                  >
                    Logout
                  </MenuButton>
                </Link>
              )}
            </Menu>
          </Box>
        </Flex>
      </header>
    </Fragment>
  )
}

export default Header
