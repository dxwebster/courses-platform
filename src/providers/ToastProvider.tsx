/* eslint-disable no-unused-vars */
import { createContext, useCallback, useState } from 'react';
import { v4 } from 'uuid';
import Toast from '../components/Toast';

export interface ToastMessageState {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

export interface ToastMessage {
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

export interface ToastContextData {
  addToast(message: ToastMessage): void;
  removeToast(id: string): void;
}

export const ToastContext = createContext<ToastContextData>({} as ToastContextData);

function ToastProvider({ children }: any) {
  const [messages, setMessages] = useState<ToastMessageState[]>([]);

  const addToast = ({ type, title, description }: ToastMessage) => {
    const toast = {
      id: v4(),
      type,
      title,
      description,
    };

    setMessages((state) => [...state, toast]);
  };

  const removeToast = useCallback((id: string) => {
    setMessages((state) => state.filter((message) => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}

      {messages.map((message, index) => (
        <Toast key={index} message={message} />
      ))}
    </ToastContext.Provider>
  );
}

export { ToastProvider };
