import React, { useEffect } from 'react';
import styled from 'styled-components';
import LoginForm from "./LoginForm"


const LoginContainer = styled.div`
  margin: auto;
`;

const Login: React.FC = () => {
  return (
    <LoginContainer>
      Login page
      <LoginForm />
    </LoginContainer>
  );
};

export default Login;
