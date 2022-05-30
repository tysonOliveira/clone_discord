import React from 'react';

import ServerButton from '../ServerButton';

import { Container, Separator } from './styles';

function ServerList() {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton mentions={3} />
      <ServerButton mentions={5} />
      <ServerButton hasNotifications />
      <ServerButton mentions={32} />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={14} />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
    </Container>
  );
}

export default ServerList;