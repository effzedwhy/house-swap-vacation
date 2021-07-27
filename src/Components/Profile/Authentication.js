import React, { useState } from 'react'
import {
  Flex,
  Input,
  Button,
  FormControl,
  FormLabel,
  Center,
  Text
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

const Authentication = () => {
  const [isLogin, setIsLogin] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const switchAuthModeHandler = () => {
    setIsLogin(prevState => !prevState)
  }

  const submitHandler = data => {
    console.log(data.email)

    if (isLogin) {
    } else {
      fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAYKvfQOUrWlshaSnLOXbpBK5Ei0gh9ZfE',
        {
          method: 'POST',
          body: JSON.stringify({
            email: data.email,
            password: data.password,
            returnSecureToken: true
          }),

          headers: {
            'Content-Type': 'application/json'
          }
        }
      ).then(res => {
        if (res.ok) {
          //do something
          console.log('okay!')
        } else {
          res.json().then(data => {
            // error modal
            console.log(data)
          })
        }
      })
    }
  }

  return (
    <Center h='500px'>
      <Flex
        direction='column'
        margin={3}
        border='2px'
        borderColor='teal.600'
        borderRadius='md'
        p={12}
      >
        <Text as='h1'>{isLogin ? 'Login' : 'Sign Up'}</Text>
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
              w='250px'
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
              w='250px'
            />
            {errors.password && (
              <p>Password should be at least 6 characters.</p>
            )}
          </FormControl>
          <Flex mt='10px' justifyContent='center'>
            <Button m={3} colorScheme='teal' type='submit'>
              {isLogin ? 'Login' : 'Create an account'}
            </Button>

            <Button
              m={3}
              colorScheme='teal'
              variant='outline'
              onClick={switchAuthModeHandler}
            >
              {isLogin ? 'Create new account' : 'Login'}
            </Button>
          </Flex>
        </form>
      </Flex>
    </Center>
  )
}

export default Authentication
