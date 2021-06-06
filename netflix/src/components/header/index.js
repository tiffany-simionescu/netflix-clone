import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { 
  Background,
  Container, 
  Logo,
  ButtonLink, 
  Feature, 
  Text,
  FeatureCallOut, 
  Link,
  Group, 
  Picture,
  Profile,
  Dropdown
} from './styles/header';

const Header = ({ bg = true, children, ...restProps }) => {
  return bg ? <Background { ...restProps }>{children}</Background> : children;
};

Header.Feature = ({ children, ...restProps }) => {
  return <Feature { ...restProps }>{children}</Feature>;
};

Header.FeatureCallOut = ({ children, ...restProps }) => {
  return <FeatureCallOut { ...restProps }>{children}</FeatureCallOut>;
};

Header.Text = ({ children, ...restProps }) => {
  return <Text { ...restProps }>{children}</Text>;
};

Header.TextLink = ({ children, ...restProps }) => {
  return <Link { ...restProps }>{children}</Link>;
};

Header.Frame = ({ children, ...restProps }) => {
  return <Container { ...restProps }>{children}</Container>;
};

Header.Group = ({ children, ...restProps }) => {
  return <Group { ...restProps }>{children}</Group>;
};

Header.ButtonLink = ({ children, ...restProps }) => {
  return <ButtonLink { ...restProps }>{children}</ButtonLink>;
};

Header.Logo = ({ to, ...restProps }) => {
  return (
    <ReactRouterLink to={to}>
      <Logo { ...restProps } />
    </ReactRouterLink>
  );
};

Header.Picture = ({ src, ...restProps }) => {
  return <Picture { ...restProps } src={`../../images/users/${src}.png`} />;
};

Header.Profile = ({ children, ...restProps }) => {
  return <Profile { ...restProps }>{children}</Profile>;
};

Header.Dropdown = ({ children, ...restProps }) => {
  return <Dropdown { ...restProps }>{children}</Dropdown>;
};

export default Header;