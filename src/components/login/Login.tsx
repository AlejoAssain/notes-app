import React, { useEffect } from 'react';
import styled from 'styled-components';
import LoginForm from "./LoginForm"
import LoginTitle from './LoginTitle';


const LoginContainer = styled.div`
  margin: auto;
  margin-top: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Login: React.FC = () => {
  return (
    <LoginContainer>
      <LoginTitle />
      <LoginForm />
    </LoginContainer>
  );
};

export default Login;
