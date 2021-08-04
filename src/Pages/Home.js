import React from 'react'
import { Flex, Stack, Heading } from '@chakra-ui/react'
import List from '../Components/Listings/List'

const Home = () => {
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
      <List />
    </div>
  )
}

export default Home
