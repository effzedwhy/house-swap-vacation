import React, { useState } from 'react'
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
import { Link, useHistory } from 'react-router-dom'

const Authentication = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const { signup, login } = useAuth()
  const history = useHistory()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const switchAuthModeHandler = () => {
    setIsLogin(prevState => !prevState)
  }

  const submitHandler = async data => {
    if (!isLogin) {
      try {
        setIsLoading(true)
        await signup(data.email, data.password)
        history.push('/')
      } catch {
        new Error('Something went wrong')
      }
      setIsLoading(false)
    } else {
      try {
        setIsLoading(true)
        await login(data.email, data.password)
        history.push('/my-account')
      } catch {
        new Error('Something went wrong')
      }
      setIsLoading(false)
    }
  }
  console.log()

  return (
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
          mb='10px'
        >
          {isLogin ? 'Login' : 'Sign Up'}
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
          <FormControl id='password'>
            <FormLabel mt={4}>Password</FormLabel>
            <Input
              type='password'
              isRequired
              focusBorderColor='teal.600'
              border='2px'
              errorBorderColor='red.600'
              placeholder='Password'
              {...register('password', {
                required: true,
                pattern: /[A-Za-z]{3}/g,
                min: 6
              })}
              size='sm'
              w='300px'
            />
            {errors.password && (
              <p>Password should be at least 6 characters.</p>
            )}
          </FormControl>
          <Flex mt='10px' justifyContent='flex-start'>
            {isLoading ? (
              <Button m={3} colorScheme='teal' type='submit' isLoading></Button>
            ) : (
              <Button m={3} colorScheme='teal' type='submit'>
                {isLogin ? 'Login' : 'Create an account'}
              </Button>
            )}

            <Button
              m={3}
              colorScheme='teal'
              variant='outline'
              onClick={switchAuthModeHandler}
            >
              {isLogin ? 'Create new account' : 'Login'}
            </Button>
          </Flex>
          {isLogin && (
            <Box d='flex' justifyContent='center' w='100%'>
              <Text textDecoration='underline' as='h5'>
                <Link to='/forgotten-password'>Forgotten Password?</Link>
              </Text>
            </Box>
          )}
        </form>
      </Flex>
    </Center>
  )
}

export default Authentication
