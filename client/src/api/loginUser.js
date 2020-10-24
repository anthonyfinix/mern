import axios from 'axios';

const loginUser = async (user) => {
    let response = await axios.post(`${process.env.REACT_APP_API_DOMAIN}/login`,user,{withCredentials:true});
    let data = response.data
    return data;
};

export default loginUser;
