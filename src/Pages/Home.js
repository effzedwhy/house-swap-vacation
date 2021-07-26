import React, { useState } from 'react'
import { Flex, Stack, Heading } from '@chakra-ui/react'
import ListingsList from '../Components/Listings/ListingsList'

const Home = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)

  return (
    <div>
      <Flex direction='column' mt='50px'>
        <Stack spacing={4} align='center'>
          <Heading as='h1' size='xl' color='teal.700' mr='middle'>
            Enjoy a swap-cation!
          </Heading>
          <Heading as='h2' size='lg' color='teal.500'>
            Spend a lovely vacation at a different location!
          </Heading>
        </Stack>
      </Flex>

      <ListingsList />
    </div>
  )
}

export default Home
 