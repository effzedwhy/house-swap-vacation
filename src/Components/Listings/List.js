import React, { Fragment } from 'react'
import { Flex, Stack } from '@chakra-ui/react'
import SingleListing from './SingleListing'
import { useAllData } from '../../Hooks/useData'
import { useQuery } from 'react-query'

const Listing = () => {
  const { isLoading, isError, data, error } = useQuery('alldata', useAllData)

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }
  console.log(data)
  return (
    <Fragment>
      <Flex direction='column' align='center' m={10}>
        <Stack spacing={4}>
          {Object.keys(data).map(id => {
            return (
              <SingleListing
                id={id}
                key={id}
                beds={data[id].beds}
                baths={data[id].baths}
                toilets={data[id].toilets}
                living={data[id].living}
                bedroom={data[id].bedroom}
                bathroom={data[id].bathroom}
                general={data[id].general}
                kitchen={data[id].kitchen}
                outside={data[id].outside}
                photo={data[id].photo}
                city={data[id].city}
                country={data[id].country}
                dates={data[id].dates}
                data={data}
              />
            )
          })}
        </Stack>
      </Flex>
    </Fragment>
  )
}

export default Listing
