import { Box, AppBar, Select, MenuItem, Container, Typography } from '@mui/material';
import { getFormattedCurrentDate } from '../../helpers';
import { TIME_TABLE_OPTIONS } from '../../constants/schedule';
import ColorModeIconDropdown from '../../theme/ColorModeIconDropdown';
import { Toolbar } from '../ui/Toolbar';
import { CHILDREN_OPTIONS } from '../../constants/children';

export const Header = () => {
  return (
    <AppBar
      position='fixed'
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container maxWidth='lg'>
        <Toolbar
          variant='dense'
          disableGutters
        >
          <Box
            sx={{
              px: 0,
              flexGrow: 1,
              gap: [1, 0],
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: ['column', 'row'],
            }}
          >
            <Typography
              component='p'
              color='textSecondary'
            >
              {getFormattedCurrentDate()}
            </Typography>
            <Typography
              variant='h5'
              component='div'
              color='textSecondary'
            >
              Розклад уроків
            </Typography>
            <Box sx={{ gap: 2, display: 'flex', alignItems: 'center' }}>
              <Select
                value='Maksym'
                sx={{ minWidth: 200 }}
                // onChange={e => changeGroup(e.target.value as Group)}
              >
                {CHILDREN_OPTIONS.map(({ value, label }) => (
                  <MenuItem
                    key={value}
                    value={value}
                  >
                    {label}
                  </MenuItem>
                ))}
              </Select>
              <Box>
                <ColorModeIconDropdown size='medium' />
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
