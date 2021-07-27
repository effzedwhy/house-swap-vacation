import React, { Fragment, useContext } from 'react'
import { Flex, Stack, Heading } from '@chakra-ui/react'
import Authentication from './Authentication'
import AuthContext from '../../Store/authContext'

const ListingsList = () => {
  const ctx = useContext(AuthContext)

  return (
    <Fragment>
      {!ctx.isLoggedIn ? (
        <Authentication />
      ) : (
        <Flex direction='column' align='center' m={10}>
          <Stack spacing={4}>
            <Heading>Profile</Heading>
          </Stack>
        </Flex>
      )}
    </Fragment>
  )
}

export default ListingsList
