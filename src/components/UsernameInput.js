import { useState } from 'react';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FormHelperText from '@mui/material/FormHelperText';

import { validateEmail } from '../utils/validation';

const UsernameInput = (props) => {
    const [username, setUsername] = useState('');
    const [validation, setValidation] = useState({
        isError: false,
        errorMessage: ''
    });

    const handleChange = (e) => {
        let enteredText = e.target.value;

        if (enteredText.length === 0) {
            setValidation({ isError: true, errorMessage: 'Username is required.' });
            setUsername('');   
            return;
        }

        if (!validateEmail(enteredText)) {
            setValidation({ isError: true, errorMessage: 'Username is in email format.' });  
            setUsername(enteredText);       
            return;
        }

        setValidation({ isError: false, errorMessage: '' });  
        setUsername(enteredText);
        if (props.sendbacktext) props.sendbacktext(enteredText);
    }

    return (
        <FormControl {...props.defaultProps} fullWidth sx={{ marginBottom: '1rem' }} error={validation.isError}>
            <InputLabel htmlFor="username">Username</InputLabel>
            <Input
                id="username"
                type="email"
                value={username}
                onChange={handleChange}
                endAdornment={
                    <InputAdornment position="end"><IconButton><AccountCircleIcon /></IconButton></InputAdornment>
                } />
            {
                validation.isError ?
                    <FormHelperText error={validation.isError} component="span">{validation.errorMessage}</FormHelperText> : null
            }
        </FormControl>
    );
}

export default UsernameInput;