import axios from "axios";

const signUp = async (user) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_SIGNUP_URL}`,
      user
    );
    console.log(response);
  } catch (error) {
    throw new Error(error);
  }
};

const signIn = async (user) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_SIGNIN_URL}`,
      user
    );
    console.log(response);
  } catch (error) {
    throw new Error(error);
  }
};

export { signUp, signIn };
