import axios from "axios";

const logoutUser = async (user) => {
  let response = await axios.get("http://localhost:3500/logout", {
    withCredentials: true,
  });
  let data = response.data;
  return data;
};

export default logoutUser;
