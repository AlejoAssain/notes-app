export interface userData {
  mail: string,
  username: string,
  name: string
};

export interface userRegisterSchema {
  mail: string,
  username: string,
  name: string,
  password: string
};

interface responseFormat {
  _id: string,
  mail: string,
  username: string,
  name: string
};


const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getUser = async (token: string) : Promise<userData | string> => {
  try {
    const response = await fetch(`${BASE_URL}/users/me`, {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + token
      }
    });
    const data: userData = await response.json();
    return data;

  } catch (e) {
    console.log(e);
    return "" + e;
  }
};

export const loginUser = async (username: string, password: string) : Promise<userData | string> => {
  try {
    const response = await fetch(BASE_URL + "/users/login", {
      method: "GET",
      body: JSON.stringify({
        username: username,
        password: password
      })
    });
    const data: userData = await response.json();
    return data;
  } catch (e) {
    console.log(e);
    return "" + e;
  };
};

export const registerUser = () => {};

