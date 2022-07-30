import React from 'react';
import styled from "styled-components"
import { motion } from "framer-motion"
import { BsArrowRightCircleFill } from "react-icons/bs"



const StyledButton = styled(motion.div)`
  height: 40px;
  width: 40px;
  position: fixed;
  left: 15px;
  bottom: 15px;
  font-size: 40px;
`

const HideButton = ({ hidden, onClick, ...props}) => {
  return (
    <StyledButton 
      onClick={ onClick }
      animate={ !hidden ? {
        rotate: -180
      } : null}
      initial={{
        rotate: 0
      }}
      transition={{
        type: "tween",
        duration: "0.5"
      }}
    >
      <BsArrowRightCircleFill
        style={ {
          color: "#fff",
        } }
      />
    </StyledButton>
  );
}

export default HideButton;
