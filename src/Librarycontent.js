import { Box, Card, Typography } from '@mui/material'
import React from 'react'

const Librarycontent = () => {
  return (
   <>
   
   <Box flex={6} >
   <Typography sx={{fontFamily:"monospace", fontSize:"40px"}}>
            Your Library
    </Typography>
    <Box paddingTop="30px">
   <Typography sx={{fontSize:"20px"}} textAlign="left" >
    Games you have bought
   </Typography>
   <Card>
    
   </Card>
   </Box>
   </Box>
   
   
   </>
  )
}

export default Librarycontent