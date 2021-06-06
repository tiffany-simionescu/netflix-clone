import React from 'react';
import {
  Container,
  Title,
  List,
  Item,
  Picture,
  Name
} from './styles/profiles';

const Profiles = ({ children, ...restProps }) => {
  return <Container { ...restProps }>{children}</Container>;
};

Profiles.Title = ({ children, ...restProps }) => {
  return <Title { ...restProps }>{children}</Title>;
};

Profiles.List = ({ children, ...restProps }) => {
  return <List { ...restProps }>{children}</List>;
};

Profiles.User = ({ children, ...restProps }) => {
  return <Item { ...restProps }>{children}</Item>;
};

Profiles.Picture = ({ src, ...restProps }) => {
  return (
    <Picture 
      { ...restProps } 
      src={src ? (
        `../../images/users/${src}.png`
      ) : (
        `../../images/misc/loading.gif`
      )} 
    />
  );
};

Profiles.Name = ({ children, ...restProps }) => {
  return <Name { ...restProps }>{children}</Name>;
};

export default Profiles;