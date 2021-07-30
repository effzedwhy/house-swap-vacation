import React, { Fragment } from 'react'
import SingleListing from './SingleListing'
import { Flex, Stack } from '@chakra-ui/react'

const ListingsList = () => {
  return (
    <Fragment>
      <Flex direction='column' align='center' m={10}>
        <Stack spacing={4}>
          <SingleListing />
        </Stack>
      </Flex>
    </Fragment>
  )
}

export default ListingsList
