import React from 'react';
import { useState } from 'react';
import styled from 'styled-components'
import HideButton from './HideButton';
import Project from './Project';
import Sidebar from './Sidebar';


const ContentWrapper = styled.div`
  /* height: 100%; */
  height: 3000px;
  width: 100%;
  background-color: #000;
  display: flex;
  direction: row;
  justify-content: left;
  align-items: center;
`


const Content = () => {
  const [ hidden, setHidden ] = useState(true)

  const toggleHidden = () => {
    setHidden(!hidden)
  }


  return (
    <ContentWrapper>
      <Sidebar hidden={ hidden } />
      <Project />
      <HideButton hidden={ hidden } onClick={ toggleHidden }/>
    </ContentWrapper>
  );
}

export default Content;
