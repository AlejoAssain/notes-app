import React from 'react';
import styled from 'styled-components';
import Navbar from './navbar/Navbar';
import Content from './content/Content';


const DashboardWrapper = styled.div`
  height: 100%;
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: left;
`;

const Dashboard: React.FC = () => {
  return (
    <DashboardWrapper>
      <Navbar />
      <Content />
    </DashboardWrapper>
  );
};

export default Dashboard;

