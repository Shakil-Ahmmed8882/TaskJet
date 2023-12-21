
import { useQuery } from "@tanstack/react-query";
import usePublicApi from "./usePublicApi";


// Get 
export const useGetData = (endpoint, key ) => {
  const axios = usePublicApi()
  
 return useQuery({
    queryKey: [key],
    queryFn: () =>
      axios.get(endpoint).then((res) => res.data),
  });

};




