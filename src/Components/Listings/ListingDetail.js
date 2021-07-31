import React, { Fragment, useEffect, useState } from 'react'
import Firebase from '../../firebase'
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
import { useParams } from 'react-router-dom'

const ListingDetail = () => {
  const [thisListing, setThisListing] = useState('')
  const params = useParams()

  const id = params.id

  console.log(params.id)

  useEffect(() => {
    Firebase.database()
      .ref('newListing')
      .on('value', snapshot => {
        if (snapshot.val())
          setThisListing({
            ...snapshot.val()
          })
      })
  }, [])

  const {
    firstName,
    surname,
    beds,
    baths,
    dates,
    toilets,
    city,
    country,
    living,
    bedroom,
    bathroom,
    general,
    outside,
    kitchen,
    photo
  } = thisListing[id]

  // const storageRef = Firebase.storage().ref()
  // console.log(photo)
  // storageRef
  //   .child(`images/${photo}`)
  //   .getDownloadURL()
  //   .then(url => {
  //     const imgs = document.getElementById(`property[id]`)
  //     imgs.setAttribute('src', url)
  //   })

  return (
    <Fragment>
      <Flex
        w='900px'
        h='1600px'
        borderWidth='1px'
        borderRadius='lg'
        overflow='hidden'
        shadow='md'
        color='gray.500'
      >
        <Image
          id={`property[id]`}
          alt='property'
          maxH='220px'
          maxW='300px'
          //   fallbackSrc={homeImg}
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
              {beds} beds &bull; {baths} baths
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
            {/* <List d='flex' alignItems='center' isTruncated maxW='500px'>
              {kitchen.map(a =>
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
              {general.map(a =>
                a !== false ? (
                  <ListItem mr='25px' d='flex' alignItems='center' isTruncated>
                    <ListIcon as={CheckCircleIcon} color='teal.500' />
                    {a}
                  </ListItem>
                ) : null
              )}
            </List> */}
          </Box>
          <Box fontSize='md' mt='5px'>
            Location: &nbsp; {city},&nbsp;
            {country}
          </Box>
          <Spacer />
          <Box>Dates available:&nbsp; {dates}</Box>
          <Box>
        
          </Box>
        </Flex>
      </Flex>
    </Fragment>
  )
}

export default ListingDetail
