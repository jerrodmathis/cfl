import axios from "axios";
import { skipToken, useQuery } from "@tanstack/react-query";
import { SleeperLeagueRoster } from "./types";

function fetchLeagueRosters(leagueId: string): Promise<SleeperLeagueRoster> {
  return axios
    .get(`${process.env.SLEEPER_API_URL}/league/${leagueId}/rosters`)
    .then((res) => res.data);
}

export function useLeagueRosters(leagueId: string) {
  return useQuery({
    queryKey: ["league-rosters", leagueId],
    queryFn: leagueId ? () => fetchLeagueRosters(leagueId) : skipToken,
  });
}
