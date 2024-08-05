import {useState} from "react";
// Components
import Search from "./components/search";
import Pharmacy from "./components/pharmacy";
// MUI
import {Box, CircularProgress} from "@mui/material";

function App() {
  const [pharmacies, setPharmacies] = useState();
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Search setPharmacies={setPharmacies} setLoading={setLoading} />

      <Box component="main" mb={60} p={1} bgcolor={"white"}>
        <Box component={"div"} display="flex" alignItems={"center"} justifyContent={"space-between"} flexWrap="wrap">
          {pharmacies === undefined && (
            <Box component="p" p={2} fontWeight={300} textAlign={"center"} width={"100%"}>
              Nöbetçi eczaneleri görüntülemek için yukarıdaki bölümden "İl" ve "İlçe" seçtikten sonra "Ara" butonuna basınız.
            </Box>
          )}

          {loading ? (
            <CircularProgress color="error" sx={{margin: "24px auto"}} />
          ) : pharmacies && pharmacies.length <= 0 ? (
            <Box component="p" p={2} fontWeight={300} textAlign={"center"} width={"100%"}>
              Malesef Nöbetçi Eczane Bulunamadı.
            </Box>
          ) : (
            pharmacies && pharmacies.map((pharmacy, index) => <Pharmacy key={index} pharmacy={pharmacy} />)
          )}
        </Box>
      </Box>
    </>
  );
}

export default App;
