import React, { Fragment, useEffect, useState } from 'react'
import { Box, Image, Badge, Flex, Button, Spacer } from '@chakra-ui/react'
import Firebase from '../../firebase'

const SingleListing = () => {
  const [newListing, setNewListing] = useState('')

  useEffect(() => {
    Firebase.database()
      .ref('newListing')
      .on('value', snapshot => {
        if (snapshot.val())
          setNewListing({
            ...snapshot.val()
          })
      })

    const storageRef = Firebase.storage().ref()
    storageRef
      .child(`images/`)
      .getDownloadURL()
      .then(url => {
        const img = document.getElementById('property')
        img.setAttribute('src', url)
        console.log(url)
      })
      .catch(error => {
        new Error('Something went wrong')
      })
  }, [])
  return (
    <Fragment>
      {Object.keys(newListing).map(id => {
        return (
          <Flex
            w='900px'
            maxH='600px'
            borderWidth='1px'
            borderRadius='lg'
            overflow='hidden'
            shadow='md'
            key={id}
          >
            <Image id='property' alt='property' maxH='200px' />

            <Flex p='6' direction='column' w='600px'>
              <Box d='flex' alignItems='baseline'>
                <Badge borderRadius='full' px='2' colorScheme='teal'>
                  New
                </Badge>
                <Box
                  color='gray.500'
                  fontWeight='semibold'
                  letterSpacing='wide'
                  fontSize='xs'
                  textTransform='uppercase'
                  ml='2'
                >
                  {newListing[id].beds} beds &bull; {newListing[id].baths} baths
                </Box>
              </Box>
              {/* <Box
                color='gray.500'
                fontWeight='semibold'
                letterSpacing='wide'
                fontSize='xs'
                textTransform='uppercase'
                mt='2'
                d='flex'
              >
                {newListing[id].general.map(
                  a =>
                    a !== false && (
                      <Box>
                        <Text>{a} &bull;&nbsp;</Text>
                      </Box>
                    )
                )}
              </Box> */}
              {/* <Box
                color='gray.500'
                fontWeight='semibold'
                letterSpacing='wide'
                fontSize='xs'
                textTransform='uppercase'
                mt='2'
                d='flex'
              >
                {newListing[id].bathroom.map(
                  a =>
                    a !== false && (
                      <Box>
                        <Text>{a} &bull;&nbsp;</Text>
                      </Box>
                    )
                )}
              </Box> */}
              <Box fontSize='sm'>
                {newListing[id].city},{newListing[id].country}
              </Box>
              <Spacer />
              <Box>{newListing[id].dates}</Box>
              <Box>
                <Button
                  as='span'
                  mt={2}
                  colorScheme='teal'
                  fontSize='sm'
                  size='sm'
                  w='100%'
                >
                  More details
                </Button>
              </Box>
            </Flex>
          </Flex>
        )
      })}
    </Fragment>
  )
}

export default SingleListing
