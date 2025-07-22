import { useQuery } from "@tanstack/react-query";
import { pingApi } from "../../../apis/ping.js";

export default function usePing() {
  //in return it gives us an object
  const { isLoading, isError, data, error } = useQuery({
    //queryFn  -> used for making api request
    queryFn: pingApi,
     //for cache we use key value pair
    // so that we hve to maintain queryKey -> value
    queryKey: "ping",
    // cacheTime : 0,
    staleTime: 10000, //for 10 second
  });

  return {
    isError,
    isLoading,
    error,
    data,
  };
}
