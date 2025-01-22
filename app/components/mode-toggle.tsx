'use client';

import React from 'react';
import { Option, Select, useColorScheme } from '@mui/joy';

export function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Select
      value={mode}
      onChange={(event, newMode) => setMode(newMode)}
      sx={{
        position: 'absolute',
        width: 'max-content',
        top: 0,
        right: 0,
        mr: 2,
        mt: 2,
        zIndex: 999,
      }}
    >
      <Option value='system'>System</Option>
      <Option value='light'>Light</Option>
      <Option value='dark'>Dark</Option>
    </Select>
  );
}
