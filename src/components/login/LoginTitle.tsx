import React from "react";
import styled from "styled-components";


const TitleContainer = styled.div`
  background-color: red;
  font-size: 30px;
`;

const LoginTitle: React.FC = () => {
  return (
    <TitleContainer>
      Log into your Notes!
    </TitleContainer>
  )
};

export default LoginTitle;
