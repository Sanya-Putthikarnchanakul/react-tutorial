import { useState, useContext } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import Alert from '@mui/material/Alert';

import UsernameInput from './UsernameInput';
import PasswordInput from './PasswordInput';

import { validateEmail } from '../utils/validation';

import { appContext } from '../contexts/AppContext';

const RegisterFormDialog = ({ isOpen, handleClose }) => {
    let [state, dispatch] = useContext(appContext);

    const [passwordEntered, setPasswordEntered] = useState({
        password: '',
        confirmPassword: ''
    });
    const [usernameEntered, setUsernameEntered] = useState('');
    const [validation, setValidation] = useState({
        isError: false,
        errorMessage: ''
    }); 

    const registerClickHandler = () => {
        if (usernameEntered.length <= 0) {
            setValidation({ isError: true, errorMessage: 'Username is required.' });
            return;
        }

        if (!validateEmail(usernameEntered)) {
            setValidation({ isError: true, errorMessage: 'Username is in email format.' });
            return;
        }

        if (passwordEntered.password.length <= 0 || passwordEntered.confirmPassword.length <= 0) {
            setValidation({ isError: true, errorMessage: 'Password or Confirm Password is required.' });
            return;
        }

        if (passwordEntered.password !== passwordEntered.confirmPassword) {
            setValidation({ isError: true, errorMessage: 'Password and Confirm Password not Match.' });
            return;
        }

        setValidation({ isError: false, errorMessage: '' });

        //เก็บข้อมูลลง Context
        dispatch({ type: 'register', payload: { username: usernameEntered, password: passwordEntered.password } });
        
        handleClose();
    }

    return (
        <>
            <Dialog open={isOpen} fullWidth>
                <DialogTitle>Register</DialogTitle>
                <DialogContent>
                    {
                        !validation.isError ?
                            null : <Alert severity="error">{validation.errorMessage}</Alert>
                    }
                    <UsernameInput 
                        defaultProps={{ variant: 'standard' }}
                        sendbacktext={(username) => setUsernameEntered(username)}/>
                    <PasswordInput 
                        defaultProps={{ variant: 'standard' }}
                        labeltext='Password' 
                        sendbackpassword={(password) => setPasswordEntered(prevState => { return {...prevState, password: password} })} 
                    />
                    <PasswordInput 
                        defaultProps={{ variant: 'standard' }} 
                        labeltext='Confirm Password' 
                        sendbackpassword={(confirmPassword) => setPasswordEntered(prevState => { return {...prevState, confirmPassword: confirmPassword} })} 
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={registerClickHandler}>Register</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default RegisterFormDialog;