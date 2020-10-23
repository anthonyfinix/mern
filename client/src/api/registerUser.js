import axios from 'axios';

const registerUser = async (user) => {
    let response = await axios.post('http://localhost:3500/register',user);
    let data = response.data
    return data;
};

export default registerUser;
