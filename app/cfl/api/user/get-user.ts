import axios from "axios";
import { useQuery, skipToken } from "@tanstack/react-query";
import { SleeperUser } from "./types";

function fetchUser(userId: string): Promise<SleeperUser> {
  return axios
    .get(`${process.env.SLEEPER_API_URL}/user/${userId}`)
    .then((res) => res.data);
}

export function useUser(userId: string) {
  return useQuery({
    queryKey: ["user", userId],
    queryFn: userId ? () => fetchUser(userId) : skipToken,
  });
}
