import React from 'react';
import { useField } from 'formik';
import styled from "styled-components";


interface formInputProps {
  label: string,
  name: string,
  type: string
};

const InputContainer = styled.div`
  display: block;
`;

const InputField = styled.input`
  display: block;
`;

const LabelField = styled.label`
  padding: 5px;
`;

const ErrorContainer = styled.div`
  min-height: 40px;
`

const FormInput: React.FC<formInputProps> = ({ ...props }) => {
  const [field, meta, helpers] = useField(props);

  const { label } = props;

  return (
    <InputContainer>
      <LabelField>{ label }</LabelField>
      <InputField { ...field } { ...props } />
      {/* errors */}
      <ErrorContainer className="form-error">
        { meta.touched && meta.error ? meta.error : null}
      </ErrorContainer>


    </InputContainer>
  );
}

export default FormInput;
