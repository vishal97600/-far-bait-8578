import { Box, Heading, Input, ModalBody, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const LoginForm = () => {
  return (
    
  <>
     <Stack spacing={3} width='30%' >
      <Text fontSize='3xl'>Come on in</Text>
      <Text>Email address</Text>
      <Input size="lg" borderRadius='10px'/>
      <Text>Password</Text>
      <Input  size="lg" borderRadius='10px'/>
     
    </Stack>
  </>
  )
}

export default LoginForm