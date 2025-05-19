import React from "react";
import { Box, Typography } from "@mui/material";
import generic from "../../assets/images/generic.png";
import client from "../../assets/images/client.png";

const ModuleCards = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 6,
        px: { xs: 2, sm: 4 },
        py: 4,
      }}
    >
      {/* Generic Module */}
      <Box
        sx={{
          flex: 1,
          position: "relative",
          height: { xs: 300, sm: 400, md: 700 },
          backgroundImage: `url(${generic})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            backgroundColor: "rgba(255, 74, 74, 0.95)",
            color: "#fff",
            p: 3,
          }}
        >
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Generic Module
          </Typography>
          <Typography variant="body2">
            Explore global audience data in easy-to-understand visuals. Gain
            insights to measure, understand, and explore trends.
          </Typography>
        </Box>
      </Box>

      {/* Client Module */}
      <Box
        sx={{
          flex: 1,
          position: "relative",
          height: { xs: 300, sm: 400, md: 700 },
          backgroundImage: `url(${client})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            color: "#000",
            p: 3,
          }}
        >
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Client Module
          </Typography>
          <Typography variant="body2">
            Explore global audience data in easy-to-understand visuals. Gain
            insights to measure, understand, and explore trends.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ModuleCards;
