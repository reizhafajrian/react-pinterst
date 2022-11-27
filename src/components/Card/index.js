import { HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Avatar from 'react-avatar'

export default function index(props) {
  const { imageUrl = "https://i.pinimg.com/236x/ef/84/0a/ef840abcfd2fe9d7ec682b643c52f75a.jpg",userName='Foo Bar' } = props

  return (
    <VStack
      alignSelf={"flex-start"}
      maxW={250}
      alignItems={"flex-start"}
    >
      <Image src={imageUrl} borderRadius={15} />
      <HStack>
        <Avatar style={{
          marginLeft: 10,
        }} name={userName} size={30}
          round={true}
        />
        <Text>{userName}</Text>
      </HStack>
    </VStack>
  )
}
