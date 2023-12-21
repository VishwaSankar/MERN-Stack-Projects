import React, { useState } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Grid, Stack, Tooltip, Zoom } from "@mui/material";
import { styled } from "@mui/material";
import Rating from "@mui/material/Rating";
import axios from "axios";
import { gamesdata1 } from "./page/gamecontent/Datagames";
import { Link, Route } from "react-router-dom";
const StyledCard = styled(Card)({
  width: "100%",
  maxWidth: 230,
  maxHeight: 360,
  minHeight: 350,
  paddingBottom: "10px",
  ":hover": { transform: "scale(1.05)" },
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
});

const StyledCard2 = styled(Card)({
  maxWidth: 230,
  maxHeight: 360,
  minHeight: 350,
  paddingTop: "10px",
  ":hover": { transform: "scale(1.05)" },
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
});

let randata1;
let randata2;
let randata3;
let randata4;
let randata5;
let randata6;
let randata7;
let randata8;

let randomIndices = [];

function getRandomIndex() {
  let max = gamesdata1.length - 1;
  let min = 0;
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function random() {
  const getRandomUniqueIndex = () => {
    let index;
    do {
      index = getRandomIndex();
    } while (randomIndices.includes(index));
    randomIndices.push(index);
    return index;
  };

  randata1 = gamesdata1[getRandomUniqueIndex()];
  randata2 = gamesdata1[getRandomUniqueIndex()];
  randata3 = gamesdata1[getRandomUniqueIndex()];
  randata4 = gamesdata1[getRandomUniqueIndex()];
  randata5 = gamesdata1[getRandomUniqueIndex()];
  randata6 = gamesdata1[getRandomUniqueIndex()];
  randata7 = gamesdata1[getRandomUniqueIndex()];
  randata8 = gamesdata1[getRandomUniqueIndex()];
}

random();
// console.log(randata1.title);
export default function Topseller() {
  //   const [url,setUrl]=useState('');
  //   axios.get('https://api.rawg.io/api/games?key=4854226f26e94205bfe48b460e82e39a', {
  // }).then((res)=>{console.log(res.data.results[0]);
  // setUrl(res.data.results[0].background_image)
  // })

  return (
    <>
   
      <Typography
        sx={{
          fontFamily: "monospace",
          fontSize: "40px",
          paddingTop: "20px",
        }}
      >
        Topsellers
      </Typography>
      <Grid display="flex" gap="29px" paddingTop="15px" >
        
        <Link to={`/content`} state={{from:'topseller', name:randata1.title}} style={{textDecoration:"none"}}>
        <Card
          sx={{
            maxWidth: "300px",
            minWidth: "300px",
            maxHeight: "310px",
            cursor: "pointer",
            ":hover": { transform: "scale(1.04)" },
            transition:
              "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
          }}
        >
          <Tooltip title={randata1.name} TransitionComponent={Zoom}>
            <CardMedia
              component="img"
              height="150px"
              width="100%"
              // minWidth="100%"
              image={randata1.img1}
            />
            <CardActions>
              <Typography
                sx={{
                  fontFamily: "monospace",
                  width: "100%",
                  fontSize: "20px",
                  textAlign: "left",
                  
                }}
              >
                {randata1.name}
              </Typography>
            </CardActions>

            <CardActions>
              <Box display="flex" gap="20px">
                <Typography sx={{ fontSize: "15px" }}>
                  Rs. {randata1.price}
                </Typography>
                <Box display="flex" sx={{ paddingTop: "2px" }}>
                  <Rating
                    size="small"
                    defaultValue={randata1.Rating}
                    readOnly
                  />
                  <Typography sx={{ fontSize: "15px" }}>
                    ({randata1.Rating})
                  </Typography>
                </Box>
              </Box>
            </CardActions>
            <CardActions>
              <Box display="flex" gap="70px">
                <Button
                  variant="outlined"
                  sx={{ borderRadius: "40px" }}
                  color="error"
                  size="small"
                >
                  Buy Now
                </Button>
              </Box>
            </CardActions>
          </Tooltip>
        </Card>
        </Link>
       
        <Link to={`/content`} state={{from:'topseller', name:randata2.title}} style={{textDecoration:"none"}}>
        <Card
          sx={{
            maxWidth: "300px",
            minWidth: "300px",
            maxHeight: "310px",
            cursor: "pointer",
            ":hover": { transform: "scale(1.04)" },
            transition:
              "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
          }}
        >
          <Tooltip title={randata2.name} TransitionComponent={Zoom}>
            <CardMedia
              component="img"
              height="150px"
              width="100%"
              // minWidth="100%"
              image={randata2.img1}
            />
            <CardActions>
              <Typography
                sx={{
                  fontFamily: "monospace",
                  width: "100%",
                  fontSize: "20px",
                  textAlign: "left",
                }}
              >
                {randata2.name}
              </Typography>
            </CardActions>

            <CardActions>
              <Box display="flex" gap="20px">
                <Typography sx={{ fontSize: "15px" }}>
                  Rs. {randata2.price}
                </Typography>
                <Box display="flex" sx={{ paddingTop: "2px" }}>
                  <Rating
                    size="small"
                    defaultValue={randata2.Rating}
                    readOnly
                  />
                  <Typography sx={{ fontSize: "15px" }}>
                    ({randata2.Rating})
                  </Typography>
                </Box>
              </Box>
            </CardActions>
            <CardActions>
              <Box display="flex" gap="70px">
                <Button
                  variant="outlined"
                  sx={{ borderRadius: "40px" }}
                  color="error"
                  size="small"
                >
                  Buy Now
                </Button>
              </Box>
            </CardActions>
          </Tooltip>
        </Card>
        </Link>

        <Link to={`/content`} state={{from:'topseller', name:randata3.title}} style={{textDecoration:"none"}}>
        <Card
          sx={{
            maxWidth: "300px",
            minWidth: "300px",
            maxHeight: "310px",
            cursor: "pointer",
            ":hover": { transform: "scale(1.04)" },
            transition:
              "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
          }}
        >
          <Tooltip title={randata3.name} TransitionComponent={Zoom}>
            <CardMedia
              component="img"
              height="150px"
              width="100%"
              // minWidth="100%"
              image={randata3.img1}
            />
            <CardActions>
              <Typography
                sx={{
                  fontFamily: "monospace",
                  width: "100%",
                  fontSize: "20px",
                  textAlign: "left",
                }}
              >
                {randata3.name}
              </Typography>
            </CardActions>

            <CardActions>
              <Box display="flex" gap="20px">
                <Typography sx={{ fontSize: "15px" }}>
                  Rs. {randata3.price}
                </Typography>
                <Box display="flex" sx={{ paddingTop: "2px" }}>
                  <Rating
                    size="small"
                    defaultValue={randata3.Rating}
                    readOnly
                  />
                  <Typography sx={{ fontSize: "15px" }}>
                    ({randata3.Rating})
                  </Typography>
                </Box>
              </Box>
            </CardActions>
            <CardActions>
              <Box display="flex" gap="70px">
                <Button
                  variant="outlined"
                  sx={{ borderRadius: "40px" }}
                  color="error"
                  size="small"
                >
                  Buy Now
                </Button>
              </Box>
            </CardActions>
          </Tooltip>
        </Card>
        </Link>
      </Grid>



     
     
     <Grid display="flex" gap="29px" paddingTop="15px">
     <Link to={`/content`} state={{from:'topseller', name:randata4.title}} style={{textDecoration:"none"}}>
        <Card
          sx={{
            maxWidth: "300px",
            minWidth: "300px",
            maxHeight: "310px",
            cursor: "pointer",
            ":hover": { transform: "scale(1.04)" },
            transition:
              "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
          }}
        >
          <Tooltip title={randata4.name} TransitionComponent={Zoom}>
            <CardMedia
              component="img"
              height="150px"
              width="100%"
              // minWidth="100%"
              image={randata4.img1}
            />
            <CardActions>
              <Typography
                sx={{
                  fontFamily: "monospace",
                  width: "100%",
                  fontSize: "20px",
                  textAlign: "left",
                }}
              >
                {randata4.name}
              </Typography>
            </CardActions>

            <CardActions>
              <Box display="flex" gap="20px">
                <Typography sx={{ fontSize: "15px" }}>
                  Rs. {randata4.price}
                </Typography>
                <Box display="flex" sx={{ paddingTop: "2px" }}>
                  <Rating
                    size="small"
                    defaultValue={randata4.Rating}
                    readOnly
                  />
                  <Typography sx={{ fontSize: "15px" }}>
                    ({randata4.Rating})
                  </Typography>
                </Box>
              </Box>
            </CardActions>
            <CardActions>
              <Box display="flex" gap="70px">
                <Button
                  variant="outlined"
                  sx={{ borderRadius: "40px" }}
                  color="error"
                  size="small"
                >
                  Buy Now
                </Button>
              </Box>
            </CardActions>
          </Tooltip>
        </Card>
        </Link>
        <Link to={`/content`} state={{from:'topseller', name:randata5.title}} style={{textDecoration:"none"}}>
        <Card
          sx={{
            maxWidth: "300px",
            minWidth: "300px",
            maxHeight: "310px",
            cursor: "pointer",
            ":hover": { transform: "scale(1.04)" },
            transition:
              "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
          }}
        >
          <Tooltip title={randata5.name} TransitionComponent={Zoom}>
            <CardMedia
              component="img"
              height="150px"
              width="100%"
              // minWidth="100%"
              image={randata5.img1}
            />
            <CardActions>
              <Typography
                sx={{
                  fontFamily: "monospace",
                  width: "100%",
                  fontSize: "20px",
                  textAlign: "left",
                }}
              >
                {randata5.name}
              </Typography>
            </CardActions>

            <CardActions>
              <Box display="flex" gap="20px">
                <Typography sx={{ fontSize: "15px" }}>
                  Rs. {randata5.price}
                </Typography>
                <Box display="flex" sx={{ paddingTop: "2px" }}>
                  <Rating
                    size="small"
                    defaultValue={randata5.Rating}
                    readOnly
                  />
                  <Typography sx={{ fontSize: "15px" }}>
                    ({randata5.Rating})
                  </Typography>
                </Box>
              </Box>
            </CardActions>
            <CardActions>
              <Box display="flex" gap="70px">
                <Button
                  variant="outlined"
                  sx={{ borderRadius: "40px" }}
                  color="error"
                  size="small"
                >
                  Buy Now
                </Button>
              </Box>
            </CardActions>
          </Tooltip>
        </Card>
        </Link>
        
        <Link to={`/content`} state={{from:'topseller', name:randata6.title}} style={{textDecoration:"none"}}>

        <Card
          sx={{
            maxWidth: "300px",
            minWidth: "300px",
            maxHeight: "310px",
            cursor: "pointer",
            ":hover": { transform: "scale(1.04)" },
            transition:
              "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
          }}
        >
          <Tooltip title={randata6.name} TransitionComponent={Zoom}>
            <CardMedia
              component="img"
              height="150px"
              width="100%"
              // minWidth="100%"
              image={randata6.img1}
            />
            <CardActions>
              <Typography
                sx={{
                  fontFamily: "monospace",
                  width: "100%",
                  fontSize: "20px",
                  textAlign: "left",
                }}
              >
                {randata6.name}
              </Typography>
            </CardActions>

            <CardActions>
              <Box display="flex" gap="20px">
                <Typography sx={{ fontSize: "15px" }}>
                  Rs. {randata6.price}
                </Typography>
                <Box display="flex" sx={{ paddingTop: "2px" }}>
                  <Rating
                    size="small"
                    defaultValue={randata6.Rating}
                    readOnly
                  />
                  <Typography sx={{ fontSize: "15px" }}>
                    ({randata6.Rating})
                  </Typography>
                </Box>
              </Box>
            </CardActions>
            <CardActions>
              <Box display="flex" gap="70px">
                <Button
                  variant="outlined"
                  sx={{ borderRadius: "40px" }}
                  color="error"
                  size="small"
                >
                  Buy Now
                </Button>
              </Box>
            </CardActions>
          </Tooltip>
        </Card>
        </Link>
      </Grid>
    </>
  );
}
