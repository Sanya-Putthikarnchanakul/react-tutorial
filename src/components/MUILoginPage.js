import { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './MUILoginPage.module.css';

const MUILoginPage = () => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [emailValidationError, setEmailValidationError] = useState({ isError: false, errorMessage: null });

    const [enteredPassword, setEnteredPassword] = useState('');
    const [passwordValidationError, setPasswordValidationError] = useState({ isError: false, errorMessage: null });

    const enteredEmailHandler = (e) => {
        setEnteredEmail(e.target.value);
    }

    const enteredPasswordHandler = (e) => {
        setEnteredPassword(e.target.value);
    }

    const onLoginClickHandler = () => {
        if (enteredEmail.length === 0) {
            setEmailValidationError({ isError: true, errorMessage: 'Email can not be null.' });
        } else{
            setEmailValidationError({ isError: false, errorMessage: null });
        }

        if (enteredPassword.length === 0) {
            setPasswordValidationError({ isError: true, errorMessage: 'Password can not be null.' });
        } else{
            setPasswordValidationError({ isError: false, errorMessage: null });
        }
    }

    return (
        <>
            <div className={styles.loginBox}>
                <div className={styles.icon}>
                    <Link to='/'>
                        <img src="/images/stack-overflow-icon.png" alt="Stackoverflow Icon" width={32} />
                    </Link>                    
                </div>
                
                <div style={{ marginBottom: '16px' }}>
                    <button className={`${styles.button} ${styles.googleButton}`}>
                        <img src="/images/google-icon.png" alt="Google Icon" width={18} height={18} />
                        Log in with Google
                    </button>
                    <button className={`${styles.button} ${styles.githubButton}`}>
                        <svg width="18" height="18" viewBox="0 0 18 18">
                            <path d="M9 1a8 8 0 00-2.53 15.59c.4.07.55-.17.55-.38l-.01-1.49c-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.42 7.42 0 014 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48l-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 009 1z" fill="#FFFFFF"></path>
                        </svg>
                        Log in with Github
                    </button>
                    <button className={`${styles.button} ${styles.facebookButton}`}>
                        <svg width="18" height="18" viewBox="0 0 18 18">
                            <path d="M3 1a2 2 0 00-2 2v12c0 1.1.9 2 2 2h12a2 2 0 002-2V3a2 2 0 00-2-2H3zm6.55 16v-6.2H7.46V8.4h2.09V6.61c0-2.07 1.26-3.2 3.1-3.2.88 0 1.64.07 1.87.1v2.16h-1.29c-1 0-1.19.48-1.19 1.18V8.4h2.39l-.31 2.42h-2.08V17h-2.5z" fill="#FFFFFF"></path>
                        </svg>
                        Log in with Facebook
                    </button>
                </div>

                <div className={styles.authForm}>
                    <div style={{ display: 'flex', flexDirection: 'column', margin: '6px 0' }}>
                        <label>Email</label>
                        <input type='email' placeholder='Enter Your Email' value={enteredEmail} onChange={enteredEmailHandler}/>
                        {
                            emailValidationError.isError ?
                                <p className={styles.validationError}>{emailValidationError.errorMessage}</p> :
                                null
                        }                        
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', margin: '6px 0' }}>
                        <div className={styles.twoColumnLabel}>
                            <label style={{ cursor: 'pointer' }}>Password</label>
                            <Link to='/'>Forgot password?</Link> 
                        </div>
                        <input type='password' placeholder='Enter Your Password' value={enteredPassword} onChange={enteredPasswordHandler} />
                        {
                            passwordValidationError.isError ?
                                <p className={styles.validationError}>{passwordValidationError.errorMessage}</p> :
                                null
                        }
                    </div>
                    <button className={styles.loginButton} onClick={onLoginClickHandler}>Login</button>
                </div>
            </div>
        </>
    );
};

export default MUILoginPage;