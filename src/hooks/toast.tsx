/* eslint-disable no-unused-vars */
import React, { createContext, useCallback, useContext, useState } from 'react';
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

interface ToastContextData {
  addToast(message: ToastMessage): void;
  removeToast(id: string): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
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
};

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastPRovider');
  }

  return context;
}

export { ToastProvider, useToast };
