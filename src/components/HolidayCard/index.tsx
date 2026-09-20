import { Divider } from '@/components/Divider';
import { HOLIDAYS } from '@/constants/schedule';
import { Card, CardContent, Typography, useTheme } from '@mui/material';

const isHolidayOver = (end: string) => {
  const [day, month, year] = end.split('.').map(Number);
  const endDate = new Date(year, month - 1, day);
  const today = new Date();
  const todayDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  );

  return endDate < todayDate;
};

export const HolidayCard = () => {
  const theme = useTheme();

  return (
    <Card
      sx={[
        { p: 2, display: 'flex', flexDirection: 'column' },
        theme.applyStyles('dark', {
          background:
            'radial-gradient(circle at 50% 0%, hsl(220, 20%, 20%), hsl(220, 30%, 16%))',
        }),
      ]}
    >
      <CardContent>
        <Typography variant="h6" component="h3" align="center">
          Канікули
        </Typography>
        <Divider />
        {HOLIDAYS.map(({ name, start, end }) => (
          <Typography
            key={name}
            component="p"
            sx={{
              mb: 1,
              textDecoration: isHolidayOver(end) ? 'line-through' : 'none',
            }}
          >
            <b>{name}: </b> {start} - {end}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};
