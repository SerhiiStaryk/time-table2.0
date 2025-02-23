import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box, Container, MenuItem, Select } from '@mui/material';
import { TIME_TABLE_OPTIONS } from '../constants/schedule';
import { getFormattedCurrentDate } from '../helpers';
import { Group, useGroupApi, useGroupData } from '../controller/GroupController';
import { styled } from '@mui/material/styles';
import ColorModeIconDropdown from '../theme/ColorModeIconDropdown';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: theme.palette.divider,
  backgroundColor: `rgba(${theme.palette.background.default}, 0.4)`,
  boxShadow: theme.shadows[1],
  padding: '8px 12px',
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
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: ['column', 'row'],
              gap: [1, 0],
            }}
          >
            <Typography
              component='p'
              sx={{
                color: 'text.secondary',
              }}
            >
              {date}
            </Typography>
            <Typography
              variant='h5'
              component='div'
              sx={{
                color: 'text.secondary',
              }}
            >
              Розклад уроків
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <Select
                labelId='select-label'
                id='demo-simple-select'
                value={group}
                label='Age'
                onChange={e => changeGroup(e.target.value as Group)}
                sx={{ minWidth: 200 }}
              >
                {TIME_TABLE_OPTIONS.map(option => (
                  <MenuItem
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
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
