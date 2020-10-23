import axios from 'axios';

const registerUser = async (user) => {
    let response = await axios.post('http://localhost:3500/register',user,{withCredentials:true});
    let data = response.data
    return data;
};

export default registerUser;
