import type { SleeperUser } from './types';

import { skipToken, useQuery } from '@tanstack/react-query';
import axios from 'axios';

function fetchUser(userId: string): Promise<SleeperUser> {
  return axios
    .get(`${process.env.SLEEPER_API_URL}/user/${userId}`)
    .then((res) => res.data);
}

export function useUser(userId: string) {
  return useQuery({
    queryKey: ['user', userId],
    queryFn: userId ? () => fetchUser(userId) : skipToken,
  });
}
