import { useState } from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label,
  } from "reactstrap";


function Form1() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error1, setError1] = useState(false);
    const [error2, setError2] = useState(false);

    const handleName = (name) => {
        setName(name.target.value);
        setSubmitted(false);
    };

    const handleEmail = (email) => {
        setEmail(email.target.value);
        setSubmitted(false);
    };

    const handlePassword1 = (pw) => {
        setPassword1(pw.target.value);
        setSubmitted(false);
    };

    const handlePassword2 = (pw) => {
        setPassword2(pw.target.value);
        setSubmitted(false);
    };

    const handleSubmit = (x) => {
        x.prevent.Default();
        if (name === "" || email === "" || password1 === "" || password2 === "" ) {
            setError1(true);
        } else if (password1 !== password2) {
            setError2(true);
        } else {
            setSubmitted(true);
            setError1(false);
            setError2(false);
        }
    };

    const successMessage = () => {
        return(
            <div className = "success" style={{ display: submitted ? '' : 'none', }}>
                <h1>User {name} successfully registered!!</h1>
            </div>
        );
    };

    const errorMessage1 = () => {
        return(
            <div className = "error" style={{ display: error1 ? '' : 'none', }}>
                <h1>Please enter all fields</h1>
            </div>
        );
    };

    const errorMessage2 = () => {
        return(
            <div className = "error" style={{ display: error2 ? '' : 'none', }}>
                <h1>Passwords do not match</h1>
            </div>
        );
    };

    return (
        <div className="form">
            <div>
                <h3>User Registration</h3>
            </div>

            <div className="messages">
                {errorMessage1()}
                {errorMessage2()}
                {successMessage()}
            </div>
            
            <form>
                <label className="label">Name</label>
                <input 
                    onChange={handleName} 
                    className="input" 
                    value={name} 
                    type="text" 
                />
        
                <label className="label">Email</label>
                <input onChange={handleEmail} className="input" value={email} type="email" />
        
                <label className="label">Password</label>
                <input onChange={handlePassword1} className="input" value={password1} type="password" />

                <label className="label">Password</label>
                <input onChange={handlePassword2} className="input" value={password2} type="password" />
        
                <button onClick={handleSubmit} className="btn" type="submit">Submit</button>
        </form>
    </div>
    );

}

export default Form1 