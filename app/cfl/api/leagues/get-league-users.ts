import axios from "axios";
import { useQuery, skipToken } from "@tanstack/react-query";
import { SleeperLeagueUser } from "./types";

function fetchLeagueUsers(leagueId: string): Promise<SleeperLeagueUser> {
  return axios
    .get(`${process.env.SLEEPER_API_URL}/league/${leagueId}/users`)
    .then((res) => res.data);
}

export function useLeagueUsers(leagueId: string) {
  return useQuery({
    queryKey: ["league-users", leagueId],
    queryFn: leagueId ? () => fetchLeagueUsers(leagueId) : skipToken,
  });
}
