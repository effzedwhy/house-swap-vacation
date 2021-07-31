import React, { Fragment } from 'react'
import { Flex, Stack } from '@chakra-ui/react'
import ListingDetail from '../Components/Listings/ListingDetail'

const Listing = () => {
  return (
    <Fragment>
      <Flex direction='column' align='center' m={10}>
        <Stack spacing={4}>
          <ListingDetail  />
        </Stack>
      </Flex>
    </Fragment>
  )
}

export default Listing
