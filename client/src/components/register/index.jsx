import React from 'react';
import { Link } from 'react-router-dom'
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './register.css';

function Register() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value)
    }
    const handleRegister = () => {
    }

    return (
        <Box id="register-main-wrapper" display="flex" justifyContent="center" alignItems="center">
            <Card id="register-card">
                <Box display="flex" p={5} flexDirection="column" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6" style={{ fontWeight: "bold" }} gutterBottom>REGISTER</Typography>
                    <TextField
                        type="text"
                        id="outlined-basic"
                        fullWidth size="small"
                        label="Name"
                        variant="outlined"
                        margin="normal"
                        value={name}
                        onChange={handleNameChange}
                        autoComplete="off"
                        name="name"
                    />
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
                        type="email"
                        id="outlined-basic"
                        fullWidth size="small"
                        label="Email"
                        variant="outlined"
                        margin="normal"
                        value={email}
                        onChange={handleEmailChange}
                        autoComplete="off"
                        name="email"
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
                    <TextField
                        type="password"
                        id="outlined-basic"
                        fullWidth size="small"
                        label="Confirm Password"
                        variant="outlined"
                        margin="normal"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        autoComplete="off"
                        name="confirmPassword"
                    />
                </Box>
                <Box p={2} pt={0} display="flex" justifyContent="space-between">
                    <Button component={Link} to="/login" variant="text">already a user?</Button>
                    <Button variant="contained" color="primary" onClick={handleRegister}>Register</Button>
                </Box>
            </Card>
        </Box>
    )
}

export default Register;