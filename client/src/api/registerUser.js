import axios from 'axios';

const registerUser = async (user) => {
    let response = await axios.post(`${process.env.REACT_APP_API_DOMAIN}/register`,user,{withCredentials:true});
    let data = response.data
    return data;
};

export default registerUser;
