import {  Button,  Card, CardBody, CardHeader, Flex, FormLabel, Heading, Input,  Stack,  VStack } from '@chakra-ui/react'
import React from 'react'

export default function index() {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
    >
      <Card
        width={"500px"}
        padding={20}
      >
        <CardHeader >
          <Heading textAlign={"center"} size='md'>Welcome</Heading>
        </CardHeader>

        <CardBody>
          <Stack>
            <FormLabel
              marginBottom={0}>Email</FormLabel>
            <Input
              borderRadius={15}
              pr='4.5rem'
              type={"email"}
              placeholder='email' />
          </Stack>
          <Stack
            marginTop={2}>
            <FormLabel
              marginBottom={0}
            >Password</FormLabel>
            <Input
              borderRadius={15}
              marginTop={0}
              pr='4.5rem'
              type={"password"}
              placeholder='password'
            />
          </Stack>
          <VStack marginTop={4} width={"100%"} alignSelf={"center"} >
            <Button width={"100%"}
              borderRadius={15}
              marginY={4} colorScheme='red'>Log In</Button>
            <Button width={"100%"}
              borderRadius={15}
              marginY={4} colorScheme='blackAlpha'>Continue with google</Button>
          </VStack>
        </CardBody>
      </Card>
    </Flex >

  )
}
