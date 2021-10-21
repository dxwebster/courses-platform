/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import { ToastContext } from '../providers/ToastProvider';
import { ToastContextData } from '../interfaces/ToastInterface';

export default function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastPRovider');
  }

  return context;
}
