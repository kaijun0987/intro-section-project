import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

const baseUrl = "https://dummyjson.com";

type TData = {
  email: string;
  firstName: string;
  gender: string;
  id: number;
  image: string;
  lastName: string;
  token: string;
  username: string;
};

const query = async (url: string, token: string) => {
  return await axios.get<TData>(`${baseUrl}${url}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const useGet = (url: string, token: string, key: string) => {
  return useQuery({
    queryKey: [key],
    queryFn: () => query(url, token),
    enabled: !!token,
    refetchOnWindowFocus: false,
    retry: 2,
  });
};

export const usePost = () => {
  return useMutation({
    mutationFn: (data: { url: string; param: object }) => mutation(data),
  });
};

const mutation = async (data: { url: string; param: object }) => {
  return await axios.post<TData>(`${baseUrl}${data.url}`, data.param, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
