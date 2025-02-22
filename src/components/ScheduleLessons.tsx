import { Box, Card, CardContent, Divider, Typography } from '@mui/material';

const ScheduleLessons = ({ item, today }) => {
  const active = today === item.day;

  return (
    <Card
      sx={[
        {
          p: 2,
          display: 'flex',
          flexDirection: 'column',
        },
        active &&
          (theme => ({
            border: 'none',
            background: 'radial-gradient(circle at 50% 0%, hsl(220, 20%, 35%), hsl(220, 30%, 6%))',
            boxShadow: `0 8px 12px hsla(220, 20%, 42%, 0.2)`,
            ...theme.applyStyles('dark', {
              background: 'radial-gradient(circle at 50% 0%, hsl(220, 20%, 20%), hsl(220, 30%, 16%))',
              boxShadow: `0 8px 12px hsla(0, 0%, 0%, 0.8)`,
            }),
          })),
      ]}
    >
      <CardContent>
        <Typography
          component='h3'
          variant='h6'
          sx={[active ? { color: 'grey.50' } : { color: null }, { textAlign: 'center' }]}
        >
          {item.day}
        </Typography>
        <Divider sx={{ my: 2, opacity: 0.8, borderColor: 'divider' }} />
        <>
          {item.lessons.map((lesson, idx) => (
            <Box
              key={idx}
              sx={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <Box>
                <Typography
                  variant='subtitle2'
                  component={'span'}
                  sx={[active ? { color: 'grey.50' } : { color: null }]}
                >
                  {`${idx + 1}`}.&nbsp;&nbsp;
                </Typography>
                <Typography
                  variant='subtitle2'
                  component={'span'}
                  sx={[active ? { color: 'grey.50' } : { color: null }]}
                >
                  {lesson.name}
                </Typography>
              </Box>
              <Typography
                variant='subtitle2'
                component={'span'}
                sx={[active ? { color: 'grey.50' } : { color: null }]}
              >
                {lesson.time}
              </Typography>
            </Box>
          ))}
        </>
      </CardContent>
    </Card>
  );
};

export default ScheduleLessons;
