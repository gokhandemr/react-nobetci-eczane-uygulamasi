import React, {useState} from "react";
// MUI
import {Box, Button} from "@mui/material";
// MUI Icons
import MedicationIcon from "@mui/icons-material/Medication";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function Header() {
  const [darkTheme, setDarkTheme] = useState(false);
  const body = document.querySelector("body");
  if (darkTheme) {
    body.className = "dark-theme";
  } else {
    body.className = "";
  }

  return (
    <Box component="header" display={"flex"} alignItems={"center"} justifyContent={"space-between"} mb={5}>
      <Box variant="h1" component="h1" sx={{display: "flex", alignItems: "center"}}>
        <MedicationIcon sx={{mr: 1}} /> Nöbetçi Eczane Bul
      </Box>
      <Button variant="text" onClick={() => setDarkTheme(!darkTheme)} sx={{color: "black"}}>
        {darkTheme ? <NightsStayIcon /> : <LightModeIcon />}
      </Button>
    </Box>
  );
}
