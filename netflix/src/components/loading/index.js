import React from 'react';
import { LockBody, ReleaseBody, Spinner, Picture } from './styles/loading';

const Loading = ({ src, ...restProps }) => {
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} data-testid="loading-picture" />
    </Spinner>
  );
}

Loading.ReleaseBody = () => {
  return <ReleaseBody />;
};

export default Loading;