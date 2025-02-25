import MenuItem from '@mui/material/MenuItem';
import { useColorScheme } from '@mui/material/styles';
import Select, { SelectProps } from '@mui/material/Select';

const menu = [
  { value: 'system', label: 'System' },
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
];

export default function ColorModeSelect(props: SelectProps) {
  const { mode, setMode } = useColorScheme();

  if (!mode || !setMode) return null;

  return (
    <Select
      {...props}
      value={mode}
      inputProps={{ 'data-screenshot': 'toggle-mode' }}
      onChange={event => setMode(event.target.value as 'system' | 'light' | 'dark')}
    >
      {menu.map(item => (
        <MenuItem
          key={item.value}
          value={item.value}
        >
          {item.label}
        </MenuItem>
      ))}
    </Select>
  );
}
