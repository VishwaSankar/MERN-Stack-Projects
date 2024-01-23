import { Alert, Box, CircularProgress, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import NestedList from './left'
import { Right } from './right'
import { useQuery } from '@tanstack/react-query'
import newRequest from './utils/newRequest'

export const Favourites = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const { isLoading, error, data } = useQuery({
    queryKey: ["fav"],
    queryFn: async () => {
      try {
        // Check if the user is authenticated
        if (!currentUser || !currentUser.token) {
          throw new Error("User not authenticated");
        }

        // Your library data fetching logic
        const response = await newRequest.get("/fav");
        return response.data;
      } catch (error) {
        throw new Error("Error fetching library data");
      }
    },
  });
  return (
    <>
    <Container maxWidth="xl">
        <Stack direction="row" spacing={1} justifyContent={"space-between"}>
          <NestedList />
    <Box flex={6}>
        <Typography sx={{ fontFamily: "monospace", fontSize: "40px" }}>
          Your Favourites
        </Typography>
        <Box paddingTop="30px">
          {error && <Alert severity="error">Kindly login to access these features!</Alert>}
          {isLoading && (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
              <CircularProgress />
            </div>
          )}
          {data && (
            <>
              <Typography sx={{ fontSize: "20px" }} textAlign="left">
                
              </Typography>
            
            </>
          )}
        </Box>
      </Box>
      <Right />
        </Stack>
      </Container>
    </>
  )
}

