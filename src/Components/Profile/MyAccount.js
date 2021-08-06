import React, { Fragment } from 'react'
import { Flex, Stack, Heading, Text } from '@chakra-ui/react'
import { useAuth } from '../../Store/authContext'
import { useAllData } from '../../Hooks/useData'
import { useQuery } from 'react-query'
import UserListing from '../Listings/UserListing'

const ListingsList = () => {
  const { uid, currentUser } = useAuth()
  let id = ''

  // Get listing based on matching UID

  const { data, status } = useQuery('data', useAllData)

  if (data) {
    Object.keys(data).map(a =>
      data[a].uid === uid ? (id = a) : <Text>No listing</Text>
    )
  }

  return (
    <Fragment>
      <Flex direction='column' align='center' m={10}>
        {status !== 'success' && status}
        <Stack spacing={4}>
          <Heading as='h1'>Profile</Heading>
          <hr />
          <Heading as='h2' size='md'>
            Your details
          </Heading>

          <Heading size='sm' as='h3'>
            Email address:
          </Heading>
          <Text>{currentUser.email}</Text>
          <Heading as='h2' size='md'>
            Your Listing
          </Heading>
          {id ? (
            <UserListing
              id={id}
              key={id}
              baths={data[id].baths}
              bed={data[id].beds}
              kitchen={data[id].kitchen}
              general={data[id].general}
              city={data[id].city}
              country={data[id].country}
              dates={data[id].dates}
              data={data}
            />
          ) : (
            <Text>No listing</Text>
          )}
        </Stack>
      </Flex>
    </Fragment>
  )
}

export default ListingsList
