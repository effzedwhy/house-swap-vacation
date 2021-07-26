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
import { Link } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const emailHandleChange = event => setEmail(event.target.value)
  const passwordHandleChange = event => setPassword(event.target.value)

  return (
    <Center w='100%' h='500px'>
      <Flex
        direction='column'
        margin={3}
        border='2px'
        borderColor='teal.600'
        borderRadius='md'
        p={12}
      >
        <Text as='h2' mb='20px'>
          Login
        </Text>
        <form>
          <FormControl id='email'>
            <FormLabel>Email address</FormLabel>
            <Input
              type='email'
              isRequired
              focusBorderColor='teal.600'
              border='2px'
              errorBorderColor='red.600'
              value={email}
              placeholder='Email address'
              onChange={emailHandleChange}
              size='sm'
              w='250px'
            />
          </FormControl>
          <FormControl id='password'>
            <FormLabel mt={4}>Password</FormLabel>
            <Input
              type='password'
              isRequired
              focusBorderColor='teal.600'
              border='2px'
              errorBorderColor='red.600'
              value={password}
              placeholder='Password'
              onChange={passwordHandleChange}
              size='sm'
              w='250px'
            />
          </FormControl>
          <Flex mt='10px' justifyContent='center'>
            <Button m={3} colorScheme='teal'>
              Login
            </Button>
            <Link to="/sign-up"><Button m={3} colorScheme='teal' variant='outline'>
              Sign Up
            </Button> </Link>
          </Flex>
        </form>
      </Flex>
    </Center>
  )
}

export default Login
