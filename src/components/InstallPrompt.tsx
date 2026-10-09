import { useEffect, useState } from 'react';
import CloseRounded from '@mui/icons-material/CloseRounded';
import {
  Alert,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { useInstallPrompt } from '@/pwa/useInstallPrompt';
import { isAndroid, type InstallStrategy } from '@/pwa/platform';

type InstallPromptProps = {
  routeVisitCount: number;
};

function getDialogTitle(strategy: InstallStrategy): string {
  switch (strategy) {
    case 'native-prompt':
      return 'Встановіть застосунок';
    case 'ios-manual':
      return 'Додайте на головний екран';
    case 'safari-desktop-manual':
      return 'Додайте застосунок до Dock';
    case 'firefox-manual':
      return 'Встановлення у Firefox';
    case 'in-app-browser':
      return 'Відкрийте у браузері';
    default:
      return '';
  }
}

function ShareIcon() {
  return (
    <Box
      component="svg"
      aria-hidden="true"
      viewBox="0 0 24 24"
      sx={{
        width: 20,
        height: 20,
        display: 'inline-block',
        verticalAlign: 'middle',
        mx: 0.5,
      }}
    >
      <path
        d="M12 15V3m0 0L7.5 7.5M12 3l4.5 4.5M5 13v7h14v-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Box>
  );
}

function Instructions({ strategy }: { strategy: InstallStrategy }) {
  switch (strategy) {
    case 'ios-manual':
      return (
        <Stack spacing={1.5}>
          <Typography>
            На iOS встановлення доступне через меню «Поділитися» саме в Safari.
            Якщо сторінка відкрита в іншому браузері, відкрийте її в Safari.
          </Typography>
          <Typography>
            1. Натисніть «Поділитися» <ShareIcon /> у Safari.
          </Typography>
          <Typography>2. Виберіть «На початковий екран».</Typography>
          <Typography>3. Натисніть «Додати».</Typography>
        </Stack>
      );
    case 'safari-desktop-manual':
      return (
        <Typography>
          У Safari виберіть «Файл → Додати до Dock» або «Поділитися → Додати до
          Dock».
        </Typography>
      );
    case 'firefox-manual':
      return (
        <Typography>
          {isAndroid()
            ? 'Відкрийте меню ⋮ Firefox і виберіть «Встановити».'
            : 'Firefox для комп’ютера не підтримує встановлення PWA. Відкрийте сторінку в Chrome або Edge.'}
        </Typography>
      );
    case 'in-app-browser':
      return (
        <Typography>
          Відкрийте це посилання у системному браузері — Safari на iOS або Chrome
          на Android — щоб встановити застосунок.
        </Typography>
      );
    default:
      return null;
  }
}

export function InstallPrompt({ routeVisitCount }: InstallPromptProps) {
  const {
    strategy,
    canInstallNatively,
    install,
    isInstalled,
    isDismissed,
    dismiss,
  } = useInstallPrompt();
  const [hasWaited, setHasWaited] = useState(false);
  const [installError, setInstallError] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => setHasWaited(true), 30_000);
    return () => window.clearTimeout(timeout);
  }, []);

  const supportedStrategy =
    strategy !== 'installed' && strategy !== 'unsupported';
  const canShow =
    supportedStrategy &&
    !isInstalled &&
    !isDismissed &&
    (hasWaited || routeVisitCount >= 2) &&
    (strategy !== 'native-prompt' || canInstallNatively);

  if (!canShow) return null;

  const handleInstall = async () => {
    setInstallError(false);
    try {
      await install();
    } catch {
      setInstallError(true);
    }
  };

  return (
    <Dialog
      open
      onClose={dismiss}
      fullWidth
      maxWidth="xs"
      aria-labelledby="install-prompt-title"
      slotProps={{
        paper: {
          sx:
            strategy === 'ios-manual'
              ? {
                  position: 'fixed',
                  bottom: 0,
                  m: 0,
                  width: '100%',
                  borderRadius: '20px 20px 0 0',
                  pb: 'env(safe-area-inset-bottom)',
                }
              : { borderRadius: 3 },
        },
      }}
    >
      <DialogTitle
        id="install-prompt-title"
        sx={{ display: 'flex', alignItems: 'center', pr: 1, gap: 1 }}
      >
        <Box sx={{ flexGrow: 1 }}>{getDialogTitle(strategy)}</Box>
        <IconButton
          aria-label="Закрити"
          onClick={dismiss}
          edge="end"
          size="small"
        >
          <CloseRounded />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        {strategy === 'native-prompt' ? (
          <Typography>Встановіть розклад для швидкого доступу.</Typography>
        ) : (
          <Instructions strategy={strategy} />
        )}
        {installError && (
          <Alert severity="error" sx={{ mt: 2 }}>
            Не вдалося відкрити встановлення. Спробуйте ще раз пізніше.
          </Alert>
        )}
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2 }}>
        {strategy === 'native-prompt' && (
          <Button variant="contained" onClick={() => void handleInstall()}>
            Встановити застосунок
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}
