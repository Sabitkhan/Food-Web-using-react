import { FastfoodRounded } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/NavbarStyle.css";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  //menu Click
  const handleDrwaerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  //menu Drawer
  const drawer = (
    <Box sx={{ textAlign: "center" }} onClick={handleDrwaerToggle}>
      <Typography
        component={"div"}
        marginLeft={1}
        sx={{ flexGrow: 1 }}
        variant="h6"
        color={"goldenrod"}
      >
        Best selling Food in pakistan
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/menu"}>Menu</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              aria-label="open drawer"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handleDrwaerToggle}
            >
              <MenuIcon />
            </IconButton>
            <FastfoodRounded />
            <Typography
              component={"div"}
              marginLeft={1}
              sx={{ flexGrow: 1 }}
              variant="h6"
              color={"goldenrod"}
            >
              Best selling Food in pakistan
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/menu"}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component={"nav"}>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrwaerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: "200px" },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
