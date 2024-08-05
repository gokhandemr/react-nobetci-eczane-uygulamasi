// MUI
import {Box, Button} from "@mui/material";
// MUI Icons
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MapIcon from "@mui/icons-material/Map";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

export default function Pharmacy({pharmacy}) {
  return (
    <Box component={"article"} width={"100%"} m={1} p={2} bgcolor={"antiquewhite"}>
      <Box component={"p"} fontSize={14} mt={1} sx={{opacity: 0.8}}>{`${pharmacy.district} ${pharmacy.town !== null & pharmacy.town !== "" ? " / " + pharmacy.town : ""}`}</Box>
      <Box component={"h2"} mb={3} mt={2}>
        {pharmacy.pharmacyName}
      </Box>
      <Box component={"p"} fontSize={14} mb={2} display={"flex"} alignItems={"center"}>
        <MapIcon sx={{mr: 1, opacity: 0.6, fontSize: 19}} /> Adres: {pharmacy.address}
      </Box>
      <Box component={"div"} mb={1} display={"flex"} justifyContent={"space-between"} alignItems={"center"} width={"100%"}>
        <Box component={"p"} fontSize={14} display={"flex"} alignItems={"center"}>
          <LocalPhoneIcon sx={{mr: 1, opacity: 0.6, fontSize: 19}} /> Telefon: {pharmacy.phone}
        </Box>

        <Box component={"a"} fontSize={14} href={`https://www.google.com/maps/place/${pharmacy.latitude}+${pharmacy.longitude}/`} target="_blank" display={"flex"} alignItems={"center"} sx={{color: "#d32f2f"}}>
          <Button variant="contained" color="error" startIcon={<LocationOnIcon sx={{opacity: 0.6}} />}>
            Konuma Git
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
