import React, { Fragment } from 'react'
import { Flex, Stack } from '@chakra-ui/react'
import SingleListing from './SingleListing'
import { useAllData } from '../../Hooks/useData'

const Listing = () => {
  const listing = useAllData()

  return (
    <Fragment>
      <Flex direction='column' align='center' m={10}>
        <Stack spacing={4}>
          {Object.keys(listing).map(id => {
            return (
            <SingleListing
              id={id}
              key={id}
              beds={listing[id].beds}
              baths={listing[id].baths}
              toilets={listing[id].toilets}
              living={listing[id].living}
              bedroom={listing[id].bedroom}
              bathroom={listing[id].bathroom}
              general={listing[id].general}
              kitchen={listing[id].kitchen}
              outside={listing[id].outside}
              photo={listing[id].photo}
              city={listing[id].city}
              country={listing[id].country}
              dates={listing[id].dates}
              photos={listing[id].photo}
            />
          )})}
        </Stack>
      </Flex>
    </Fragment>
  )
}

export default Listing
