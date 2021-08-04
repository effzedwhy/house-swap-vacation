import React, { Fragment } from 'react'
import {
  Box,
  Flex,
  Button,
  Spacer,
  List,
  ListItem,
  ListIcon,
  Image
} from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import 'firebase/database'
import homeImg from '../../assets/homeswap-home-one.jpg'
import { Link, useParams } from 'react-router-dom'
import 'react-slideshow-image/dist/styles.css'
import { useAllData } from '../../Hooks/useData'
import 'firebase/storage'
import Firebase from '../../firebase'

const ListingDetail = () => {
  const listing = useAllData()
  const params = useParams()
  const ID = params.id
  console.log(listing)

  return (
    <Fragment>
      {Object.keys(listing).map(id => {
        if (id === ID) {
          Firebase.storage()
            .ref()
            .child('images/' + listing[id].photo)
            .getDownloadURL()
            .then(url => {
              const img = document.querySelector('#property')
              img.setAttribute('src', url)
            })
          return (
            <>
              <Link to='/home'>
                <Button>Back</Button>
              </Link>

              <Flex
                w='900px'
                H='1000px'
                borderWidth='1px'
                borderRadius='lg'
                overflow='hidden'
                shadow='md'
                color='gray.500'
                key={id}
                direction='column'
              >
                <Image
                  fallbackSrc={homeImg}
                  alt='home'
                  id='property'
                  maxW='900px'
                />

                <Spacer />
                <Flex p='6' direction='column'>
                  <Box d='flex' alignItems='baseline'>
                    <Box
                      color='gray.500'
                      fontWeight='semibold'
                      letterSpacing='wide'
                      fontSize='xs'
                      textTransform='uppercase'
                    >
                      {listing[id].beds} beds &bull; {listing[id].baths} baths
                      &bull; {listing[id].toilets} toilets
                    </Box>
                  </Box>
                  <Box
                    fontWeight='semibold'
                    letterSpacing='wide'
                    fontSize='xs'
                    textTransform='uppercase'
                    mt='2'
                  >
                    <List d='flex' alignItems='center'>
                      {listing[id].living.map(a =>
                        a !== false ? (
                          <ListItem
                            mr='25px'
                            d='flex'
                            alignItems='center'
                            isTruncated
                          >
                            <ListIcon as={CheckCircleIcon} color='teal.500' />
                            {a}
                          </ListItem>
                        ) : null
                      )}
                    </List>
                  </Box>

                  <Box
                    fontWeight='semibold'
                    letterSpacing='wide'
                    fontSize='xs'
                    textTransform='uppercase'
                    mt='2'
                    d='flex'
                  >
                    <List d='flex' alignItems='center'>
                      {listing[id].kitchen.map(a =>
                        a !== false ? (
                          <ListItem mr='25px' d='flex' alignItems='center'>
                            <ListIcon as={CheckCircleIcon} color='teal.500' />
                            {a}
                          </ListItem>
                        ) : null
                      )}
                    </List>
                  </Box>
                  <Box
                    fontWeight='semibold'
                    letterSpacing='wide'
                    fontSize='xs'
                    textTransform='uppercase'
                    mt='2'
                  >
                    <List d='flex' alignItems='center'>
                      {listing[id].bedroom.map(a =>
                        a !== false ? (
                          <ListItem
                            mr='25px'
                            d='flex'
                            alignItems='center'
                            isTruncated
                          >
                            <ListIcon as={CheckCircleIcon} color='teal.500' />
                            {a}
                          </ListItem>
                        ) : null
                      )}
                    </List>
                  </Box>
                  <Box
                    fontWeight='semibold'
                    letterSpacing='wide'
                    fontSize='xs'
                    textTransform='uppercase'
                    mt='2'
                  >
                    <List d='flex' alignItems='center'>
                      {listing[id].bathroom.map(a =>
                        a !== false ? (
                          <ListItem
                            mr='25px'
                            d='flex'
                            alignItems='center'
                            isTruncated
                          >
                            <ListIcon as={CheckCircleIcon} color='teal.500' />
                            {a}
                          </ListItem>
                        ) : null
                      )}
                    </List>
                  </Box>
                  <Box
                    fontWeight='semibold'
                    letterSpacing='wide'
                    fontSize='xs'
                    textTransform='uppercase'
                    mt='2'
                  >
                    <List d='flex' alignItems='center'>
                      {listing[id].general.map(a =>
                        a !== false ? (
                          <ListItem
                            mr='25px'
                            d='flex'
                            alignItems='center'
                            isTruncated
                          >
                            <ListIcon as={CheckCircleIcon} color='teal.500' />
                            {a}
                          </ListItem>
                        ) : null
                      )}
                    </List>
                  </Box>
                  <Box
                    fontWeight='semibold'
                    letterSpacing='wide'
                    fontSize='xs'
                    textTransform='uppercase'
                    mt='2'
                    mb='20px'
                  >
                    <List d='flex' alignItems='center'>
                      {listing[id].outside.map(a =>
                        a !== false ? (
                          <ListItem
                            mr='25px'
                            d='flex'
                            alignItems='center'
                            isTruncated
                          >
                            <ListIcon as={CheckCircleIcon} color='teal.500' />
                            {a}
                          </ListItem>
                        ) : null
                      )}
                    </List>
                  </Box>

                  <Box fontSize='md' mt='5px'>
                    Location: &nbsp; {listing[id].city},&nbsp;
                    {listing[id].country}
                  </Box>
                  <Spacer />
                  <Box>Dates available:&nbsp; {listing[id].dates}</Box>
                  <Box>
                    <Button
                      as='span'
                      mt={2}
                      colorScheme='teal'
                      fontSize='sm'
                      size='sm'
                      w='100%'
                    >
                      Contact Home Owner
                    </Button>
                  </Box>
                </Flex>
              </Flex>
            </>
          )
        }
      })}
    </Fragment>
  )
}

export default ListingDetail
