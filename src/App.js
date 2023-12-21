import Typography from "@mui/material/Typography";
import { Navbar } from "./navbar";
import { Box, Container, CssBaseline, Stack, ThemeProvider, createTheme, useMediaQuery } from "@mui/material";
import NestedList from "./left";
import { Centre } from "./centre";
import { Right } from "./right";
import Footer from "./footer";
import StickyFooter from "./footer";
import { Store } from "./store";
import { Gamecontent } from "./page/gamecontent/Gamecontent";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import {Layout} from './layot.js';
import CardsRow from "./onsale";
import YourComponent from "./page/gamecontent/api.js";
import React from "react";
import SignIn from "./page/gamecontent/login/login.js";
import { Nav } from "react-bootstrap";


// function App(){
//   return (<>
  
//     <BrowserRouter>
//     <Routes>
//         <Route path="/" element={<Store />}>
//           <Route index element={<Store />} />
//             <Route path="gamecontent" element={<Gamecontent />} />

//         </Route>
//     </Routes>
//     </BrowserRouter>
//     </>);
// }


function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );
      const Root=()=>{
        return(
          <>
        <Navbar/>
        <Outlet/>
        </>
        )
        
      }


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
     
      children: [
        {
          path: "/",
          element: <Store/>,
        
        },
        {
          path:"/content",
          element:<Gamecontent/>
        }
      ],
    },
  ]);
  
  
  
  
  return (
    <>
     <ThemeProvider theme={theme}>
     <CssBaseline />
     <RouterProvider router={router} />
    {/* <Box > */}
      {/* <SignIn/> */}
      {/* <Store/> */}
      {/* <Gamecontent/> */}
      {/* <Layout />  */}
      {/* <YourComponent/> */}
      {/* </Box> */}
      </ThemeProvider>
      
    </>
  );
}

export default App;
