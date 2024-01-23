
import { Box, Container, Stack } from '@mui/material'
import React from 'react'
import NestedList from '../../left'
import { Right } from '../../right'
import { Centre } from '../../centre'
import Cartlib from './cartlib'


const Cart = () => {
  return (
    <>
      
      <Container maxWidth="xl">
          <Stack direction="row" spacing={1} justifyContent={"space-between"}>
            <NestedList />
            <Cartlib/>
            <Right />
          </Stack>
          
        </Container>
  </>
  )
}

export default Cart