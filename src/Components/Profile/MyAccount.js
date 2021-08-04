import React, { Fragment } from 'react'
import { Flex, Stack, Heading, Text } from '@chakra-ui/react'
import { useAuth } from '../../Store/authContext'
import { usePhotos } from '../../Hooks/usePhotos'
import { useAllData } from '../../Hooks/useData'
import ListingCard from '../UI/ListingCard'

 const ListingsList =  () => {
  const listing = useAllData()
  const { uid, currentUser } = useAuth()
  let id = ''

  Object.keys(listing).map(a => (listing[a].uid === uid ? (id = a) : null))

  usePhotos(listing[id].photo, id)

  const button = { label: 'Edit' }

  return (
    <Fragment>
      <Flex direction='column' align='center' m={10}>
        <Stack spacing={4}>
          <Heading as='h1'>Profile</Heading>
          <Heading as='h2' size='md'>
            Your details
          </Heading>
          <Text>{currentUser.email}</Text>
          <Heading as='h2' size='md'>
            Your listing
          </Heading>
          {id && (
            <ListingCard
              id={id}
              baths={listing[id].baths}
              bed={listing[id].beds}
              kitchen={listing[id].kitchen}
              general={listing[id].general}
              city={listing[id].city}
              country={listing[id].country}
              dates={listing[id].dates}
              button={button}
            />
          )}
        </Stack>
      </Flex>
    </Fragment>
  )
}

export default ListingsList
