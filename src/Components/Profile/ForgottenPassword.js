import React, { Fragment, useState } from 'react'
import {
  Flex,
  Input,
  Button,
  FormControl,
  FormLabel,
  Center,
  Text,
  Box
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../Store/authContext'
import { Link } from 'react-router-dom'

const ForgottenPassword = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { resetPassword } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const submitHandler = async data => {
    try {
      setIsLoading(true)
      await resetPassword(data.email)
      console.log('done')
    } catch {
      new Error('Failed to reset password')
    }
    setIsLoading(false)
  }

  return (
    <Fragment>
      <Center h='500px'>
        <Flex
          direction='column'
          margin={3}
          border='2px'
          borderColor='teal.600'
          borderRadius='md'
          p={12}
          w='400px'
        >
          <Text
            as='h1'
            fontSize='20px'
            fontWeight='700'
            textAlign='center'
            mb='15px'
          >
            Reset Password
          </Text>
          <form onSubmit={handleSubmit(submitHandler)}>
            <FormControl id='email'>
              <FormLabel>Email address</FormLabel>
              <Input
                type='email'
                isRequired
                focusBorderColor='teal.600'
                border='2px'
                errorBorderColor='red.600'
                placeholder='Email address'
                {...register('email', {
                  required: true
                })}
                size='sm'
                w='300px'
              />
              {errors.email && <p>This field is required</p>}
            </FormControl>
            <Flex justifyContent='center'>
              {!isLoading ? (
                <Button m={4} colorScheme='teal' type='submit'>
                  Reset
                </Button>
              ) : (
                <Button m={4} colorScheme='teal'>
                  Loading...
                </Button>
              )}
            </Flex>
          </form>
          <Box d='flex' justifyContent='center' w='100%'>
            <Text textDecoration='underline' as='h5'>
              <Link to='/authentication'>Login or Sign up</Link>
            </Text>
          </Box>
        </Flex>
      </Center>
    </Fragment>
  )
}
export default ForgottenPassword
