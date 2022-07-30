import React, { useEffect } from 'react';
import { getUser } from '../../api_call/apiCall';


const JWT_TOKEN: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZGM0YTk1MTBiMjEwMzE1ZTlkNGIxMSIsImlhdCI6MTY1ODc3MDIxNCwiZXhwIjoxNjYxMzYyMjE0fQ.6k14wrcwvQG45CDnEmQIlAiqZ4bEDUAb5nUvs18WKgE"

const Login: React.FC = () => {
  useEffect(() => {
    getUser(JWT_TOKEN)
      .then((response) => console.log("Response", response))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Login page</h1>
    </div>
  );
};

export default Login;
