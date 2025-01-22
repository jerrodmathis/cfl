import { skipToken, useQuery } from '@tanstack/react-query';
import axios from 'axios';

function fetchAvatar(
  avatarId: string,
  size: 'small' | 'regular',
): Promise<Blob> {
  return axios
    .get(
      `https://sleepercdn.com/avatars${size === 'small' ? '/thumbs' : ''}/${avatarId}`,
      {
        responseType: 'blob',
      },
    )
    .then((res) => res.data);
}

export function useAvatar(avatarId: string, size: 'small' | 'regular') {
  return useQuery({
    queryKey: ['avatar', avatarId],
    queryFn: avatarId ? () => fetchAvatar(avatarId, size) : skipToken,
  });
}
