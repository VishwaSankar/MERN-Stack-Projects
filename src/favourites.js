import { Container, Stack, Typography } from '@mui/material'
import React from 'react'
import NestedList from './left'
import { Right } from './right'

export const Favourites = () => {
  return (
    <>
 <Container maxWidth="xl">
        <Stack direction="row" spacing={1} justifyContent={"space-between"}>
          <NestedList />
          <Typography sx={{fontFamily:"monospace", fontSize:"40px"}}>
            Your Favourites list
          </Typography>
          <Right />
        </Stack>
      </Container>
    </>
  )
}

