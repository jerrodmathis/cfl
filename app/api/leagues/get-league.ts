import type { SleeperLeague } from './types';

import { skipToken, useQuery } from '@tanstack/react-query';
import axios from 'axios';

function fetchLeague(leagueId: string): Promise<SleeperLeague> {
  return axios
    .get(`${process.env.NEXT_PUBLIC_SLEEPER_API_URL}/league/${leagueId}`)
    .then((res) => res.data);
}

export function useLeague(leagueId: string | undefined) {
  return useQuery({
    queryKey: ['league', leagueId],
    queryFn: leagueId ? () => fetchLeague(leagueId) : skipToken,
  });
}
