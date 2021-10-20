/* eslint-disable react/prop-types */
import React from 'react';
import { FiXCircle } from 'react-icons/fi';

import { useToast } from '../../hooks/toast';
import { Container } from './styles';

// const icons = {
//   info: <FiInfo size={24} />,
//   error: <FiAlertCircle size={24} />,
//   success: <FiCheckCircle size={24} />,
// };

export default function Toast({ messages }) {
  const { removeToast } = useToast();

  return (
    <>
      {messages?.map((message: any, index: any) => (
        <Container key={index} type={message.type}>
          <strong>{message.title}</strong>
          {message.description && <p>{message.description}</p>}

          <button onClick={() => removeToast(message.id)} type="button">
            <FiXCircle size={18} />
          </button>
        </Container>
      ))}
    </>
  );
}
