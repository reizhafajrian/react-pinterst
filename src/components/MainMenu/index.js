import { Grid } from '@chakra-ui/react'
import React from 'react'
import { Card, Header } from '..'

export default function index() {
  return (
    <>
      <Header />
      <Grid templateColumns='repeat(7, 1fr)' gap={2}
        paddingX={20}
      >
        <Card />
        <Card imageUrl="https://i.pinimg.com/236x/0e/75/e8/0e75e832aefe1f72b17f5059e9c17fea.jpg" />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Grid>


    </>
  )
}
