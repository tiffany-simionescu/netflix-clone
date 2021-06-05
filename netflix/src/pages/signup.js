import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { FooterContainer, HeaderContainer } from '../containers';
import { Form } from '../components';
import { validateEmail } from '../functions';
import * as ROUTES from '../constants/routes';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const isInvalid = firstName === '' ||
        firstName.length < 2 ||
        password === '' || 
        password.length < 4 || 
        password.length > 60 || 
        password.includes("~") || 
        emailAddress === '' ||
        validateEmail(emailAddress) === false;

  const handleSubmit = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((res) => {
        res.user
        .updateProfile({
          displayName: firstName,
          photoURL: Math.floor(Math.random() * 5) + 1,
        })
        .then(() => {
          history.push(ROUTES.BROWSE)
        })
      })
      .catch((error) => {
        setFirstName('');
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      })
  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSubmit} method="POST">
            <Form.Input 
              placeholder="First Name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input 
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target}) => setEmailAddress(target.value)}
            />
            <Form.Input 
              type="password"
              autoComplete="off"
              placeholder="Password"
              value={password}
              onChange={({ target}) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign Up
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            ALready a user? <Form.Link to="/signin">Sign in now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a 
            bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
};

export default Signup;