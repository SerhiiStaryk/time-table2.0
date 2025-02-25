import { Box, AppBar, Select, Toolbar, MenuItem, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { getFormattedCurrentDate } from '../helpers';
import { TIME_TABLE_OPTIONS } from '../constants/schedule';
import { Group, useGroupApi, useGroupData } from '../controller/GroupController';
import ColorModeIconDropdown from '../theme/ColorModeIconDropdown';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  flexShrink: 0,
  display: 'flex',
  border: '1px solid',
  padding: '8px 12px',
  alignItems: 'center',
  boxShadow: theme.shadows[1],
  backdropFilter: 'blur(24px)',
  justifyContent: 'space-between',
  borderColor: theme.palette.divider,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backgroundColor: `rgba(${theme.palette.background.default}, 0.4)`,
}));

const Header = () => {
  const { group } = useGroupData();
  const { changeGroup } = useGroupApi();

  const date = getFormattedCurrentDate();

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
        <StyledToolbar
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
              sx={{ color: 'text.secondary' }}
            >
              {date}
            </Typography>
            <Typography
              variant='h5'
              component='div'
              sx={{ color: 'text.secondary' }}
            >
              Розклад уроків
            </Typography>
            <Box sx={{ gap: 2, display: 'flex', alignItems: 'center' }}>
              <Select
                label='Age'
                value={group}
                labelId='select-label'
                sx={{ minWidth: 200 }}
                id='demo-simple-select'
                onChange={e => changeGroup(e.target.value as Group)}
              >
                {TIME_TABLE_OPTIONS.map(({ value, label }) => (
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
        </StyledToolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
