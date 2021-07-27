import React, { Fragment } from 'react'
import { Flex, Stack, Heading } from '@chakra-ui/react'
import Authentication from './Authentication'
import { useAuth } from '../../Store/authContext'

const ListingsList = () => {
  const ctx = useAuth()

  return (
    <Fragment>
      {!ctx.currentUser ? (
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
