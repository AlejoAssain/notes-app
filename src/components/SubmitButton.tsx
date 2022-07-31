import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';


interface SubmitButtonProps {
  label: string
}

const Button = styled(motion.button)`
  background-color: #55f;
  color: #fff;
  font-size: 20px;
  padding: 4px 10px;
  border: none;
  border-radius: 5px;
`

const SubmitButton = (props: SubmitButtonProps) => {
  return (
    <Button
      type="submit"
      whileHover={{
        scale: 1.05
      }}
      whileTap={{
        scale: 0.95
      }}
    >
      { props.label }
    </Button>
  );
}

export default SubmitButton;
