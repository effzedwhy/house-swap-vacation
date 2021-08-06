import { Fragment, useState } from 'react'
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
import homeImg from '../../assets/homeswap-home-one.jpg'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import 'firebase/storage'
import Firebase from '../../firebase'

const ListingCard = ({
  id,
  baths,
  beds,
  kitchen,
  general,
  city,
  country,
  dates,
  data,
  button
}) => {
  const [url, setUrl] = useState('')
  console.log(data, id)
  Object.keys(data).forEach(photoID => {
    if (data[photoID].photo === data[id].photo)
      Firebase.storage()
        .ref()
        .child('images/' + data[photoID].photo)
        .getDownloadURL()
        .then(url => {
          setUrl(url)
        })
  })
  return (
    <Fragment>
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
          key={`${id}`}
          src={url}
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
            <List d='flex' alignItems='center' isTruncated maxW='500px'>
              {kitchen &&
                kitchen.map(a =>
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
              {general &&
                general.map(a =>
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
            Location: &nbsp; {city},&nbsp;
            {country}
          </Box>
          <Spacer />
          <Box>Dates available:&nbsp; {dates}</Box>
          <Box>
            <Link to={button.link}>
              <Button
                as='span'
                mt={2}
                colorScheme='teal'
                fontSize='sm'
                size='sm'
                w='100%'
              >
                {button.label}
              </Button>
            </Link>
          </Box>
        </Flex>
      </Flex>
    </Fragment>
  )
}
export default ListingCard
