import axios from "axios";

const axiosPublic = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://tasklet-server-mongo-db.vercel.app",
});

const usePublicApi = () => {
  return axiosPublic;
};

export default usePublicApi;
