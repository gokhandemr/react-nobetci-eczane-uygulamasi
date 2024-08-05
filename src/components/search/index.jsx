import React, {useEffect, useState} from "react";
// Service
import {getCities, getPharmacy} from "../../services";
// MUI
import {Box, Button, FormControl, InputLabel, MenuItem, Select} from "@mui/material";

export default function Search({setPharmacies, setLoading}) {
  const [city, setCity] = useState([]);
  const [value, setValue] = useState("");
  const [district, setDistrict] = useState("");
  const [districtValue, setDistrictValue] = useState("");

  useEffect(() => {
    (async () => {
      const response = await getCities();
      setCity(response);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const response = await getCities(value);
      setDistrict(response);
    })();
  }, [value]);

  const searchPharmacies = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (value !== "" && districtValue !== "") {
      const response = await getPharmacy(value, districtValue);
      setPharmacies(response);
      setLoading(false);
    } else {
      setLoading(false);
      alert("Lütfen 'İL' ve 'İLÇE' alanlarını boş bırakmayınız.");
    }
  };

  const handleChangeCities = (event) => {
    setValue(event.target.value);
  };
  const handleChangeDistrict = (event) => {
    setDistrictValue(event.target.value);
  };

  return (
    <Box component="form" onSubmit={(e) => searchPharmacies(e)} width={"100%"} position={"relative"} mb={5} display={"flex"} justifyContent={"space-between"} bgcolor={"white"} p={2} borderRadius={1} flexWrap={"wrap"}>
      <FormControl sx={{width: "50%"}}>
        <InputLabel id="cities-label">İL</InputLabel>
        <Select labelId="cities-label" value={value} onChange={handleChangeCities} label="IL" sx={{width: "100%"}}>
          {city &&
            city.map((item, index) => (
              <MenuItem key={index} value={item.slug}>
                {item.cities}
              </MenuItem>
            ))}
        </Select>
      </FormControl>

      <FormControl sx={{width: "29%"}}>
        <InputLabel id="district-label">İLÇE</InputLabel>
        <Select labelId="district-label" value={districtValue} onChange={handleChangeDistrict} label="ILCE" sx={{width: "90%"}}>
          {district &&
            district.map((item, index) => (
              <MenuItem key={index} value={item.slug}>
                {item.cities}
              </MenuItem>
            ))}
        </Select>
      </FormControl>

      <Button type="submit" variant="contained" color="error" sx={{width: "19%"}}>
        Ara
      </Button>
    </Box>
  );
}
