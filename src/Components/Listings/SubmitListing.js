import React, { useState, Fragment } from 'react'
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
import { useForm } from 'react-hook-form'
import Firebase from '../../firebase'

const SubmitListing = () => {
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const submitHandler = async data => {
    try {
      console.log('start')
      setIsLoading(true)
      const file = document.getElementById('fileItem').files[0]

      const metadata = {
        contentType: 'image/png'
      }
      const storageRef = Firebase.storage().ref()
      await storageRef.child(`images/${file.name}`).put(file, metadata)

      await Firebase.database()
        .ref('newListing')
        .push({
          name: data.firstName,
          surname: data.surname,
          adddress1: data.address1,
          address2: data.address2,
          city: data.city,
          postcode: data.postcode,
          country: data.country,
          living: data.living,
          bathroom: data.bathroom,
          bedroom: data.bedroom,
          kitchen: data.kitchen,
          general: data.general,
          outside: data.outside,
          dates: data.dates,
          photo: file.name
        })

      console.log('done')

      setIsLoading(false)
    } catch {
      new Error('Something went wrong')
    }
  }

  return (
    <Fragment>
      <Center w='1000px' m='auto' mt='100px' mb='200px'>
        <form onSubmit={handleSubmit(submitHandler)} autoComplete='true'>
          <FormControl>
            <Heading as='h1' fontSize='xl'>
              Submit a listing for your home
            </Heading>

            <Stack spacing={6} mt='30px'>
              <Box d='flex' alignItems='baseline'>
                <Text m={1}>First Name: </Text>
                <Input
                  type='text'
                  isRequired
                  focusBorderColor='teal.600'
                  border='2px'
                  errorBorderColor='red.600'
                  {...register('firstName', {
                    required: true
                  })}
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
                    {...register('surname', {
                      required: true
                    })}
                    placeholder='Surname'
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
                  {...register('address1', {
                    required: true
                  })}
                  placeholder='Address Line 1'
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
                  {...register('address2', {
                    required: false
                  })}
                  placeholder='Address Line 2'
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
                  {...register('city', {
                    required: true
                  })}
                  placeholder='City'
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
                  {...register('postcode', {
                    required: true
                  })}
                  placeholder='Postcode'
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
                  {...register('country', {
                    required: true
                  })}
                  placeholder='Country'
                  size='sm'
                  w='250px'
                  mt={1}
                />
                <FormHelperText>
                  Only City & Country will displayed
                </FormHelperText>
                <VStack align='left' spacing={8} mt='30px'>
                  <Heading as='h3' fontSize='lg' mt={3}>
                    About Your Home
                  </Heading>
                  <Flex>
                    <Flex direction='column'>
                      <Heading as='h3' mb='10px' size='sm'>
                        How many bedrooms?
                      </Heading>
                      <Input
                        isRequired
                        type='number'
                        focusBorderColor='teal.600'
                        border='2px'
                        errorBorderColor='red.600'
                        {...register('beds')}
                        size='sm'
                        w='100px'
                        mt={1}
                      />
                    </Flex>
                    <Flex direction='column' mr='50px' ml='50px'>
                      <Heading as='h3' mb='10px' size='sm'>
                        How many bathrooms?
                      </Heading>
                      <Input
                        isRequired
                        type='number'
                        focusBorderColor='teal.600'
                        border='2px'
                        errorBorderColor='red.600'
                        {...register('baths')}
                        size='sm'
                        w='100px'
                        mt={1}
                      />
                    </Flex>
                    <Flex direction='column'>
                      <Heading as='h3' mb='10px' size='sm'>
                        How many toilets?
                      </Heading>
                      <Input
                        isRequired
                        type='number'
                        focusBorderColor='teal.600'
                        border='2px'
                        errorBorderColor='red.600'
                        {...register('toilets')}
                        size='sm'
                        w='100px'
                        mt={1}
                      />
                    </Flex>
                  </Flex>
                  <Heading as='h4' size='sm' m={1}>
                    Please select the amenities your home offers:
                  </Heading>
                  <Heading as='h4' size='sm'>
                    Living Space
                  </Heading>
                  <CheckboxGroup colorScheme='teal'>
                    <HStack>
                      <Checkbox
                        value='sofa'
                        name='sofa'
                        {...register('living.0')}
                      >
                        Sofa
                      </Checkbox>
                      <Checkbox value='tv' name='tv' {...register('living.1')}>
                        TV
                      </Checkbox>
                    </HStack>
                  </CheckboxGroup>
                  <Heading as='h4' size='sm' m={1}>
                    Bathroom:
                  </Heading>
                  <CheckboxGroup colorScheme='teal'>
                    <HStack>
                      <Checkbox value='soapShampoo' {...register('bathroom.0')}>
                        Soap & Shampoo
                      </Checkbox>
                      <Checkbox value='hotWater' {...register('bathroom.1')}>
                        Hot water
                      </Checkbox>
                      <Checkbox value='towels' {...register('bathroom.2')}>
                        Towels
                      </Checkbox>
                      <Checkbox value='bathtub' {...register('bathroom.3')}>
                        Bathtub
                      </Checkbox>
                      <Checkbox value='shower' {...register('bathroom.4')}>
                        Shower
                      </Checkbox>
                    </HStack>
                  </CheckboxGroup>
                  <Heading as='h4' size='sm' m={1}>
                    Bedroom:
                  </Heading>
                  <CheckboxGroup colorScheme='teal'>
                    <HStack>
                      <Checkbox value='linen' {...register('bedroom.0')}>
                        Linen
                      </Checkbox>
                      <Checkbox value='cupboards' {...register('bedroom.1')}>
                        Cupboards
                      </Checkbox>
                      <Checkbox value='iron' {...register('bedroom.2')}>
                        Iron
                      </Checkbox>
                    </HStack>
                  </CheckboxGroup>
                  <Heading as='h4' size='sm' m={1}>
                    Kitchen & Laundry:
                  </Heading>
                  <CheckboxGroup colorScheme='teal'>
                    <HStack>
                      <Checkbox
                        value='washingMachine'
                        {...register('kitchen.0')}
                      >
                        Washing Machine
                      </Checkbox>
                      <Checkbox value='fridge' {...register('kitchen.1')}>
                        Fridge
                      </Checkbox>
                      <Checkbox value='microwave' {...register('kitchen.2')}>
                        Microwave
                      </Checkbox>
                      <Checkbox
                        value='cookingbasics'
                        {...register('kitchen.3')}
                      >
                        Cooking Basic: pots & pans
                      </Checkbox>
                      <Checkbox
                        value='crockeryCutlery'
                        {...register('kitchen.4')}
                      >
                        Crockery & Cutlery
                      </Checkbox>
                      <Checkbox value='stove' {...register('kitchen.5')}>
                        Stove
                      </Checkbox>
                      <Checkbox value='oven' {...register('kitchen.6')}>
                        Oven
                      </Checkbox>
                      <Checkbox value='cofeeMaker' {...register('kitchen.7')}>
                        Coffee Maker
                      </Checkbox>
                    </HStack>
                  </CheckboxGroup>
                  <Heading as='h4' size='sm' m={1}>
                    General:
                  </Heading>
                  <CheckboxGroup colorScheme='teal'>
                    <HStack>
                      <Checkbox value='heating' {...register('general.0')}>
                        Heating
                      </Checkbox>
                      <Checkbox value='fan' {...register('general.1')}>
                        Fan
                      </Checkbox>
                      <Checkbox value='wifi' {...register('general.2')}>
                        Wifi
                      </Checkbox>
                      <Checkbox value='smokeAlarm' {...register('general.3')}>
                        Smoke Alarm
                      </Checkbox>
                      <Checkbox value='firstAidKit' {...register('general.4')}>
                        First aid kit
                      </Checkbox>
                    </HStack>
                  </CheckboxGroup>
                  <Heading as='h4' size='sm' m={1}>
                    Outside:
                  </Heading>
                  <CheckboxGroup colorScheme='teal'>
                    <HStack>
                      <Checkbox value='parking' {...register('outside.0')}>
                        Parking
                      </Checkbox>
                      <Checkbox value='garden' {...register('outside.1')}>
                        Garden
                      </Checkbox>
                      <Checkbox
                        value='gardenSeating'
                        {...register('outside.2')}
                      >
                        Garden Seating
                      </Checkbox>
                      <Checkbox value='firstAidKit' {...register('outside.3')}>
                        First aid kit
                      </Checkbox>
                    </HStack>
                  </CheckboxGroup>
                  <Heading as='h4' size='sm' m={1}>
                    Child-related:{' '}
                  </Heading>
                  <CheckboxGroup colorScheme='teal'>
                    <HStack>
                      <Checkbox value='highchair' {...register('forChild.0')}>
                        Highchair
                      </Checkbox>
                      <Checkbox value='cot' {...register('forChild.1')}>
                        Cot
                      </Checkbox>
                      <Checkbox value='bathtub' {...register('forChild.2')}>
                        Bathtub
                      </Checkbox>
                    </HStack>
                  </CheckboxGroup>
                </VStack>

                <Heading as='h4' size='sm' m={1} mt='20px'>
                  Dates available:
                </Heading>
                <Input
                  type='text'
                  focusBorderColor='teal.600'
                  border='2px'
                  errorBorderColor='red.600'
                  placeholder='Dates'
                  {...register('dates')}
                  size='sm'
                  w='250px'
                  mt={1}
                />
                <Heading as='h4' size='sm' m={1} mt='20px'>
                  Upload photos of your home:
                </Heading>
                <Input
                  type='file'
                  mt='20px'
                  pt='5px'
                  colorScheme='teal'
                  id='fileItem'
                />
                {isLoading ? (
                  <Button mt={10} colorScheme='teal' type='submit' isLoading>
                    Submit listing
                  </Button>
                ) : (
                  <Button mt={10} colorScheme='teal' type='submit'>
                    Submit listing
                  </Button>
                )}
                <Button mt={5} colorScheme='teal' variant='outline'>
                  Cancel
                </Button>
              </Flex>
            </Stack>
          </FormControl>
        </form>
      </Center>
    </Fragment>
  )
}
export default SubmitListing
