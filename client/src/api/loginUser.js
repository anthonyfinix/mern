import axios from 'axios';

const loginUser = async (user) => {
    let response = await axios.post('http://localhost:3500/login',user);
    let data = response.data
    return data;
};

export default loginUser;
