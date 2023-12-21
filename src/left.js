import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import React from "react";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import { Box, Divider } from "@mui/material";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import SellIcon from "@mui/icons-material/Sell";
import GamepadIcon from "@mui/icons-material/Gamepad";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShopIcon from "@mui/icons-material/Shop";
export default function NestedList() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box flex={2}>
      <List
        sx={{
          width: "100%",
          maxWidth: 250,
          minWidth: 150,
          paddingTop: "30px",
          position: "fixed",
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton>
          <ListItemIcon>
            <ShopIcon />
          </ListItemIcon>
          <ListItemText primary="Store" />
        </ListItemButton>

        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <VideogameAssetIcon />
          </ListItemIcon>
          <ListItemText primary="Genre" />

          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 3 }}>
              <ListItemIcon>
                <ArrowForwardIosIcon />
              </ListItemIcon>
              <ListItemText primary="Action" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 3 }}>
              <ListItemIcon>
                <ArrowForwardIosIcon />
              </ListItemIcon>
              <ListItemText primary="Story-rich" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 3 }}>
              <ListItemIcon>
                <ArrowForwardIosIcon />
              </ListItemIcon>
              <ListItemText primary="FPS" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 3 }}>
              <ListItemIcon>
                <ArrowForwardIosIcon />
              </ListItemIcon>
              <ListItemText primary="Fighting" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 3 }}>
              <ListItemIcon>
                <ArrowForwardIosIcon />
              </ListItemIcon>
              <ListItemText primary="Horror Games" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 3 }}>
              <ListItemIcon>
                <ArrowForwardIosIcon />
              </ListItemIcon>
              <ListItemText primary="Casual Games" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton>
          <ListItemIcon>
            <NewspaperIcon />
          </ListItemIcon>
          <ListItemText primary="News" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <SellIcon />
          </ListItemIcon>
          <ListItemText primary="Sell" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <GamepadIcon />
          </ListItemIcon>
          <ListItemText primary="Consoles" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Your Cart" />
        </ListItemButton>
      </List>
    </Box>
  );
}
