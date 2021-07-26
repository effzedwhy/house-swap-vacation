import React, { Fragment } from 'react'
import { Flex, Box, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Fragment>
      <Flex
        bg='teal.300'
        w='100%'
        h='100px'
        color='white'
        pr={4}
        pl={4}
        align='center'
        alignSelf='baseline'
      >
        <Box>
          <Text>T&Cs</Text>
          <Text>Privacy Policy</Text>
          <Text>Contact Us</Text>
        </Box>
        <Box>
          <Text></Text>
        </Box>
      </Flex>
    </Fragment>
  )
}

export default Footer
