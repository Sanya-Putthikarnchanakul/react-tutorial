import { useState } from 'react';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormHelperText from '@mui/material/FormHelperText'

const PasswordInput = (props) => {
    const [password, setPassword] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [validation, setValidation] = useState({
        isError: false,
        errorMessage: ''
    });

    const handleChange = (e) => {
        let enteredPassword = e.target.value;

        if (enteredPassword.length === 0) {
            setValidation({ isError: true, errorMessage: 'Password is required.' });
            setPassword('');   
            return;
        }

        setValidation({ isError: false, errorMessage: '' });  
        setPassword(enteredPassword);
        if (props.sendbackpassword) props.sendbackpassword(enteredPassword);
    }

    return (
        <FormControl {...props.defaultProps} fullWidth sx={{marginBottom: '1rem'}} error={validation.isError}>
            <InputLabel>{props.labeltext}</InputLabel>
            <Input
                type={isShowPassword ? 'text' : 'password'}
                value={password}
                onChange={handleChange}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton onClick={() => setIsShowPassword(prevState => !prevState)}>
                            {isShowPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                } />
            {
                validation.isError ?
                    <FormHelperText error={validation.isError} component="span">{validation.errorMessage}</FormHelperText> : null
            }
        </FormControl>
    );
}

export default PasswordInput;