import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import bg from "../../assets/images/bg.png";
import logo from "../../assets/images/logo.png";

const LoginForm = () => {
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "fixed",
          top: 0,
          left: 0,
          margin: 0,
          padding: 0,
          overflow: "hidden",
        }}
      />
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src={logo}
          alt="logo"
          sx={{ width: 50 , height: 50, mb: 2 }}
        />
        <Box
          component="p"
          sx={{
            fontSize: "68px",
            fontWeight: "semibold",
            color: "#F8F7F4",
            margin: 0,
          }}
        >
          Growth Data Platform
        </Box>
        <Box
          component="p"
          sx={{
            textAlign: "center",
            fontSize: "20px",
            margin: "8px 0 24px 0",
            letterSpacing: "2px",
            lineHeight: "40px",
            fontWeight: "400",
            fontFamily: "inherit" 
          }}
        >
          Discover insights. Define audience.
          <br /> All with the right question
        </Box>
        <Button variant="contained" sx={{ backgroundColor: "#FF4B4F",fontSize:"18px", marginTop: "20px",color: "#fff",height:"60px",width:"470px" }}>
          Login
        </Button>
      </Box>
    </>
  );
};

export default LoginForm;
