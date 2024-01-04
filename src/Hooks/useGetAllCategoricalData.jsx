import { useQuery } from "@tanstack/react-query";
import usePublicApi from "./usePublicApi";

// Get
export const useGetAllCategoricalData = (endpoint, key) => {
  const axios = usePublicApi();

  const { data, refetch, isLoading } = useQuery({
    queryKey: [key],
    queryFn: () => axios.get(endpoint).then((res) => res.data),
  });

  const todo = data?.filter((task) => task.progress === "to-do" || task.progress === "");

  const ongoing = data?.filter((task) => task.progress == "ongoing");
  const completed = data?.filter((task) => task.progress == "completed");

  return { todo, ongoing, completed, refetch, isLoading, data };
};
