import React, { Fragment, useState } from 'react'
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
import 'firebase/storage'
import Firebase from '../../firebase'
import { useAllData } from '../../Hooks/useData'
import { useQuery } from 'react-query'

const ListingDetail = () => {
  const [url, setUrl] = useState('')
  const { data, status } = useQuery('alldata', useAllData)
  const params = useParams()
  const ID = params.id
  let beds,
    baths,
    toilets,
    living,
    kitchen,
    bedroom,
    bathroom,
    general,
    outside,
    dates,
    city,
    country,
    key
  console.log(data)

  Object.keys(data).forEach(id => {
    id === ID &&
      Firebase.storage()
        .ref()
        .child('images/' + data[id].photo)
        .getDownloadURL()
        .then(url => {
          setUrl(url)
        })
    beds = data[id].beds
    baths = data[id].baths
    toilets = data[id].toilets
    living = data[id].living
    kitchen = data[id].kitchen
    bedroom = data[id].bedroom
    bathroom = data[id].bathroom
    general = data[id].general
    outside = data[id].outside
    dates = data[id].dates
    city = data[id].city
    country = data[id].country
    key = data[id]
  })

  return (
    <Fragment>
      {status}
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
        key={key}
        direction='column'
      >
        <Image
          fallbackSrc={homeImg}
          alt='home'
          id='property'
          maxW='900px'
          src={url}
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
              {beds} beds &bull; {baths} baths &bull; {toilets} toilets
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
              {living.map(a =>
                a !== false ? (
                  <ListItem mr='25px' d='flex' alignItems='center' isTruncated>
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
            <List d='flex' alignItems='center'>
              {bedroom.map(a =>
                a !== false ? (
                  <ListItem mr='25px' d='flex' alignItems='center' isTruncated>
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
              {bathroom.map(a =>
                a !== false ? (
                  <ListItem mr='25px' d='flex' alignItems='center' isTruncated>
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
              {general.map(a =>
                a !== false ? (
                  <ListItem mr='25px' d='flex' alignItems='center' isTruncated>
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
              {outside.map(a =>
                a !== false ? (
                  <ListItem mr='25px' d='flex' alignItems='center' isTruncated>
                    <ListIcon as={CheckCircleIcon} color='teal.500' />
                    {a}
                  </ListItem>
                ) : null
              )}
            </List>
          </Box>

          <Box fontSize='md' mt='5px'>
            Location: &nbsp; {city},&nbsp;
            {country}
          </Box>
          <Spacer />
          <Box>Dates available:&nbsp; {dates}</Box>
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
    </Fragment>
  )
}

export default ListingDetail
