import { Box, Button, Typography, useColorScheme, useTheme } from '@mui/material';
import { useState } from 'react';
import { useGroupApi, useGroupData } from '../../controller/GroupController';

export const Switcher = () => {
  const { group } = useGroupData();
  const { changeGroup } = useGroupApi();

  console.log(group);

  const theme = useTheme();
  const { mode, systemMode } = useColorScheme();

  const usedTheme = systemMode ? systemMode : mode;

  return (
    <>
      <Typography
        variant='subtitle2'
        sx={{ alignSelf: 'flex-end', mr: 2 }}
      >
        Група
      </Typography>
      <Box sx={{ display: 'flex', mb: 4, alignSelf: 'flex-end' }}>
        <Box
          sx={{
            border: '1px solid',
            borderColor: theme.palette.divider,
            borderRadius: '20px',
            position: 'relative',
            boxShadow: theme.shadows[1],
            backdropFilter: 'blur(24px)',
          }}
        >
          <Box
            sx={{
              width: ' 100px',
              height: '40px',
              borderRadius: '20px',
              position: 'absolute',
              transition: 'all 0.5s ease',
              background: usedTheme === 'dark' ? theme.palette.grey[700] : theme.palette.grey[300],
            }}
            style={{
              transform: `translateX(${group === 'first' ? 0 : '100px'})`,
            }}
          />
          <Button
            disableRipple
            variant='text'
            sx={{
              borderRadius: '20px',
              width: '100px',
              height: '40px',
              fontWeight: 'bold',
              transition: 'all 0.2s 0.1s ease',
              '&:hover': { backgroundColor: 'transparent' },
            }}
            onClick={() => changeGroup('first')}
          >
            Перша
          </Button>
          <Button
            disableRipple
            variant='text'
            sx={{
              borderRadius: '20px',
              width: '100px',
              height: '40px',
              fontWeight: 'bold',
              transition: 'all 0.2s 0.1s ease',
              '&:hover': { backgroundColor: 'transparent' },
            }}
            onClick={() => changeGroup('second')}
          >
            Друга
          </Button>
        </Box>
      </Box>
    </>
  );
};
