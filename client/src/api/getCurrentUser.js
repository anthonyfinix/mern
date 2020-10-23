import axios from "axios";

const loginUser = async () => {
  let response = null;
  let accessToken = localStorage.getItem("x-token");
  if (accessToken) {
    response = await axios.get("http://localhost:3500/login", {
      withCredentials: true,
      headers: { "x-token": accessToken },
    });
    localStorage.setItem("x-token", response.config.headers['x-token']);
    response = response.data
  }
  return response;
};

export default loginUser;
