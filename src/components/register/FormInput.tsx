import React from 'react';
import { useField } from 'formik';


interface formInputProps {
  label: string,
  name: string,
  type: string
};


const FormInput: React.FC<formInputProps> = ({ ...props }) => {
  const [field, meta, helpers] = useField(props);

  const { label } = props;

  return (
    <div>
      <label>{ label }
        <input { ...field } { ...props } />
      </label>

      {/* errors */}
      {meta.touched && meta.error ? (
        <div className="form-error">{ meta.error }</div>
      ) : null}

    </div>
  );
}

export default FormInput;
