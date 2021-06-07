import React, { useState } from 'react';
import { Accordion, OptForm } from '../components';
import faqsData from '../fixtures/faqs';
import * as ROUTES from '../constants/routes';
import { useHistory } from 'react-router-dom';
import { validateEmail } from '../functions';

export const FaqsContainer = () => {
  const [emailAddress, setEmailAddress] = useState('');

  const history = useHistory();

  const isInvalid =  emailAddress === '' || !validateEmail(emailAddress);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.localStorage.setItem('emailForRegistration', emailAddress);
    history.push(ROUTES.SIGN_UP);
  };

  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      <Accordion.Frame>
        {faqsData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Frame>

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
    </Accordion>
  );
}
