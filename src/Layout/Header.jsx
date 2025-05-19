import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Menu,
  MenuItem,
  Button,
  Avatar,
} from "@mui/material";

import user from "../assets/images/user.png";
import logo from "../assets/images/logo.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


const Header = () => {
  const [userAnchor, setUserAnchor] = React.useState(null);

  const handleUserMenuOpen = (event) => setUserAnchor(event.currentTarget);
  const handleMenuClose = () => {
    setUserAnchor(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#000", px: 2 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "" }}>
        
        <Box display="flex" alignItems="center">
          <img src={logo} alt="Logo" style={{ height: 40 }} />
        </Box>

        <Box display="flex" alignItems="center" ml="auto">
          <Button
            onClick={handleUserMenuOpen}
            endIcon={<KeyboardArrowDownIcon />}
            sx={{ ml: 0, textTransform: "none", color: "#fff" }}
          >
            <Avatar alt="User" src={user} sx={{ width: 50, height: 50 }} />
          </Button>
          <Menu
            anchorEl={userAnchor}
            open={Boolean(userAnchor)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
