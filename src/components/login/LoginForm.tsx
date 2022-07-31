import React from "react";
import { Form, Formik, FormikHelpers, FormikValues } from "formik";
import FormInput from "../FormInput";
import SubmitButton from "../SubmitButton";
import styled from "styled-components";
const Yup = require("yup");


interface FormValues {
  username: string,
  password: string
}

const loginFormValidationSchema = Yup.object().shape({
  username: Yup
    .string()
    .required("This field is required"),
  password: Yup
    .string()
    .required("This field is required"),
});

const formInitialValues: FormValues = {
  username: "",
  password: ""
}

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginForm: React.FC = () => {
  const handleSubmit = (values: FormValues, actions: FormikHelpers<FormValues>) => {
    console.log("Form data", values);

    // post request to server - code here

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={formInitialValues}
      validationSchema={loginFormValidationSchema}
      onSubmit={handleSubmit}
    >
      <FormWrapper>
        <Form>
          <FormInput label="Enter your username" name="username" type="text" />
          <FormInput label="Enter your password" name="password" type="password" />
          <SubmitButton label="Log In" />
        </Form>
      </FormWrapper>
    </Formik>
  );
};

export default LoginForm;
