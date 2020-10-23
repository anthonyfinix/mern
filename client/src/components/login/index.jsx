import React from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
import './login.css';

function Login() {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleLogin = () => {
        
    }

    return (
        <Box id="login-main-wrapper" display="flex" justifyContent="center" alignItems="center">
            <Card id="login-card">
                <Box display="flex" p={5} flexDirection="column" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6" style={{ fontWeight: "bold" }} gutterBottom>LOGIN</Typography>
                    <TextField
                        type="text"
                        id="outlined-basic"
                        fullWidth size="small"
                        label="Username"
                        variant="outlined"
                        margin="normal"
                        value={username}
                        onChange={handleUsernameChange}
                        autoComplete="off"
                        name="username"
                    />
                    <TextField
                        type="password"
                        id="outlined-basic"
                        fullWidth size="small"
                        label="Password"
                        variant="outlined"
                        margin="normal"
                        value={password}
                        onChange={handlePasswordChange}
                        autoComplete="off"
                        name="password"
                    />
                </Box>
                <Box p={2} pt={0} display="flex" justifyContent="space-between">
                    <Button component={Link} to="/register" variant="text">Not a user?</Button>
                    <Button variant="contained" color="primary" onClick={handleLogin}>Login</Button>
                </Box>
            </Card>
        </Box>
    )
}

export default Login;