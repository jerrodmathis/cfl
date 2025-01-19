import axios from "axios";
import { useQuery, skipToken } from "@tanstack/react-query";
import { SleeperLeague } from "./types";

function fetchLeague(leagueId: string): Promise<SleeperLeague> {
  return axios
    .get(`${process.env.SLEEPER_API_URL}/league/${leagueId}`)
    .then((res) => res.data);
}

export function useLeague(leagueId: string | undefined) {
  return useQuery({
    queryKey: ["league", leagueId],
    queryFn: leagueId ? () => fetchLeague(leagueId) : skipToken,
  });
}
