import {
  GitHub,
  Instagram,
  Twitter,
  WhatsApp,
  YouTube,
} from "@mui/icons-material";
import { Box, Typography, responsiveFontSizes } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#1A1A19", textAlign: "center", color: "white" }} p={2}>
      <Box
        marginY={3}
        sx={{
          "& svg": {
            fontSize: "60px",
            cursor: "pointer",
            mr: 2,
          },
          "& svg:hover": {
            color: "goldenrod",
            transform: "translateX(5px)",
            transition: "all 400ms ",
          },
        }}
      >
        {/* icons */}
        <Instagram />
        <Twitter />
        <GitHub />
        <WhatsApp />
        <YouTube />
      </Box>
      <Typography
        variant="h5"
        sx={{
          "@media (max-width:600px)": {
            fontSize: "1rem",
          },
        }}
      >
        All Rights Reserved &copy; Sabit Khan
      </Typography>
    </Box>
  );
};

export default Footer;
