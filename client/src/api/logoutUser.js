import axios from "axios";

const logoutUser = async (user) => {
  let response = await axios.get(`${process.env.REACT_APP_API_DOMAIN}/logout`, {
    withCredentials: true,
  });
  let data = response.data;
  return data;
};

export default logoutUser;
