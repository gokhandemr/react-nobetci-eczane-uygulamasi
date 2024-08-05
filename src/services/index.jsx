import axios from "axios";

export const getPharmacy = async (city, district) => {
  const response = await axios.get(`https://www.nosyapi.com/apiv2/service/pharmacies-on-duty`, {
    params: {
      city: city,
      district: district,
      apiKey: "lLRWNAchMXDLCk2C7q8IuVchb4AVfUrhvSPcJumyJ8tlzxlwVdQq6VQv8VJT",
    },
  });
  return response.data.data;
};

export const getCities = async (city) => {
  const response = await axios.get("https://www.nosyapi.com/apiv2/service/pharmacies-on-duty/cities", {
    params: {
      city: city,
      apiKey: "lLRWNAchMXDLCk2C7q8IuVchb4AVfUrhvSPcJumyJ8tlzxlwVdQq6VQv8VJT",
    },
  });
  return response.data.data;
};
