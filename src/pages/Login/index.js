import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function Login() {
  return (
    <Container>
      <h1>Login</h1>
      <button>
        <Link to="/dashboard">Dashboard</Link>
      </button>
    </Container>
  );
}

export default Login;
