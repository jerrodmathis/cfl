import type { SleeperLeagueRoster } from './types';

import { skipToken, useQuery } from '@tanstack/react-query';
import axios from 'axios';

function fetchLeagueRosters(leagueId: string): Promise<SleeperLeagueRoster> {
  return axios
    .get(
      `${process.env.NEXT_PUBLIC_SLEEPER_API_URL}/league/${leagueId}/rosters`,
    )
    .then((res) => res.data);
}

export function useLeagueRosters(leagueId: string) {
  return useQuery({
    queryKey: ['league-rosters', leagueId],
    queryFn: leagueId ? () => fetchLeagueRosters(leagueId) : skipToken,
  });
}
