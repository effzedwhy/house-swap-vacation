import React, { useState } from 'react'
import {
  Heading,
  Flex,
  Box,
  Button,
  Input,
  Checkbox,
  CheckboxGroup,
  Text,
  HStack,
  VStack,
  Stack,
  FormControl,
  FormHelperText,
  Center
} from '@chakra-ui/react'

const SubmitListing = () => {
  const [name, setName] = useState('')
  const nameHandleChange = event => setName(event.target.value)
  const [surname, setSurname] = useState('')
  const surnameHandleChange = event => setSurname(event.target.value)
  const [address1, setAddress1] = useState('')
  const address1HandleChange = event => setAddress1(event.target.value)
  const [address2, setAddress2] = useState('')
  const address2HandleChange = event => setAddress2(event.target.value)
  const [city, setCity] = useState('')
  const cityHandleChange = event => setCity(event.target.value)
  const [postcode, setPostcode] = useState('')
  const postcodeHandleChange = event => setPostcode(event.target.value)
  const [country, setCountry] = useState('')
  const countryHandleChange = event => setCountry(event.target.value)
  const [dates, setDates] = useState('')
  const datesHandleChange = event => setDates(event.target.value)

  return (
    <Center w='1000px' m='auto' mt='100px' mb='200px'>
      <FormControl>
        <Text fontSize='xl'>Submit a listing for your home</Text>

        <Stack spacing={6} mt='30px'>
          <Box d='flex' alignItems='baseline'>
            <Text m={1}>First Name: </Text>
            <Input
              type='text'
              isRequired
              focusBorderColor='teal.600'
              border='2px'
              errorBorderColor='red.600'
              value={name}
              onChange={nameHandleChange}
              placeholder='Name'
              size='sm'
              w='300px'
              mt={1}
            />
            <Text m={1} ml='10px'>
              Surname:
            </Text>{' '}
            <Flex direction='column'>
              <Input
                type='text'
                isRequired
                focusBorderColor='teal.600'
                border='2px'
                errorBorderColor='red.600'
                value={surname}
                placeholder='Surname'
                onChange={surnameHandleChange}
                size='sm'
                w='300px'
                mt={1}
              />
              <FormHelperText>Will not be displayed</FormHelperText>
            </Flex>
          </Box>
          <Flex direction='column'>
            <Text m={1}>Addresss Line 1: </Text>
            <Input
              type='text'
              focusBorderColor='teal.600'
              border='2px'
              errorBorderColor='red.600'
              value={address1}
              placeholder='Address Line 1'
              onChange={address1HandleChange}
              size='sm'
              w='400px'
              mt={1}
            />
            <Text m={1}>Addresss Line 2: </Text>
            <Input
              type='text'
              focusBorderColor='teal.600'
              border='2px'
              errorBorderColor='red.600'
              value={address2}
              placeholder='Address Line 2'
              onChange={address2HandleChange}
              size='sm'
              w='400px'
              mt={1}
            />
            <Text m={1}>City: </Text>
            <Input
              type='text'
              focusBorderColor='teal.600'
              border='2px'
              errorBorderColor='red.600'
              value={city}
              placeholder='City'
              onChange={cityHandleChange}
              size='sm'
              w='250px'
              mt={1}
            />
            <Text m={1}>Postcode: </Text>
            <Input
              type='text'
              focusBorderColor='teal.600'
              border='2px'
              errorBorderColor='red.600'
              value={postcode}
              placeholder='Postcode'
              onChange={postcodeHandleChange}
              size='sm'
              w='100px'
              mt={1}
            />
            <Text m={1}>Country: </Text>
            <Input
              type='text'
              focusBorderColor='teal.600'
              border='2px'
              errorBorderColor='red.600'
              value={country}
              placeholder='Country'
              onChange={countryHandleChange}
              size='sm'
              w='250px'
              mt={1}
            />
            <FormHelperText>Only City & Country will displayed</FormHelperText>
            <VStack align='left' spacing={5} mt='20px'>
              <Heading as='h3' fontSize='lg' mt={3}>
                About Your Home
              </Heading>
              <Text as='h3' m={1}>
                Please select the amenities your home offers:
              </Text>
              <Text as='h4' m={1}>
                Living space:
              </Text>
              <CheckboxGroup colorScheme='teal'>
                <HStack>
                  <Checkbox value='sofa'>Sofa</Checkbox>
                  <Checkbox value='tv'>TV</Checkbox>
                </HStack>
              </CheckboxGroup>
              <Text as='h4' m={1}>
                Bathroom:{' '}
              </Text>
              <CheckboxGroup colorScheme='teal'>
                <HStack>
                  <Checkbox value='soapShampoo'>Soap & Shampoo</Checkbox>
                  <Checkbox value='tv'>Hot water</Checkbox>
                  <Checkbox value='towels'>Towels</Checkbox>
                </HStack>
              </CheckboxGroup>
              <Text as='h4' m={1}>
                Bedroom:{' '}
              </Text>
              <CheckboxGroup colorScheme='teal'>
                <HStack>
                  <Checkbox value='linen'>Linen</Checkbox>
                  <Checkbox value='cupboards'>Cupboards</Checkbox>
                  <Checkbox value='iron'>Iron</Checkbox>
                  <Checkbox value='bathtub'>Bathtub</Checkbox>
                  <Checkbox value='shower'>Shower</Checkbox>
                </HStack>
              </CheckboxGroup>
              <Text as='h4' m={1}>
                Kitchen & Laundry:
              </Text>
              <CheckboxGroup colorScheme='teal'>
                <HStack>
                  <Checkbox value='washingMachine'>Washing Machine</Checkbox>
                  <Checkbox value='fridge'>Fridge</Checkbox>
                  <Checkbox value='microwave'>Microwave</Checkbox>
                  <Checkbox value='cookingbasics'>
                    Cooking Basic: pots & pans
                  </Checkbox>
                  <Checkbox value='crockeryCutlery'>
                    Crockery & Cutlery
                  </Checkbox>
                  <Checkbox value='stove'>Stove</Checkbox>
                  <Checkbox value='oven'>Oven</Checkbox>
                  <Checkbox value='cofeeMaker'>Coffee Maker</Checkbox>
                </HStack>
              </CheckboxGroup>
              <Text as='h4' m={1}>
                General:{' '}
              </Text>
              <CheckboxGroup colorScheme='teal'>
                <HStack>
                  <Checkbox value='heating'>Heating</Checkbox>
                  <Checkbox value='fan'>Fan</Checkbox>
                  <Checkbox value='wifi'>Wifi</Checkbox>
                  <Checkbox value='smokeAlarm'>Smoke Alarm</Checkbox>
                  <Checkbox value='firstAidKit'>First aid kit</Checkbox>
                </HStack>
              </CheckboxGroup>
              <Text as='h4' m={1}>
                Outside:{' '}
              </Text>
              <CheckboxGroup colorScheme='teal'>
                <HStack>
                  <Checkbox value='parking'>Parking</Checkbox>
                  <Checkbox value='garden'>Garden</Checkbox>
                  <Checkbox value='gardenSeating'>Garden Seating</Checkbox>
                  <Checkbox value='firstAidKit'>First aid kit</Checkbox>
                </HStack>
              </CheckboxGroup>
              <Text m={1}>Child-related: </Text>
              <CheckboxGroup colorScheme='teal'>
                <HStack>
                  <Checkbox value='highchair'>Highchair</Checkbox>{' '}
                  <Checkbox value='cot'>Cot</Checkbox>
                  <Checkbox value='bathtub'>Bathtub</Checkbox>
                </HStack>
              </CheckboxGroup>
            </VStack>

            <Text m={1} mt='20px'>
              Dates available:{' '}
            </Text>
            <Input
              type='text'
              focusBorderColor='teal.600'
              border='2px'
              errorBorderColor='red.600'
              value={dates}
              placeholder='Dates'
              onChange={datesHandleChange}
              size='sm'
              w='250px'
              mt={1}
            />
            <Text m={1} mt='20px'>
              Upload photos of your home:
            </Text>
            <Input type='file' mt='20px' pt='5px' />
            <Button mt={10} colorScheme='teal'>
              Submit listing
            </Button>
            <Button mt={5} colorScheme='teal' variant='outline'>
              Cancel
            </Button>
          </Flex>
        </Stack>
      </FormControl>
    </Center>
  )
}

export default SubmitListing
