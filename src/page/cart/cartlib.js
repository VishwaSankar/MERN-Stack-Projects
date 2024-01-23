import { Alert, Box, CircularProgress } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { Centre1 } from "../gamecontent/maingc";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import {
  Button,
  Card,
  CardActions,
  CardMedia,
  Container,
  Grid,
  Rating,
  Stack,
  Tooltip,
  Typography,
  Zoom,
} from "@mui/material";
import React from "react";
const Cartlib = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const { isLoading, error, data } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      try {
        const response = await newRequest.get("/cart/usercart");
        return response.data; // Return the data from the response
      } catch (error) {
        throw new Error("Error fetching cart data"); // Handle errors appropriately
      }
    },
  });

  return (
    <div>
     {isLoading ? (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <CircularProgress />
  </div>
):error? <Alert severity="error">Kindly login to access these features!</Alert>:(
      <Box flex={8}>
        <Typography
          sx={{
            fontFamily: "monospace",
            fontSize: "35px",
            paddingTop: "20px",
            paddingBottom: "-20px",
          }}
        >
          Your Cart
        </Typography>

        <Container>
          <Grid container spacing={1.5} margin="30px">
            {data.map((cart) => (
              <Grid item xs={12} sm={2} md={4} lg={3} key={cart._id}>
                {/* <Link to={`/content`} state={{ from: 'topseller', name: item.title }} style={{ textDecoration: "none" }}> */}
                <Card
                  sx={{
                    width: "100%", // Adjusted width to 100%
                    cursor: "pointer",
                    height: "95%",
                    ":hover": { transform: "scale(1.04)" },
                    transition:
                      "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  }}
                >
                  <Box>
                    <Tooltip title="" TransitionComponent={Zoom}>
                      <CardMedia
                        component="img"
                        height="100%"
                        width="400px"
                        image={cart.img1}
                      />
                      <CardActions>
                        <Typography
                          sx={{
                            fontFamily: "monospace",

                            fontSize: "20px",
                            textAlign: "left",
                          }}
                        >
                          {cart.title}
                        </Typography>
                      </CardActions>
                      <CardActions>
                        <Typography sx={{ fontSize: "15px" }}>{cart.price}</Typography>
                        <Box display="flex" sx={{ paddingTop: "2px" }}>
                        </Box>
                      </CardActions>
                      <CardActions></CardActions>
                    </Tooltip>
                  </Box>
                </Card>
                {/* </Link> */}
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      )}
    </div>
  );
};

export default Cartlib;
