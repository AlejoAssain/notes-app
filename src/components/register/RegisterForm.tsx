import React from 'react';
import { useState } from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import FormInput from '../FormInput';
import SubmitButton from '../SubmitButton';
import TogglePwButton from './TogglePwButton';
const Yup = require("yup")


interface registerFormProps {

}

const registerFormValidationSchema = Yup.object().shape({
  username: Yup
    .string()
    .min(4, "Username is too short")
    .required("This field is required"),
  mail: Yup
    .string()
    .email()
    .required("This field is required"),
  name: Yup
    .string()
    .min(3, "Name too short")
    .required("This field is required"),
  password: Yup
    .string()
    .min(6, "Password is too short")
    .required("This field is required"),
  passwordConfirmation: Yup
    .string()
    .oneOf( [Yup.ref("password"), null], "Passwords don't match" )
    .required("This field is required")
});

interface FormValues {
  mail: string,
  username: string,
  name: string,
  password: string,
  passwordConfirmation: string
};

const formInitialValues: FormValues = {
  mail: "",
  username: "",
  name: "",
  password: "",
  passwordConfirmation: ""
};

const RegisterForm: React.FC = (props: registerFormProps) => {
  const [viewPassword, setViewPassword] = useState(false);

  const toggleViewPassword = () => {
    setViewPassword(!viewPassword);
  };

  const handleSubmit = (values: FormValues, actions: FormikHelpers<FormValues>) => {
    console.log("Form data", values);

    // post request to server - code here

    setViewPassword(false);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={formInitialValues}
      onSubmit={handleSubmit}
      validationSchema={registerFormValidationSchema}
    >
      <Form>
        <FormInput label="Enter your email:" name="mail" type="text" />
        <FormInput label="Enter a new username:" name="username" type="text" />
        <FormInput label="Enter a your name:" name="name" type="text" />
        <FormInput label="Enter a new password:" name="password" type={ viewPassword ? "text" : "password" } />
        <FormInput label="Confirm your password:" name="passwordConfirmation" type={ viewPassword ? "text" : "password" } />
        <TogglePwButton viewPassword={ viewPassword } onClick={ toggleViewPassword } />
        <SubmitButton label="Register" />
      </Form>
    </Formik>
  );
};

export default RegisterForm;
