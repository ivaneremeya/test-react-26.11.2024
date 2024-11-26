import * as React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from '@mui/material';

interface ConfirmationModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  message: string;
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  open,
  onClose,
  onConfirm,
  message,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Подтверждение</DialogTitle>
      <DialogContent>
        <Typography>{message}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color='primary'>
          Отмена
        </Button>
        <Button onClick={onConfirm} color='error' autoFocus>
          Удалить
        </Button>
      </DialogActions>
    </Dialog>
  );
};
