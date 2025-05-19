import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import bg from "../../assets/images/bg.png"
const LoginForm = () => {
  return (
    <>
      <Box
      sx={{
        width: '100vw',
        height: '100vh', 
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
      }}></Box>
    </>
  );
};

export default LoginForm;
