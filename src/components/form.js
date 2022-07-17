import {useState} from 'react';

const Form = props => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [fNameError, setFNameError] = useState('');
    const [lNameError, setLNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const createAccount = (e) => {

        e.preventDefault();
    };

    const validateFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length <1) {
            setFNameError('First name is required');
        }
        else if (e.target.value.length <2) {
            setFNameError('First name must be at least 2 characters');
        }
        else {
            setFNameError('');
        }
    };

    const validateLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length <1) {
            setLNameError('Last name is required');
        }
        else if (e.target.value.length <2) {
            setLNameError('Last name must be at least 2 characters');
        }
        else {
            setLNameError('');
        }
    };

    const validateEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length <1) {
            setEmailError('Email is required');
        }
        else if (e.target.value.length <5) {
            setEmailError('Email must be at least 5 characters');
        }
        else {
            setEmailError('');
        }
    };

    const validatePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length <1) {
            setPasswordError('Password is required');
        }
        else if (e.target.value.length <8) {
            setPasswordError('Password must be at least 8 characters');
        }
        else {
            setPasswordError('');
        }
    };

    const validateConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value.length <1) {
            setConfirmPasswordError('Password confirmation is required');
        }
        else if (e.target.value !==password) {
            setConfirmPasswordError('Passwords must match');
        }
        else {
            setConfirmPasswordError('');
        }
    };

    return(
        <div>
            <form onSubmit={ createAccount }>
                <div>
                    <label>
                        First Name:
                        <input type='text' onChange={ validateFirstName }></input>
                    </label>
                    {
                        fNameError ?
                        <p>{ fNameError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>
                        Last Name:
                        <input type='text' onChange={ validateLastName }></input>
                    </label>
                    {
                        lNameError ?
                        <p>{ lNameError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>
                        Email:
                        <input type='text' onChange={ validateEmail }></input>
                    </label>
                    {
                        emailError ?
                        <p>{ emailError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>
                        Password:
                        <input type='text' onChange={ validatePassword }></input>
                    </label>
                    {
                        passwordError ?
                        <p>{ passwordError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>
                        Confirm Password:
                        <input type='text' onChange={ validateConfirmPassword }></input>
                    </label>
                    {
                        confirmPasswordError ?
                        <p>{ confirmPasswordError }</p> :
                        ''
                    }
                </div>
                <input type='submit' value='Create User'/>
            </form>
            <h3>Your form data:</h3>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>
    );
}

export default Form;