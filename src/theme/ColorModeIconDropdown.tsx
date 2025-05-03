import { Fragment, useState } from 'react';
import { Box, Menu, MenuItem } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkModeRounded';
import LightModeIcon from '@mui/icons-material/LightModeRounded';
import IconButton, { IconButtonOwnProps } from '@mui/material/IconButton';
import { useColorScheme } from '@mui/material/styles';

export default function ColorModeIconDropdown(props: IconButtonOwnProps) {
  const { mode, systemMode, setMode } = useColorScheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMode = (targetMode: 'system' | 'light' | 'dark') => () => {
    setMode(targetMode);
    handleClose();
  };

  if (!mode) {
    return (
      <Box
        data-screenshot='toggle-mode'
        sx={theme => ({
          width: '2.25rem',
          height: '2.25rem',
          border: '1px solid',
          display: 'inline-flex',
          verticalAlign: 'bottom',
          borderColor: theme.palette.divider,
          borderRadius: theme.shape.borderRadius,
        })}
      />
    );
  }
  const resolvedMode = (systemMode || mode) as 'light' | 'dark';
  const icon = {
    light: <LightModeIcon />,
    dark: <DarkModeIcon />,
  }[resolvedMode];
  return (
    <Fragment>
      <IconButton
        {...props}
        size='small'
        disableRipple
        aria-haspopup='true'
        onClick={handleClick}
        data-screenshot='toggle-mode'
        sx={{ color : 'text.primary' }}
        aria-expanded={open ? 'true' : undefined}
        aria-controls={open ? 'color-scheme-menu' : undefined}
      >
        {icon}
      </IconButton>
      <Menu
        open={open}
        id='account-menu'
        anchorEl={anchorEl}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            variant: 'outlined',
            sx: { my: '4px' },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem
          selected={mode === 'system'}
          onClick={handleMode('system')}
        >
          System
        </MenuItem>
        <MenuItem
          selected={mode === 'light'}
          onClick={handleMode('light')}
        >
          Light
        </MenuItem>
        <MenuItem
          selected={mode === 'dark'}
          onClick={handleMode('dark')}
        >
          Dark
        </MenuItem>
      </Menu>
    </Fragment>
  );
}
