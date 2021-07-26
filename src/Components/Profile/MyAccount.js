import React, { Fragment } from 'react'
import { Flex, Stack, Text, Heading } from '@chakra-ui/react'

const ListingsList = () => {
  return (
    <Fragment>
      <Flex direction='column' align='center' m={10}>
        <Stack spacing={4}>
          <Heading>Profile</Heading>
        </Stack>
      </Flex>
    </Fragment>
  )
}

export default ListingsList
