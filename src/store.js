import { Container, Stack, ThemeProvider, createTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import NestedList from "./left";
import { Centre } from "./centre";
import { Right } from "./right";
import StickyFooter from "./footer";
import { Navbar } from "./navbar";

export const Store = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  const [theme, setTheme] = useState("dark");
  const darkTheme = createTheme({
    palette: {
      mode: theme,
    },
  });
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        {/* <Navbar /> */}
        <Container maxWidth="xl">
          <Stack direction="row" spacing={1} justifyContent={"space-between"}>
            <NestedList />
            <Centre />
            <Right />
          </Stack>
          <StickyFooter />
        </Container>
      </ThemeProvider>
    </>
  );
};
