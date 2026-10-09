import { Alert, Button, Snackbar } from '@mui/material';
import { useRegisterSW } from 'virtual:pwa-register/react';

export function PwaUpdater() {
  const {
    needRefresh: [needRefresh],
    updateServiceWorker,
  } = useRegisterSW();

  return (
    <Snackbar
      open={needRefresh}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert
        severity="info"
        action={
          <Button
            color="inherit"
            size="small"
            onClick={() => void updateServiceWorker(true)}
          >
            Оновити
          </Button>
        }
      >
        Доступне оновлення застосунку.
      </Alert>
    </Snackbar>
  );
}
