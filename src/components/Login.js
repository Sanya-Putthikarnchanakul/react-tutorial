import { useState, useContext } from 'react';

import { useHistory } from 'react-router-dom';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import LoadingButton from '@mui/lab/LoadingButton';
import LoginIcon from '@mui/icons-material/Login';
import CreateIcon from '@mui/icons-material/Create';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

import styles from '../styles/Login.module.css';

import RegisterFormDialog from './RegisterFormDialog';
import UsernameInput from './UsernameInput';
import PasswordInput from './PasswordInput';

import { appContext } from '../contexts/AppContext';

const Login = () => {
    let history = useHistory();
    let [state, dispatch] = useContext(appContext);

    //#region Page State

    const [isOpenRegisterFormModal, setIsOpenRegisterFormModal] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [validation, setValidation] = useState({
        isError: false,
        errorMessage: ''
    }); 

    //#endregion

    const openRegisterForm = () => setIsOpenRegisterFormModal(true);

    const loginHandler = () => {
        if (username.length <= 0 || password.length <= 0) {
            setValidation({ isError: true, errorMessage: 'Username or Password required.' });
            return;
        }

        if (state.userInfo.username === username && state.userInfo.password === password) {
            dispatch({ type: 'login' });
            history.push('/');
        } else {
            setValidation({ isError: true, errorMessage: 'Username or Password not Match.' });
        }
    }

    return (
        <>
            <Box className={styles.loginPageContainer}>
                <Paper className={styles.loginBoxContainer} elevation={3}>
                    <Typography variant="h5" gutterBottom component="div" sx={{ textAlign: 'center' }}>Login</Typography>
                    <Divider />
                    <Box sx={{ padding: '1rem 0' }}>
                        {
                            !validation.isError ?
                                null : <Alert severity="error">{validation.errorMessage}</Alert>
                        }
                        <UsernameInput 
                            defaultProps={{ variant: 'standard' }}
                            sendbacktext={(username) => setUsername(username)}
                        />
                        <PasswordInput 
                            defaultProps={{ variant: 'standard' }}
                            labeltext='Password' 
                            sendbackpassword={(password) => setPassword(password)}
                        />
                        <LoadingButton 
                            fullWidth 
                            loading={false} 
                            loadingPosition="start" 
                            startIcon={<LoginIcon />} 
                            variant="contained"
                            onClick={loginHandler}
                        >
                            Login
                        </LoadingButton>
                        <Typography variant="caption" display="block" my={1}>Don't have an account?</Typography>
                        <Button fullWidth variant="contained" startIcon={<CreateIcon />} color="error" onClick={openRegisterForm}>Register</Button>
                    </Box>
                </Paper>
            </Box>
            
            { 
                //#region Register Form (Modal)
            }
            
            <RegisterFormDialog 
                isOpen={isOpenRegisterFormModal} 
                handleClose={() => setIsOpenRegisterFormModal(false)}
            />

            { 
                //#endregion  
            }
        </>
    );
}

export default Login;