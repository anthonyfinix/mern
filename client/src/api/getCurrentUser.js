import axios from "axios";

const loginUser = async () => {
  let response = null;
  let accessToken = localStorage.getItem("x-token");
  if (accessToken) {
    response = await axios.get(`${process.env.REACT_APP_API_DOMAIN}/login`, {
      withCredentials: true,
      headers: { "x-token": accessToken },
    });
    console.log(response)
    localStorage.setItem("x-token", response.headers['x-token']);
    response = response.data
  }
  return response;
};

export default loginUser;
