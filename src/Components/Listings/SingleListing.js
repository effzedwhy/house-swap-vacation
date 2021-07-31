import React, { Fragment, useEffect, useState } from 'react'
import {
  Box,
  Image,
  Badge,
  Flex,
  Button,
  Spacer,
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import Firebase from '../../firebase'
import 'firebase/database'
import homeImg from '../../assets/homeswap-home-one.jpg'
import { Link } from 'react-router-dom'

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
  }, [])

  return (
    <Fragment>
      {Object.keys(newListing).map(id => {
        if (newListing[id].photo) {
          const storageRef = Firebase.storage().ref()
          console.log(newListing[id].photo)
          storageRef
            .child(`images/${newListing[id].photo}`)
            .getDownloadURL()
            .then(url => {
              const imgs = document.getElementById(`property${id}`)
              imgs.setAttribute('src', url)
            })
        }
        const moreDetailLink = `/listing-detail/${id}`
        return (
          <Flex
            w='900px'
            maxH='600px'
            borderWidth='1px'
            borderRadius='lg'
            overflow='hidden'
            shadow='md'
            color='gray.500'
          >
            <Image
              id={`property${id}`}
              alt='property'
              maxH='220px'
              maxW='300px'
              fallbackSrc={homeImg}
            />
            <Spacer />
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
              <Box
                fontWeight='semibold'
                letterSpacing='wide'
                fontSize='xs'
                textTransform='uppercase'
                mt='2'
                d='flex'
              >
                <List d='flex' alignItems='center' isTruncated maxW='500px'>
                  {newListing[id].kitchen.map(a =>
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
                <List d='flex' alignItems='center' isTruncated maxW='500px'>
                  {newListing[id].general.map(a =>
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
                Location: &nbsp; {newListing[id].city},&nbsp;
                {newListing[id].country}
              </Box>
              <Spacer />
              <Box>Dates available:&nbsp; {newListing[id].dates}</Box>
              <Box>
                <Button
                  as='span'
                  mt={2}
                  colorScheme='teal'
                  fontSize='sm'
                  size='sm'
                  w='100%'
                >
                  <Link to={moreDetailLink} id={id}>
                    More details
                  </Link>
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
