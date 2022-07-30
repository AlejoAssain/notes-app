import React from 'react';


interface togglePwButtonProps {
  viewPassword: boolean,
  onClick: () => void,
}

const TogglePwButton = (props: togglePwButtonProps) => {
  const {
    viewPassword,
    onClick
  } = props
  return (
    <button onClick={onClick} type="button">
      { viewPassword ? "Hide" : "Show" }
    </button>
  );
}

export default TogglePwButton;
