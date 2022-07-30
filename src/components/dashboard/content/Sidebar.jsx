import React from 'react';
import styled from 'styled-components'
import projects from '../exampleData'
import Links from './Links';
import { motion } from "framer-motion"


const SidebarWrapper = styled(motion.div)`
  margin: 0;
  padding-top: 50px;
  top: 0;
  left: 0;
  z-index: 0;
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: #021457;
  width: 25vw;
  min-width: 350px;  
  max-width: 250px;
  height: 100vh;
`


const Sidebar = ({ hidden, ...props}) => {
  return (
    <SidebarWrapper
      animate={ !hidden ? {
        x: "0"
      } : null}
      initial={{
        x: "-400px"
      }}
      transition={{
        type: "tween",
        duration: "0.5"
      }}
    >
      <Links projects={ projects } title="My projects" />
      <Links projects={ projects } title="Organization projects" />
    </SidebarWrapper>
  );
}

export default Sidebar;

