import React from "react";
import { Box } from "@mui/material";
import { LoaderSpinner } from "@assets";
import { style } from "src/common/AppSpinner/style";
import "src/common/AppSpinner/appSpinnerStyle.css";
export const AppSpinner = () => (
  <Box sx={style.loaderBox}>
    <Box>
      <LoaderSpinner />
    </Box>
  </Box>
);
