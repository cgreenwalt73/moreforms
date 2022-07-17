import {useState} from 'react';

const Form = props => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const createAccount = (e) => {

        e.preventDefault();

        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log(newUser);
    };

    return(
        <div>
            <form onSubmit={ createAccount }>
                <div>
                    <label>
                        First Name:
                        <input type='text' onChange={ (e) => setFirstName(e.target.value) }></input>
                    </label>
                </div>
                <div>
                    <label>
                        Last Name:
                        <input type='text' onChange={ (e) => setLastName(e.target.value) }></input>
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input type='text' onChange={ (e) => setEmail(e.target.value) }></input>
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input type='text' onChange={ (e) => setPassword(e.target.value) }></input>
                    </label>
                </div>
                <div>
                    <label>
                        Confirm Password:
                        <input type='text' onChange={ (e) => setConfirmPassword(e.target.value) }></input>
                    </label>
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