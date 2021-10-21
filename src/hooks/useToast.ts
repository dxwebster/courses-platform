/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import { ToastContext, ToastContextData } from '../providers/ToastProvider';

export default function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastPRovider');
  }

  return context;
}
