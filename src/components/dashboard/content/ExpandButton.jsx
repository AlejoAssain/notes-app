import React from 'react';
import styled from 'styled-components'
import { AiFillCaretDown } from 'react-icons/ai'


const ButtonWrapper = styled.div`
  background-color: none;
  text-decoration: none;
  display: flex;
  align-items: center;
`


const ExpandButton = (props) => {
  return (
    // rotation not working
    <ButtonWrapper {...props} style={ props.projectsExpanded ? { rotate: "180deg" } : null }>
      <AiFillCaretDown />
    </ButtonWrapper>
  );
}

export default ExpandButton;
