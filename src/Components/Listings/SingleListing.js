import React, { Fragment } from 'react'
import { Box, Image, Badge, Flex, Button, Spacer, Text } from '@chakra-ui/react'

const SingleListing = () => {
  const property = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of Nottigham City',
    location: 'Nottingham, UK',
    contact: 'More Details',
    bedroom: ['cupboards', 'hangers', 'linen'],
    general: ['heating', 'wifi', 'smoke alarm'],
    bathroom: ['essentials', 'shower', 'towels']
  }

  return (
    <Fragment>
      <Flex
        w='900px'
        maxH='400px'
        borderWidth='1px'
        borderRadius='lg'
        overflow='hidden'
        shadow='md'
      >
        <Image src={property.imageUrl} alt={property.imageAlt} maxH='200px' />

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
              {property.beds} beds &bull; {property.baths} baths
            </Box>
          </Box>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            mt='2'
          >
            {property.bedroom.map(a => (
              <Text>{a}</Text>
            ))}
            &bull; {property.general} &bull;
            {property.bathroom}
          </Box>
          <Box
            mt='2'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            isTruncated
          >
            {property.title}
          </Box>
          <Box fontSize='sm'>{property.location}</Box>
          <Spacer />
          <Box>
            <Button
              as='span'
              mt={2}
              colorScheme='teal'
              fontSize='sm'
              size='sm'
              w='100%'
            >
              {property.contact}
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Fragment>
  )
}

export default SingleListing
