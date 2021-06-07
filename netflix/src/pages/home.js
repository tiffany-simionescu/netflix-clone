import React, { useState } from 'react';
import { Feature, OptForm } from '../components';
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import * as ROUTES from '../constants/routes';
import { useHistory } from 'react-router-dom';
import { validateEmail } from '../functions';

const Home = () => {
  const [emailAddress, setEmailAddress] = useState('');

  const history = useHistory();

  const isInvalid =  emailAddress === '' || !validateEmail(emailAddress);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.localStorage.setItem('emailForRegistration', emailAddress);
    history.push(ROUTES.SIGN_UP);
  };

  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited movies, TV programmes and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
          <OptForm>
            <OptForm.Input 
              placeholder="Email address" 
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <OptForm.Button 
              onClick={handleSubmit} 
              disabled={isInvalid}
            >
              Try it now
            </OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>

      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}

export default Home;
